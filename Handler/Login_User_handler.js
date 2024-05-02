const User = require('../Schema/User');
const Boom = require('boom');
const Bcrypt = require('bcrypt');
const Profile = require('../Schema/Profile');
const { valid } = require('joi');
const create_token = require('../util/config');
const redis = require('../util/redis')

exports.login_User = async (request, h) => {
    
    const { Username, password } = request.payload;
    try {
        const user = await User.findOne({ Username }).lean();
        // console.log(user);
        if(!user){
            return Boom.badRequest("User not found");
        }
        const passwordMatch = await Bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return Boom.badRequest("Invalid Password")
        }
        // console.log(user);
        delete user.password;
        // console.log('Object after deleting',user);
        
        const session = {
            valid: true,
            id: Math.floor(Math.random() * 10000).toString(),
            user: user
        }
        const token = await create_token(session);
        console.log(token);

        // console.log(session.id);
        const redis_store = await redis.set(session.id, JSON.stringify(session));
        // console.log(redis_store);

        return {
            statucode: 200,
            message: "Logged In",
            data: {
                user: user,
                jwt: token
            }
        };
    } catch (error) {
        console.log(error);
        return error;
    }
}