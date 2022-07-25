const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const {User} = require('../models');


const resolvers ={
    Mutation:{
        addUser: async(parent, args)=>{
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
        }
    }
};

module.exports = resolvers;