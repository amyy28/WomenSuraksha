// const Nexmo = require('nexmo');

//     const nexmo = new Nexmo({
//     apiKey: '251a6c95',
//     apiSecret: 'cDbN1WVSXL6ouQh3',
//     applicationId: '980d7b5d-1257-445e-b274-59e5b3e7a9be',
//     privateKey: '/home/ayush/Documents/private.key',
//     });

//     const ncco = [
//         {
//           action: 'talk',
//           voiceName: 'Joey',
//           text:
//             'This is a text-to-speech test message.',
//         },
//       ];
//       nexmo.calls.create(
//         {
//           to: [{ type: 'phone', number: '919934175942' }],
//           from: { type: 'phone', number: '919123168942' },
//           ncco,
//         },
//         (err, result) => {
//           console.log(err || result);
//         },
//       );
      // const nodemailer = require("nodemailer");

      // const output=`<h2>We are here to help you.</h2>`

      // async function main(){

              // Generate test SMTP service account from ethereal.email
              // Only needed if you don't have a real mail account for testing
              // let testAccount = await nodemailer.createTestAccount();
            
              // create reusable transporter object using the default SMTP transport
            //   var transporter = nodemailer.createTransport({
            //           service: 'gmail',
            //         //   host: 'smtp.gmail.com',
            //           auth: {
            //                  user: 'ayushujjwal8051390678@gmail.com',
            //                  pass: 'Sixteen121998'
            //              }
            //          });
            //          const mailOptions = {
            //           from: '"Women Suraksha" <ujjwal.msrit@gmail.com>', // sender address
            //           to: "@gmail.com", // list of receivers
            //           subject: "Location Details", // Subject line
            //           html: output// plain text body
            //         };

            //   transporter.sendMail(mailOptions, function (err, info) {
            //           if(err)
            //             console.log(err)
            //           else
            //             console.log(info);
            //        });
     
            // }
            
            // main().catch(console.error);