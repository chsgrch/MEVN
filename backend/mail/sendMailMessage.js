const nodemailer = require("nodemailer");

class sendMail {
  constructor() {}
  async send(userParams) {
    let surname = userParams.surname;
    let name = userParams.name;
    let mail = userParams.mail;
    let resumePathToFolder = userParams.path;
    let vacansy = userParams.vacansy;
    let fileFullPath = userParams.fileFullPath;
    let nameOfFile = userParams.fileName;
    console.log(` -> File path = ${fileFullPath}`);

    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "address@gmail.com",  
          pass: "password"
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Колос" <address@gmail.com">', // sender address
        to: "adminmail@mail.ru", // Кому
        subject: "Отклик на вакансию", // Subject line
        html: `
        <h3>Новый отклик на вакансию ${vacansy}!</h3>
         <table>
           <tr>
             <td><b>Фамилия:</b></td>
             <td>${surname}</td>
           </tr>
           <tr>
             <td><b>Имя:</b></td>
             <td>${name}</td>
           </tr>
           <tr>
             <td><b>e-mail:</b></td>
             <td>${mail}</td>
           </tr>
         </table>`, // html body
        attachments: [
          {
            filename: nameOfFile,
            path: fileFullPath
          }
        ]
      });
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      userParams.res.send("complete");
    } catch (err) {
      console.log(` -> !Error in sendMailMessageModule: ${err}`);
      userParams.res.send(`${err}`);
    }
  }
}

module.exports = exports = sendMail;
