const { request } = require("http");
const Profile = require('../Schema/Profile');
const Bcrypt = require('bcrypt');
const { payload } = require("../Validation/add_profile_Joi");
const { object } = require("joi");


exports.create_user = async (request, h) => {
    const { Password, Createdat, ...rest } = request.payload;

    try {
        const salt = await Bcrypt.genSalt(10);
        const hashPassword = await Bcrypt.hash(Password, salt);
        const data = Object.assign(rest, Createdat, {Password: hashPassword});
        const result = await Profile.create(data);
        return {
            statuscode: 200,
            message: "profile created",
            data: result
        };
    } catch (error) {
        throw error;
    }
}