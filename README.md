# web_lesson
前端学习

2020.7.21
1. 小程序鼠标点击事件：
     在需要获取的动结构加上： bindtap = "事件名称（自取）"
     在js页面添加一个事件函数
            事件名 (e) {
            console.log(e)                          // 打印获取的动结构的内容
            this.setData({                          // tihs.setData({})修改变量方法           
            getId: e.currentTarget.id               // 修改变量的值 e.currentTarget.id是获取id并将其赋给getID
            })                                      // 使它的值得到修改

2. 当一个容器固定了长宽，若设置padding，则会向外扩张，用box-sizing: border-box;可避免！

2020.7.22
1. 一个生命周期： 一个HTML页面从无到有的过程

2020.8.4
1. 预编译
2. 作用域

2020.8.21
# 编译
stylus -> css
WXML {{}} -> html
typescript -> js  小型项目 -> 大型项目  最值钱的前端

VUE  REACT  三者结合  + TS