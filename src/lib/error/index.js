module.exports = function (app) {

    var errorHandler = function (err, req, res, next) {

        req.log.error(err.message);

        switch (err.custom) {
            case 'invalid-update': {
                res.status(401).send({ error: 'Invalid update information' });
                break;
            }
            default: {
                next(err);
            }
        }
    };

    app.use(errorHandler);

};
