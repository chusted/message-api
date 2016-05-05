var Message = require('../../models/models/message');

 module.exports = function(router) {
     
     var message = {
         getMessage: getMessage,
         createMessage: createMessage,
         updateMessage: updateMessage
     };
     
     return message;
 };
 
 var getMessage = function (req, res, next) {
     Message.findOne({})
        .exec(function(err, message) {
            if (err) {
                return next(err);
            }
            res.send({
                message: message.text
            });
        });
 };
 
 var createMessage = function (req, res, next) {
     var message = new Message();
     message.text = req.body.message.text;
     console.log(message.text);
     message.save(function(err) {
            if(err) {
                return next(err);
            }
            res.json({success:true});
        });
 };
 
 var updateMessage = function (req, res, next) {
   Message.findOne({text: req.body.message.text}, function(err, message){
       if(err) {
           return next(err);
       }
       message.update({rating: req.body.message.rating}, function(err) {
          if(err) {
              return next(err);
          } 
          res.json({success:true});
       });
   });
 };
