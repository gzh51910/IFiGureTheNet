const express = require('express');

const Router = express.Router();

const mongodb = require('../db/mongodb-me');
const { formatData } = require('../utils')

// 注册
const colName = 'user';
Router.post('/', async(req, res) => {
    let { phone, password } = req.body;
    let result = await mongodb.Create(colName, { phone, password });
    if (!result.ok) {
        res.send(formatData());
    } else {
        res.send(formatData({ status: 0 }));
    }
})

module.exports = Router