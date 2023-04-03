const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors()) //괄호안에 위치 넣어서 조건 설정가능

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if(name == "dog") {
        res.json({'sound':'멍멍'})
    } else if(name == "cat") {
        res.json({'sound':'야옹'})
    } else if(name == "pig") {
        res.json({'sound':'꿀꿀'})
    } else {
        res.json({'sound':'알수없음'})
    }

    res.json({'sound':'야옹'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})