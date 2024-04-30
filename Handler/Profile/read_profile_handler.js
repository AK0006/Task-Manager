const User = require('../../Schema/Profile');

exports.get_all = async (request, h) => {
        console.log(request);
        const readAll = await User.find();
        return readAll;
}