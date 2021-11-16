const { AuthenticationError } = require('apollo-server-express');
const { User, Review, Location } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      users: async() => {
        const user = await User.find()
                .select('-__v -password')
                .populate('reviews')
        
        return user;
      },
      user: async(parent, { username }) => {
          const user = await User.findOne({ username: username })
                    .select('-__v -password')
                    .populate('reviews')
            
        return user;
      },
      me: async(parents, args, context) => {
          if (context.user) {
              const me = await User.findOne({_id: context.user._id})
                    .select('-__v -password')
                    .populate('reviews')
            
            return me;
          }

          throw new AuthenticationError('Not logged in');
      },
      reviews: async() => {
        const reviews = await Review.find()
        
        return reviews;
    },
    locations: async(parent, args) => {
        const locations = await Location.find({zipcode: args.zipcode})
                                        .populate('reviews')

        return locations;
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
    login: async ( parent, { email, password } ) => {
        const user = await User.findOne({ email });

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
    addReview: async (parent, args, context) => {

        if (context.user) {
            const review = await Review.create({username: context.user.username, ...args})

            const addToUser = await User.findOneAndUpdate(
                {_id: context.user._id},
                { $addToSet: {reviews: review._id}},
                {new: true}
                )            
            
            const location = await Location.findOne({location: args.location})

            if (location) {
               const updatedLocation = await Location.findOneAndUpdate(
                   {location: args.location},
                   { $push: {reviews: review._id}},
                   {new: true}
                   )
            } else {
            const newLocation = await Location.create(
                   {
                       location: args.location, reviews: review._id
                   }
            )
            }
            return review;
        }

        throw new AuthenticationError('You need to be logged in!')

    },
    updateReview: async (parent, args, context) => {
        if (context.user) {
            const updatedReview = Review.findOneAndUpdate(
                {location: args.location},
                {...args},
                {new: true}
                )

            return updatedReview;
        }
        throw new AuthenticationError('You need to be logged in')
    }

  }
};

module.exports = resolvers;