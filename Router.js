let express = require('express');
const Router = express.Router()
let voucher = require('voucher-code-generator');
var nodemailer = require('nodemailer');
let fs  = require('fs');
Router.get('/generate', (req,res)=>{
    var date  = new Date();
    let suffix;
    let pin;
    let alpha = ["a", "b", "c", "d","e","f","g","h","i","j","k"]
    let a = Math.floor(Math.random()*10);
    let b = Math.floor(Math.random()*10);
    let c = Math.floor(Math.random()*10);
    let d = Math.floor(Math.random()*10);
    let e = Math.floor(Math.random()*10);
console.log(date)
this.suffix = a+""+alpha[b]+""+b+""+alpha[c]+c+""+alpha[c]+""+d+""+alpha[d]+e+"";
this.pin = a+""+alpha[b]+""+b+""+alpha[c]+c+"";

    let code = voucher.generate({
        prefix:"VCD",
        postfix:this.suffix
    })
    console.log(this.pin)
    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'athriksas@gmail.com',
    pass: 'Ks948019@'
  }
});

var mailOptions = {
    from: 'athriksas@gmail.com',
    to: 'sathyanaryanakr@gmail.com',
    subject: 'Sending Voucher and Pin ',
    html: '<h1>Welcome Sathyanarayana</h1>'+"<p>Voucher :</P>" +code + "<p>PIN :</p>"+this.pin +"<p>Date :</p>"+date
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
res.send("Voucher Code" +code + ""+""+
"PIN"+this.pin)
    console.log(code)
    let data = "Voucher:"+code +""+ "Pin:"+this.pin +""+"date:"+date;
   fs.appendFile("Voucher.log", data, (err,value)=>{
       console.log(data)
   })
   
})

Router.get("/getVoucher", (req,res)=>{
    fs.readFile("./Voucher.log",'utf-8',(err,data)=>{
        res.send(data)
        console.log(data)
    })
})

module.exports = Router;