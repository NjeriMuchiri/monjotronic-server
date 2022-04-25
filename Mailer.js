const nodemailer = require('nodemailer')

const Mailer = function(data){
    this.data = data
}
Mailer.prototype.mail = async function(){
    return new Promise( async (resolve,reject) => {
        const transporter = nodemailer.createTransport({
          port: 587,               // true for 465, false for other ports
          host: "asili.tandahost.co.ke",
             auth: {
                  user: "info@monjotronicsolutions.co.ke",
                  pass:"@2016monjo$2021",
               },
          secure: false,
          });
      
          const mailData = {
                from: this.data.fullname,  // sender address
                to: 'info@monjotronicsolutions.co.ke',   // list of receivers
                subject: `You have a new message from ${this.data.fullname}`,
                text: 'That was easy!',
                html: `
                <b>Client fullname: ${this.data.fullname} </b><br>
                <b>Client phonenumber: ${this.data.phonenumber} </b><br>
                <b>Client email: ${this.data.email} </b><br>
                <b>Client description: ${this.data.description} </b><br><br>
                <b>Message: ${this.data.message} </b>
                `,
              };
              transporter.sendMail(mailData, function (err, info) {
                  if(err)
                   { reject("Email was not sent please try again later!")
                    console.log(err)}
                  else
                    {resolve("Email has been sent thank you for contacting us.")
                    console.log(info);}
               })
      })
}
module.exports = Mailer