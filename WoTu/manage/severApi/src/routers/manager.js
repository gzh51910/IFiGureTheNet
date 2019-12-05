const express = require('express');

const Router = express.Router();

const { Find, Remove, Update, Create } = require('../db/mongodb-me');

const { formatData } = require('../utils')

const colName = 'manager'
    // get '/user' 返回所有管理员
Router.get('/', async(req, res) => {
    // 查询数据库
    let result = await Find(colName); //得到一个posmise
    res.send(formatData({ data: result }))
})

// 查询单个管理员信息
Router.get('/:id', async(req, res) => {
    let { id } = req.params;
    // 查询数据库
    let result = await Find(colName, { _id: id }, { fields: { password: false } }); //得到一个posmise
    res.send(formatData({ data: result }))
})

// 删除管理员
Router.delete('/:id', async(req, res) => {
    let { id } = req.params;
    // 查询数据库
    let result = await Remove(colName, { _id: id });

    if (result.deletedCount > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({ status: 0 }))
    }
})



// 修改管理员信息
Router.patch('/:id', async(req, res) => {
        let { id } = req.params;
        let { password, age, gender } = req.body;
        // 查询数据库
        let result = await Update(colName, { _id: id }, { password, age, gender });

        if (result.modifiedCount > 0) {
            res.send(formatData())
        } else {
            res.send(formatData({ status: 0 }))
        }
    })
    // 增加管理员
Router.post('/', async(req, res) => {
    let { ImgMin, ImgMax, Title, price, Juan, Xl } = req.body;

    let result = await mongodb.Create(colName, { ImgMin, ImgMax, Title, price, Juan, Xl })

    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({ status: 0 }));
    }
})

module.exports = Router