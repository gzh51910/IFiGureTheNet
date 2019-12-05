//引入第三方模块
const express = require('express');
//引入Router模块
const Router = express.Router();
//引入mongodb数据库
const mongodb = require('../db/mongodb-me')
    //引入工具文件
const {
    formatData
} = require('../utils')

//首页左右滑动
Router.get('/find', async(req, res) => {
        let { page, size, sort } = req.query;
        let index = (page - 1) * size
            // mongodb查询数据库（1）
        let data = await mongodb.Find('list', {}, { skip: index, limit: size, sort });
        res.send(formatData({
            data
        }))
    })
    //背景墙
Router.get('/find1', async(req, res) => {
        let { page, size, sort } = req.query;
        let index = (page - 1) * size
            // mongodb查询数据库（1）
        let data = await mongodb.Find('beq-ym', {}, { skip: index, limit: size, sort });
        res.send(formatData({
            data
        }))
    })
    //首页轮播
Router.get('/find2', async(req, res) => {
        let { page, size, sort } = req.query;
        let index = (page - 1) * size
            // mongodb查询数据库（1）
        let data = await mongodb.Find('HomeLunbo', {}, { skip: index, limit: size, sort });
        res.send(formatData({
            data
        }))
    })
    //首页列表
Router.get('/find3', async(req, res) => {
        let { page, size, sort } = req.query;
        let index = (page - 1) * size
            // mongodb查询数据库（1）
        let data = await mongodb.Find('HomeList', {}, { skip: index, limit: size, sort });
        res.send(formatData({
            data
        }))
    })
    //首页nav
Router.get('/find4', async(req, res) => {
        let { page, size, sort } = req.query;
        let index = (page - 1) * size
            // mongodb查询数据库（1）
        let data = await mongodb.Find('HomeNav', {}, { skip: index, limit: size, sort });
        res.send(formatData({
            data
        }))
    })
    //分类
Router.get('/find5', async(req, res) => {
    let { page, size, sort } = req.query;
    let index = (page - 1) * size
        // mongodb查询数据库（1）
    let data = await mongodb.Find('Fenlei', {}, { skip: index, limit: size, sort });
    res.send(formatData({
        data
    }))
})






// 添加到商品收藏
Router.post('/adda', async (req, res) => {
    let { pic, title } = req.body;
    let result = await mongodb.Create('collection',{pic,title})
    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})

Router.post('/add', async (req, res) => {
    let { pic,title} = req.body;
    let result = await mongodb.Create('collection', {pic,title})
    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})
Router.post('/addb', async (req, res) => {
    let { pic, title } = req.body;
    let result = await mongodb.Create('collection', { pic, title })
    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status:0
        }))
    }
})
module.exports = Router