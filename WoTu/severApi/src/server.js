const express = require('express');

const app = express();

const {PORT} = require('./config.json');

const allRouter = require('./routers'); 
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(express.static('./'))
app.use(allRouter);

app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})