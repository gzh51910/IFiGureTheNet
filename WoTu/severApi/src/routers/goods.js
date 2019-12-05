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
Router.post('/add11', async(req, res) => {
    let { pic, title } = req.body;
    let result = await mongodb.Create('collection', { pic, title })
    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})
Router.get('/', async(req, res) => {
    let { name, sort } = req.query;
    // let name = "大益";
    // mongodb查询数据库（1）
    let data = await mongodb.Find('GoodsAll', { brad_name: name }, { limit: 50 });
    res.send(formatData({
        data
    }))
})

//查询单个商品
Router.get('/findsingle/:id', async(req, res) => {
        let {
            id
        } = req.params;
        // mongodb查询数据库（1）
        let data = await mongodb.Find('GoodsAll', { _id: id });
        res.send(formatData({
            data
        }))
    })
    //列表页增加商品数据接口--内容直接在响应体中获取
Router.post('/add', async(req, res) => {
    let {
        dwd,
        gc_name,
        brad_name,
        ImgMin,
        Title,
        Price,
        Juan,
        Xl,
        brand_id,
    } = req.body;

    let result = await mongodb.Create('GoodsAll', {
        dwd,
        gc_name,
        brad_name,
        ImgMin,
        Title,
        Price,
        Juan,
        Xl,
        brand_id,
    })

    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }));
    }
})

// 分类添加数据接口
Router.post('/addclassify', async(req, res) => {
    let { gc_name, type_name } = req.body;
    console.log(req.body);

    let result = await mongodb.Create('列表左侧', { gc_name, type_name })

    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }));
    }
})

// 分类删除
Router.delete('/removeClassify/:id', async(req, res) => {
    let { id } = req.params;
    let result = await mongodb.Remove('列表左侧', { _id: id })
    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }));
    }
})



//列表页数据删除
Router.delete('/del/:id', async(req, res) => {
    let { id } = req.params;
    // 查询数据库
    let result = await mongodb.Remove('GoodsAll', {
        _id: id
    });

    if (result.deletedCount > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})


// 查询所有管理员接口
Router.get('/manager', async(req, res) => {
    // mongodb查询数据库（1）
    let data = await mongodb.Find('manager', {});
    res.send(formatData({
        data
    }))
})

// 查询单个管理员

Router.get('/managerone/:id', async(req, res) => {
    let { id } = req.params;
    // mongodb查询数据库（1）
    let data = await mongodb.Find('manager', { _id: id })
    res.send(formatData({ data }))
})

// 添加管理员
Router.post('/adduser', async(req, res) => {
        let {
            name,
            password,
            sex,
            position
        } = req.body;

        let result = await mongodb.Create('manager', {
            name,
            password,
            sex,
            position
        })
        if (result.insertedCount > 0) {
            res.send(formatData());
        } else {
            res.send(formatData({
                status: 0
            }));
        }
    })
    // 删除管理员
Router.delete('/removeadmin/:id', async(req, res) => {
    let { id } = req.params;
    // 查询数据库
    let result = await mongodb.Remove('manager', { _id: id });
    if (result.deletedCount > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})

// 修改管理员信息
Router.patch('/updateuser/:id', async(req, res) => {
    let { id } = req.params;
    let { name, password, sex, position } = req.body;
    let result = await mongodb.Update('manager', {
        _id: id
    }, { name, password, sex, position });

    if (result.modifiedCount > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})

// 查询所有用户
Router.get('/userall', async(req, res) => {
    // mongodb查询数据库（1）
    let data = await mongodb.Find('user', {});
    res.send(formatData({
        data
    }))
})

// 删除用户
Router.delete('/removeuser/:id', async(req, res) => {
    let {
        id
    } = req.params;
    // 查询数据库
    let result = await mongodb.Remove('user', {
        _id: id
    });
    if (result.deletedCount > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})




/* --------------------------------------------------------------------------------------------- */
//列表页查询数据接口--左侧列表数据
Router.get('/classify', async(req, res) => {
    // mongodb查询数据库（1）
    let data = await mongodb.Find('列表左侧', {});
    res.send(formatData({
        data
    }))
})



/* --------------------------------------------------------------------------------------------- */

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
//列表页修改商品数据接口--
Router.patch('/update/:id', async(req, res) => {
    let {
        id
    } = req.params;
    let {
        dwd,
        gc_name,
        brad_name,
        ImgMin,
        Title,
        Price,
        Juan,
        Xl,
        brand_id,
        nb
    } = req.body;
    let result = await mongodb.Update('GoodsAll', {
        _id: id
    }, {
        dwd,
        gc_name,
        brad_name,
        ImgMin,
        Title,
        Price,
        Juan,
        Xl,
        brand_id,
        nb
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