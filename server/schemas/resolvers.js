const { AuthenticationError } = require('apollo-server-express');
const { User, Toilet, Location } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      users: async() => {
        const user = await User.find()
                .select('-__v -password')
                .populate('toilets')
        
        return user;
      },
      user: async(parent, { username }) => {
          const user = await User.findOne()
                    .select('-__v -password')
                    .populate('toilets')
            
        return user;
      },
      me: async(parents, args, context) => {
          if (context.user) {
              const me = await User.findOne({_id: context.user._id})
                    .select('-__v -password')
                    .populate('toilets')
            
            return me;
          }

          throw new AuthenticationError('Not logged in');
      }
  },
  Mutation: {
    addUser:  async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return{ token, user }
    },
    updateUser: async ( parent, args, context ) => {
        
        if (context.user) {
            const newMe = await User.findOneAndUpdate(
            { _id: context.user._id },
            { ...args },
            { new: true }
        )
        
        return newMe;
        }

        throw new AuthenticationError('You need to be logged in')
    },
    updatePassword: async (parent, args, context) => {
        if (context.user) {
            const newPassword = await User.findOne(
                {_id: context.user._id},
            )
            newPassword.password = args.password
            await newPassword.save()

            return await User.findOne({_id: context.user._id})
        }
        
        throw new AuthenticationError('You need to be logged in')
    },
    login: async ( parent, { username, password } ) => {
        const user = await User.findOne({ username });

        if (!user) {
            throw new AuthenticationError('Incorrect credentials');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
        }

       const token = signToken(user);
       
       return { token, user };
    },
    addToilet: async (parent, args, context) => {
        if (context.user) {

            const toilet = await Toilet.create({username: context.user.username, ...args})

            const addToUser = await User.findOneAndUpdate(
                {_id: context.user._id},
                { $addToSet: {toilets: toilet._id}},
                {new: true}
                )            
            
            const location = await Location.findOne({location: args.location})

            if (location) {
               const updatedLocation = await Location.findOneAndUpdate(
                   {location: args.location},
                   { $push: {toilets: toilet._id}},
                   {new: true}
                   )
            } else {
            const newLocation = await Location.create(
                   {
                       location: args.location, toilets: toilet._id
                   }
            )
            }
            return toilet;
            
        }

        throw new AuthenticationError('You need to be logged in')
    },
    updateToilet: async (parent, args, context) => {
        if (context.user) {
            const updatedToilet = Toilet.findOneAndUpdate(
                {location: args.location},
                {...args},
                {new: true}
                )

            return updatedToilet;
        }
        throw new AuthenticationError('You need to be logged in')
    }

  }
};

module.exports = resolvers;