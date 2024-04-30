const { ReturnDocument } = require('mongodb');
const User = require('../Schema/User');
const Bcrypt = require('bcrypt');
const Profile = require('../Schema/Profile');
const { object } = require('joi');

exports.create_User = async (request, h) => {
    try {
    const profileModel = await Profile.findOne({
        _id: request.payload.Profile_id
    });

    const name = profileModel.firstname;
    const uniqueNumber = Math.floor(Math.random() * 10000);
    

    let Username = request.payload.Username;  
    let password = request.payload.password;

    if(!Username && !password){
        Username = name.concat(uniqueNumber);
        password = Math.random().toString(36).substring(2, 15);
        console.log(password);
    }
    
    const salt = await Bcrypt.genSalt(10);
    const hashe = await Bcrypt.hash(password.toString(), salt);
    const userData = Object.assign({}, request.payload, {password: hashe, Username});
    const user = await User.create(userData);
    console.log(user);
    return user
    } catch (error) {
        console.log(error);
        return "Unable to fetch the data"
    }
}
