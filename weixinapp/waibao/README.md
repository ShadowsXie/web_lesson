# IT外包

 1. 解决什么问题
   疫情下  线下成本太高，-> 线上
   省成本，把大学生召集起来
   学生  技术检测  项目配对  质量代码提交  绩效考核
 2. 服务哪些人群
 3. 技术方案
  把大学生的研发价值发掘出来  
  加入平台
  学生表： student
    _id
    skill
    resume
    salary
    rate     0-5 
    title  高手 高高手
  poject
    _id
    title
    desc
    photos
    start_ts
    end_ts
    price
    type
  Owner
    _id
    type  个人|企业
    indicate  执照
    rate  评分

可以评价  comments 可以升级(社区)  可以

成长机制  
  时间 计时  github
  timeline  每天提交timeline
  列表
  7:00-10:00
  - list
  拍照加计时    程序员

  5w  
  

  核心表
    Student
      title  salary  total_salary start_ts rate school (薪人薪事)
    Owner
    project
      图片 + 描述
    Comment
    Record
    Order

