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
    }
  }
};

module.exports = resolvers;