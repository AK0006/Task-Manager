const User = require('../../Schema/Profile');

exports.get_all = async (request, h) => {
        console.log(request.auth.credentials.user.Username);
        const readAll = await User.find();
        return readAll;
}