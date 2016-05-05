var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var models = {};

exports.get = function(model) {
    return models[model];
};

exports.all = function() {
    return models;
};

var modelFiles = fs.readdirSync(
    path.join(
        path.dirname(
            fs.realpathSync(__filename)
        ),
        'models'
    )
);

var requireMapFunction = function(t) {
    models[t.replace(/\.js$/, '')] = require('./models/' + t);
};

_.map(
    modelFiles,
    requireMapFunction
);
