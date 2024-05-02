const User = require('../../Schema/Profile');

exports.get_all = async (request, h) => {
        const readAll = await User.find();
        console.log(readAll);
        return readAll;
}