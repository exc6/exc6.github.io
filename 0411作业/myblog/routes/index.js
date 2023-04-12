const express = require("express")
const mongoose = require("mongoose")
// 创建路由器对象：直接调用express.Router()
const router = express.Router()
// 引入与数据库通信的task数据
const Task = require('../models/task')
/****************************
              路由表的用途 
                   |
       左手 ----------------- 右手
        |                      |
       视图                  数据库

****************************/
// 请求1:'/'根目录 请求的方式是'GET'    
router.get('/', (req, res) => {
    // 喧染index文件
    // 1.先处理数据：怎么处理 => 使用Task模型 => 引入Task模块
    Task.find() //异步操作，返回Promise
        .then(data => {
            // console.log(data);
            // 2.再喧染视图：3.把数据注入到视图里面
            res.render('index', {data})
        })
        // catch用于捕获错误
        .catch(err => console.log(err))
})

module.exports = router