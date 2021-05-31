const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jwb4497:wkddnqls02@boilerplate.zow5r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

// jwb4497 wkddnqls02
// mongodb+srv://jwb4497:<password>@boilerplate.zow5r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get('/',(req,res) => res.send('HELLO NODE!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // `` 텍스트안에 변수 구분