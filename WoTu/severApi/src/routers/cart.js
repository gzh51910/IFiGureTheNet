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

//列表页查询数据接口--左侧列表数据
Router.get('/find/:uid', async(req, res) => {
        let { uid } = req.params;
        // mongodb查询数据库（1）
        let data = await mongodb.Find('cart', { uid: uid });
        res.send(formatData({
            data
        }))
    })
    //列表页增加商品数据接口--内容直接在响应体中获取
Router.post('/add', async(req, res) => {
        let {
            uid,
            gid,
            qty,
            gname,
            img,
            price,
            check
        } = req.body;

        let result = await mongodb.Create('cart', {
            uid,
            gid,
            qty,
            gname,
            img,
            price,
            check
        })

        if (result.insertedCount > 0) {
            res.send(formatData());
        } else {
            res.send(formatData({
                status: 0
            }));
        }
    })
    //删除
Router.delete('/del/:_id', async(req, res) => {
        let {
            _id
        } = req.params;
        // 查询数据库
        let result = await mongodb.Remove('cart', {
            _id: _id
        });

        if (result.deletedCount > 0) {
            res.send(formatData())
        } else {
            res.send(formatData({
                status: 0
            }))
        }
    })
    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
    //列表页修改商品数据接口--
Router.patch('/update/:gid', async(req, res) => {
    let {
        gid
    } = req.params;
    let {
        qty
    } = req.body;
    let result = await mongodb.Update('cart', {
        gid: gid
    }, {
        qty
    });

    if (result.modifiedCount > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})

module.exports = Router