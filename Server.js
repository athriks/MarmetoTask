let express = require('express');
let app = express();
let router1 = require('./Router')
app.use(router1)
app.listen(3000,()=>{
    console.log("server started")
})