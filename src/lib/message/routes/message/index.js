 var messages = require('./messages')();

module.exports = function (router) {

    router.route('/ping')
        .get(ping);

    router.route('/messages')
        .get(messages.getMessage);

    router.route('/messages')
        .post(messages.createMessage);
    
    router.route('/messages')
        .put(messages.updateMessage);
};

var ping = function (req, res) { 
    res.send('Message is still here, sucka.'); 
};