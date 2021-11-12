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