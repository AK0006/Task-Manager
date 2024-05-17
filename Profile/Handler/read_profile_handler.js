const Profile = require('../Schema/Profile');

exports.get_all = async (request, h) => {

        console.log(request.auth.credentials.user.role);
        try {
                const readAll = await Profile.find();
                return {
                        statuscode: 200,
                        message: "get all profile",
                        data: readAll
                };
        } catch (error) {
                throw error;
        }
}
