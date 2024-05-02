const Profile = require('../../Schema/Profile');

const get_all= async (request, h) => {
        console.log(request.auth.credentials.user.role);
        try {
                const readAll = await Profile.find();
                // console.log(readAll);
                return readAll;
        } catch (error) {
                console.log(error);
                return error;
        }
}

module.exports = get_all;