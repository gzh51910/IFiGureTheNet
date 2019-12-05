//引入第三方模块
const express = require('express');
//引入Router模块
const Router = express.Router();
//引入mongodb数据库
const mongodb = require('../db/mongodb-me')
    //引入工具文件
const { formatData } = require('../utils')

//列表页查询数据接口--左侧列表数据
Router.get('/L', async(req, res) => {
        // mongodb查询数据库（1）
        let data = await mongodb.Find('列表左侧', {});
        res.send(formatData({ data }))
    })
    //列表页查询数据接口--右侧列表数据
Router.get('/R', async(req, res) => {
        // mongodb查询数据库（1）
        let data = await mongodb.Find('列表右侧', {});
        res.send(formatData({ data }))
    })
    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
    //列表页查询数据接口--右侧列表中茶内部数据
Router.get('/R1', async(req, res) => {
        let { size = 10 } = req.query;
        // mongodb查询数据库（1）
        let data = await mongodb.Find('列表右侧（中茶）', {}, { limit: size });
        res.send(formatData({ data }))
    })
    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
    //列表页查询数据接口--右侧列表大益内部数据
Router.get('/R2', async(req, res) => {
        let { size = 10 } = req.query;
        // mongodb查询数据库（1）
        let data = await mongodb.Find('列表右侧（大益）', {}, { limit: size });
        res.send(formatData({ data }))
    })
    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
    //列表页增加商品数据接口--内容直接在响应体中获取
Router.post('/', async(req, res) => {
        let { ImgMin, ImgMax, Title, price, Juan, Xl } = req.body;

        let result = await mongodb.Create('列表右侧（中茶）', { ImgMin, ImgMax, Title, price, Juan, Xl })

        if (result.insertedCount > 0) {
            res.send(formatData());
        } else {
            res.send(formatData({ status: 0 }));
        }
    })
    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
    //列表页删除商品数据接口--
Router.delete('/:id', async(req, res) => {
        let { id } = req.params;
        // 查询数据库
        let result = await mongodb.Remove('列表右侧（中茶）', { _id: id });

        if (result.deletedCount > 0) {
            res.send(formatData())
        } else {
            res.send(formatData({ status: 0 }))
        }
    })
    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
    //列表页修改商品数据接口--
Router.patch('/:id', async(req, res) => {
        let { id } = req.params;
        let { ImgMin, ImgMax, Title, price, Juan, Xl } = req.body;
        // 查询数据库
        let result = await mongodb.Update('列表右侧（中茶）', { _id: id }, { ImgMin, ImgMax, Title, price, Juan, Xl });

        if (result.modifiedCount > 0) {
            res.send(formatData())
        } else {
            res.send(formatData({ status: 0 }))
        }
    })
    //导出Router
module.exports = Router