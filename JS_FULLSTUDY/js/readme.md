1. js检测类型
    typeof null === 'object' (历史原因)
    typeof 返回类型名
    适合基本类型及function检测,遇到null失效

    判断对象类型
    instanceof
    [1,2]instanceof Array   // 返回true
    适合自定义对象,也可以用来检测原生对象,在不同iframe和window间检测失效

    Object.prototype.toString.apply()