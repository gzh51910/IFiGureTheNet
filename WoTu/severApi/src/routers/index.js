const express = require('express');

let Router = express.Router();

const {
    formatData
} = require('../utils')

let HomeRouter = require('./Home');
let ListRouter = require('./List');
let GoodsRouter = require('./goods');
let AdminRouter = require('./Adminlogin');
let loginRouter = require('./login');
let regRouter = require('./reg');
let userRouter = require('./user');
// 跨域解决方案CORS
Router.use((req, res, next) => {
    // 支持CORS跨域，只需要设置响应头
    let currentOrigin = req.get('Origin');
    let allowOrigin = ['http://localhost:8080', 'http://localhost:8081',
        'http://localhost:8081', 'http://localhost:3000']
    if (allowOrigin.includes(currentOrigin)) {
        res.set({
            'Access-Control-Allow-Origin': currentOrigin,
            'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
            'Access-Control-Allow-HEADERS': "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
        })

    }
    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
})

// 格式化请求体中的参数
Router.use(express.json(), express.urlencoded({
    extended: false
}));

Router.use('/home', HomeRouter);
Router.use('/list', ListRouter);
Router.use('/goods', GoodsRouter);
Router.use('/login', loginRouter);
Router.use('/reg', regRouter);
Router.use('/user', userRouter);
Router.use('/admin', AdminRouter);
Router.get('/verify', (req, res) => {
    // 获取请求头上的token
    let Authorization = req.get('Authorization');
    if (token.verify(Authorization)) {
        res.send(formatData())
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})

module.exports = Router;