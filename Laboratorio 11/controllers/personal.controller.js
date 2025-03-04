const path = require('path');

exports.get_personal = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'fer_personal.html'))
};