const express = require("express")
// 创建路由器对象：直接调用express.Router()
const router = express.Router()
const Task = require('../models/task')
// 请求2:请求添加任务'todo/add' => 'POST' 
// app.use("/todo", require("./routes/todo"))在app.js里面有了todo，所以可以不用写，直接写后面的就行 /add
router.post('/add', (req, res) => {
    // 表单数据被绑定在请求头的主体(body)里面
    // 注意：网络间只能传输ASCII码
    // console.log(req.body);
    // 1.处理数据：Task表示数据库中的现存的表。所有document的集合。
    // 创建一条数据
    const newTask = new Task(req.body)
    newTask.save()
        .then(data => {
            // 处理成功,返回成功的结果 => document
            console.log(data);
            // res.render('index',{data:data})
            res.redirect('/') //重定向
        })
    //    .catch(err => console.log(err))

    // 2.设置喧染
    // 3.把数据注入到视图里

})

// 请求3:请求删除任务'todo/delete/:id' => 'GET' 

router.get('/delete/:_id', (req, res) => {
    // 喧染index文件
    // console.log(req.params);
    // 1.处理数据
    Task.findByIdAndDelete(req.params)
        .then(() => {
            console.log('删除成功');
            res.redirect('/')
        })
        .catch(err => console.log(err))
    // res.render('index')

})
// 请求4:请求编辑任务'todo/update' => 'GET' 
router.put('/update/:_id', (req, res) => {
    //1.处理数据：修改Task数据表里的id为: _id的那条数据
    const { _id } = req.params
    //console.log(_id);
    // console.log('正文:' + req.body);
    // console.log(req.body);
    // const {title} = req.body
    // console.log(title)
    Task.findByIdAndUpdate(_id, req.body)
        .then(data => {
            console.log(data);
            return res.json({ redirect: '/' })
        })
        .catch(err => { console.log(err)})

    // 2.处理响应
})

module.exports = router