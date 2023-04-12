const mongoose = require("mongoose")

// 如何定义数据模型结构：new mongoose.Schema({字段列表},{选项对象})
const taskSchema = new mongoose.Schema({
    // 定义的是字段的属性：用来描述title的属性
    title:{ //要传入更多的时候把值设为一个对象
        type: String,
        required:true
    }
},{timestamps:true})


// 如何创建一个数据模型：new mongoose.model('模型名称',模型结构)
const Task = new mongoose.model('Task',taskSchema) //Schema：视图的意思
// 数据模型：用来和数据库通信(用于增删改查)的构造函数
module.exports = Task
// Task模型定义了许多和数据库通信的方法：
// Task.find() 查询全部数据
// Task.findById() 查询指定ID的数据
// Task.save() 存储数据
// Task.findByIdAndDlete() 根据指定ID删除数据
// Task.findByIdAndUpdate() 根据指定ID修改数据



















// task数据模型的结构
// {
//     title:'出门右转',
//     _id: Object('gkjehrlkn,ge khwgfhoip'),
//     createdAt:kfajng
// }
