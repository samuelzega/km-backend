require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const router = require('./router')

app.use(bodyParser.json())
app.use('/',router)

// app.get('/', (req, res) => {
//   res.send('kampus merdeka backend ')
// })

// app.get('/test', (req, res,) => {
//     console.log(req.query);
//     res.send("my name is " + req.query.name)
// })

// app.post('/post', (req, res, next) => {
//     req.login = {
//         name: req.body.name,
//         jobdesc: 'mentoring'
//     }
//     next()
// })

// app.post('/post', (req, res) => {
//     console.log(req.login);
//     res.send("hihihihi " )
// })


console.log(process.env.password);
app.listen(3055, () => {
    console.log("server running on port " + 3055);
})