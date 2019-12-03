const express = require('express');

const Router = express.Router();

const mongodb = require('../db/mongodb-me');
const { formatData, token } = require('../utils');
const colName = 'user';

Router.get('/', async (req, res) => {
    let { phone, password } = req.query;
    let data = await mongodb.Find(colName, { phone, password });
    if (data.length > 0) { //查询到数据
        // 登录成功创建一个token
        let Authorization = token.create({ phone });
        res.set({
            // 让浏览器运行获取自定义响应头（必须设置Access-Control-Expose-Headers响应头，才能在前端js中获取自定义的响应头）
            'Access-Control-Expose-Headers': 'Authorization',
            'Authorization': Authorization
        });
        res.send(formatData({ data }));
    } else { //未查询到数据
        res.send(formatData({ status: 0 }));
    }
    // res.send(formatData({data}));
})

module.exports = Router;