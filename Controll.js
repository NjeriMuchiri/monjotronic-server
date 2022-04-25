const Mailer = require('./Mailer')

exports.send = function(req,res){
    console.log(req.body)
    let M = new Mailer(req.body)
     M.mail().then(
     (response) => res.status(200).json({response: response})
     ).catch(
    (error) => res.status(401).json({response: error})
     )

}