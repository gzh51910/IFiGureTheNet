const jwt = require('jsonwebtoken');
const secretKey = 'Admin';

/**
 * 
 * @param {Object} data                 加密的数据
 * @param {Number|String} expiresIn     有效期
 * @return {String}                     返回token
 */
function create(data, expiresIn =60*60*2) {
    var token = jwt.sign(
        data,
        secretKey, // 密钥
        { expiresIn } //有效期（单位：s）
    );
    return token;
}

function verify(token) {
    let result;
    try {
        var decoded = jwt.verify(token, secretKey);
        result = true;
    } catch (err) {
        // err
        result = false;
    }
    return result;
}

module.exports = {
    create,
    verify
}