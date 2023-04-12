// 引入模块
// 引入内置模块
const path = require("path")
// 引入第三方模块
const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")
// express-ejs-layouts：提供EJS的布局模块(是一个视图模板)
// 使用方法:1.必须在views下创建layout.ejs 2.在lauout.ejs下面必须引用<%- body %>
const expressLayouts = require("express-ejs-layouts")

// 创建express框架的app实例
const app = express()

// connect: 连接
// 连接数据库(非常简单: mongoose.connect('连接字符串'，{选项对象}))
const dbURI = `mongodb://127.0.0.1:27017/excDB`
mongoose.connect(dbURI)
    .then(() => {
        // 当数据库连接成功数据库也启动
        console.log('数据库连接成功')
        // 监听端口
        app.listen(3000, () => {
            console.log('服务器开始运行:http://127.0.0.1:3000');
        })
    })
    .catch(err => console.log(err))

// 配置app
// 把public静态资源暴露出去(访问权限:public)
// app.use(express.static(绝对路径))
// path.join：拼接路径
// 注册静态资源
app.use(express.static(path.join(__dirname, 'public')))
// 配置视图模板(注册expressLayouts模板)
app.use(expressLayouts)
// 注册视图模板(配置视图引擎)
app.set('view engine', 'ejs')
// 请求主体信息进行转码:express.urlencoded()
app.use(express.urlencoded())
// 配置5：对请求主体进行JSON处理：把JSON字符串转对象
app.use(express.json())


const router = express.Router()
// 配置路由(app.use('请求地址',路由表))
app.use("/", require("./routes/index"))
app.use("/todo", require("./routes/todo"))