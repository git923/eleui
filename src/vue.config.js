// 前端解决跨域问题
module.exports = {
    devServer:{
        // 服务器的访问地址
        proxy:'http://localhost:8081',
        // 前端的访问地址，替换端口访问
        port:'8080'
    }
}