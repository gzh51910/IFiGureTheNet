const express = require('express');

const Router = express.Router();

const {
    Find
} = require('../db/mongodb-me');
const {
    formatData,
    token
} = require('../utils');


const colName = 'manager'
Router.get('/', async (req, res) => {
    let {name, password} = req.query;
    let data = await Find
(colName, {
        name,
        password
    });
    if (data.length > 0) {
        // 登录成功创建一个token
        let Authorization = token.create({ name});
        res.set({
            // 让浏览器运行获取自定义响应头（必须设置Access-Control-Expose-Headers响应头，才能在前端js中获取自定义的响应头）
            'Access-Control-Expose-Headers': 'Authorization',
            'Authorization': Authorization
        });
        res.send(formatData({
            data
        }));
    } else {

        res.send(formatData({
            status: 0
        }))
    }
})

module.exports = Router;