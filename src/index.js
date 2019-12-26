import x from './x.js'
import png from './file.png'
console.log(png)
console.log(x)

const app = document.getElementById('app')
app.innerHTML = `
    <img src="${png}">
`

const btn = document.createElement('button')
btn.innerText = '懒加载'
btn.onclick = () => {
    const promise = import('./lazy.js')//懒加载就是异步加载import('路径')
    promise.then((module) => {
        module.default()
    }, () => {
        console.log('加载错误')
    })
}
app.appendChild(btn)

