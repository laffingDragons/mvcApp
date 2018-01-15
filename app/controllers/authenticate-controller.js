var jwt = require('jsonwebtoken');

module.exports.authenticate = function (req, res) {
    var user = {
        username: 'test',
        email: 'akshay@gmail.com'
    }
    var token = jwt.sign(user, process.env.SECRET_KEY, {
        epiresIn: 5000
    });
    res.json({
        success: true,
        token: token
    })
}
