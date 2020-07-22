module.exports = {
    'GET /articles'(req, res){
        return res.json({
            code: 0,
            articles: [{
                date:'7-22',
                items: [{
                    title: 'aaaa',
                    pic: 'https://www.baidu.com/img/dong_66cae51456b9983a890610875e89183c.gif',
                    id: 1
                },
                {
                    title: 'bbbb',
                    pic: 'https://www.baidu.com/img/dong_66cae51456b9983a890610875e89183c.gif',
                    id: 2
                },
                {
                    title: 'cccc',
                    pic: 'https://www.baidu.com/img/dong_66cae51456b9983a890610875e89183c.gif',
                    id: 3
                }]

            },
            {
                date:'7-21',
                items: [{
                    title: 'dddd',
                    pic: 'https://www.baidu.com/img/dong_66cae51456b9983a890610875e89183c.gif',
                    id: 4
                },
                {
                    title: 'eeee',
                    pic: 'https://www.baidu.com/img/dong_66cae51456b9983a890610875e89183c.gif',
                    id: 5
                },
                {
                    title: 'ffff',
                    pic: 'https://www.baidu.com/img/dong_66cae51456b9983a890610875e89183c.gif',
                    id: 6
                }]
                
            }]
        })
    }
}