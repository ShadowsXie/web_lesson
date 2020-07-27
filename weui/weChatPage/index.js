let send = document.getElementById('send')
let parent = document.getElementById('content-items')

send.addEventListener('click',function(){
    // console.log(1111)
    let li = document.createElement('li')
    li.setAttribute('class','content-item')

    let divpic = document.createElement('div')
    divpic.setAttribute('class','pic')
    li.appendChild(divpic)

    let img = document.createElement('img')
    img.setAttribute('src','./images/user.jpg')
    divpic.appendChild(img)

    let divmessage = document.createElement('div')
    divmessage.setAttribute('class','message')
    li.appendChild(divmessage)

    let p1 = document.createElement('p')
    p1.setAttribute('class','name')
    let p1Txt = document.createTextNode('蜗牛')
    p1.appendChild(p1Txt)
    divmessage.appendChild(p1)

    let p2 = document.createElement('p')
    p2.setAttribute('class','detail')
    let p2Txt = document.createTextNode('明天一起去爬山')
    p2.appendChild(p2Txt)
    divmessage.appendChild(p2)
    
    parent.appendChild(li)
    
    console.log(li)
})