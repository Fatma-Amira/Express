var express = require("express");
var app = express();
var path=require('path')
app.use(verifytime=(req,res,next)=>{
    const date =new Date();
    console.log(date);
    if (date.getDay() !== 0 && date.getDay() !== 6 && date.getHours()>=9 && date.getHours()<=17) {next()}
    else {res.send("page not available : you are outside of working time..........")}
})
app.use(date=(req,res,next)=>{
  let requestAt=new Date()
  console.log(requestAt)
  next()
 })
var indexRouter=require('./Routes/Home.js')
var ServicesRouter=require('./Routes/Services.js')
var ContactRouter=require('./Routes/Contact.js')
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')
app.use('/',indexRouter)
app.use('/Services',ServicesRouter)
app.use('/Contact',ContactRouter)

app.listen(3000,function(){
  console.log("is rinning")
})