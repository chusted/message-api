
var router = require('./routes')();

module.exports = function() {

    var message = {
        router: router
    };

    return message;

};
