import indexCss from './public/css/index.css'
import imgSrc from './public/imags/1.jpg'
let pp = document.createElement('p')
pp.innerHTML = '我不喜欢你'
document.getElementById('root').appendChild(pp)

let myFun = () =>{
    console.log('heihei')
}

myFun()

let imgNode = new Image()
imgNode.src=imgSrc
document.getElementById('root').appendChild(imgNode)


