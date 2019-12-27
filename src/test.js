import string from './css.js'
// 导入 string
// 导入导出  称为模块化


// 把这些函数整理成一个对象
const player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    n: 1,

    init: () => {
        //一般来说，一个对象是需要一个初始化方法
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key] // pause / play / slow
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            //clearInterval解除计时器
            return
        }
        // console.log(n + ':' + string.substr(0, n))
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        // console.log(n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
        //滚动条长度等于它的文本内容高度
    },

    play: () => {
        // return setInterval(player.run, time)
        player.id = setInterval(player.run, player.time)
        // 首先声明，return这个id
    },

    pause: () => {
        window.clearInterval(player.id)
    },

    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },

    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}
player.init()

