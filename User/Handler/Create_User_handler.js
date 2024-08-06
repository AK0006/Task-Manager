const User = require('../Schema/User');
const Bcrypt = require('bcrypt');
const Profile = require('../../Profile/Schema/Profile');
const { transporter } = require('../../server');

exports.create_User = async (request, h) => {
    try {

        const profileModel = await Profile.findOne({
            _id: request.payload.Profile_id
        });

        const name = profileModel.firstname;
        const uniqueNumber = Math.floor(Math.random() * 10000);


        let Username = request.payload.Username;
        let password = request.payload.password;

        if (!Username && !password) {
            Username = name.concat(uniqueNumber);
            password = Math.random().toString(36).substring(2, 15);
            console.log(password);
        }

        const salt = await Bcrypt.genSalt(10);
        const hashe = await Bcrypt.hash(password.toString(), salt);
        const userData = Object.assign(request.payload, { password: hashe, Username });
        const user = await User.create(userData);

        const sendMail = await transporter.sendMail({
            from: 'aksteelshot99@gmail.com',
            to: profileModel.Email,
            subject: 'LOGIN CREDENTIALS',
            text: `
            Dear User,
            Your account has been created successfully.
            Here are your login details: 
            User ID: ${Username}
            Password: ${password}
            Thank You`
        });
        // console.log(sendMail);
        return {
            statuscode: 200,
            message: "user created",
            data: user
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}
