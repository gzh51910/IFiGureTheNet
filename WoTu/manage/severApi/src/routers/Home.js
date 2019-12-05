//引入第三方模块
const express = require('express');
//引入Router模块
const Router = express.Router();
//引入mongodb数据库
const mongodb = require('../db/mongodb-me')
    //引入工具文件
const { formatData } = require('../utils')

//首页查询数据接口--页面主体
Router.get('/', async(req, res) => {
        // mongodb查询数据库（1）
        let data = await mongodb.Find('首页（整体部分）', {});
        res.send(formatData({ data }))
    })
    //首页查询数据接口--页面左右滑动列表
Router.get('/list', async(req, res) => {
        // mongodb查询数据库（1）
        let data = await mongodb.Find('首页（左右滑动列表）', {}, { limit: 60 });
        res.send(formatData({ data }))
    })
    //首页查询数据接口--页面推荐上下滑动列表
Router.get('/li', async(req, res) => {
        // mongodb查询数据库（1）
        let data = await mongodb.Find('首页（推荐）', {});
        res.send(formatData({ data }))
    })
    //导出Router
module.exports = Router