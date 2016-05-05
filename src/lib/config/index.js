module.exports = (function() {

    var env = process.env.NODE_ENV;
    var _ = require('lodash');

    var toReturn = {};
    var local = null;
    var config = {};

    config.base = {
        env: 'base',
        mongo: {
            url: (process.env.MONGODB || 'mongodb://localhost/messages')
        },
        auth : {
            jwtSecret: process.env.SECRET || 'oneplusoneequalsthree'
        }
    };

    config.development = {
        env: 'development'
    };

    config.latest = {
        env: 'latest'
    };

    toReturn = _.merge(config.base, config[env]);

    if (local !== null) {
        toReturn = _.merge(toReturn, local);
    }

    return toReturn;

}());
