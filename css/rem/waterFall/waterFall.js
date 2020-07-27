window.onload = function() {
    imgLocation("container", "box")
}

//获取当前有多少张图片要摆放
function imgLocation(parent, content) {
    // 将parent下的所有内容全部取出
    let cparent = document.getElementById(parent)
    // console.log(cparent)
    let ccontent = getChildElement(cparent,content)
    //console.log(ccontent)
    let imgWidth = ccontent[0].offsetWidth
    let num = Math.floor(document.documentElement.clientWidth/imgWidth)
    cparent.style.cssText = "width:" + imgWidth * num + "px"

    let BoxHeightArr = []
    for (let i = 0; i < ccontent.length; i++) {
        if(i<num){
            BoxHeightArr[i] = ccontent[i].offsetHeight
            // console.log(BoxHeightArr[i])
        } else {
            // 将Math.min方法借给数组用
            let minHeight = Math.min.apply(null,  BoxHeightArr)
            let minIndex = getminHeightLocation(BoxHeightArr,minHeight)
            // console.log(minHeight)
            ccontent[i].style.position = 'absolute'
            ccontent[i].style.top = minHeight + 'px'
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight
        }
    }
}


function getChildElement(parent, content) {
    let contentArr = []
    let allCount = parent.getElementsByTagName('*')
    // console.log(allCount)
    for (let i = 0; i <allCount.length; i++) {
        if(allCount[i].className === content){
            contentArr.push(allCount[i])
        }
    } 
    return contentArr
}

function getminHeightLocation(BoxHeightArr,minHeight){
    for(let i in BoxHeightArr) {
        if(BoxHeightArr[i] === minHeight) {
            return i
        }
    }
}