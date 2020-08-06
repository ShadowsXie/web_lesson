let data = [
    {value: '周杰伦的听妈妈的话，我听了10年', time: 5, color: 'red', speed: '1', fontSize: 22},
    {value: '快快长大，才能保护她', time: 10, color: '#00a1f5', speed: '1', fontSize: 30},
    {value: '听妈妈的话吧，晚点再恋爱吧', time: 6},
    {value: '周杰伦的听妈妈的话，我听了10年', time: 5, color: '#12dsdd', speed: '3', fontSize: 15},
    {value: '听妈妈的话吧，晚点再恋爱吧', time: 15},
    {value: '周杰伦的听妈妈的话，我听了10年', time: 20, color: '#fff', speed: '2', fontSize: 28},
]

function foo(opts) {
    let defOpts = {
        color: '#e91e63',
        speed: 1.5,
        opacity: 0.5,
        fontSize: 20,
        data: []
    }
    console.log(opts)
    Object.assign(this, defOpts, opts)
    console.log(this)
    this.barrages = this.data.map(item => {
        // console.log(item)
    })
}

foo({data})