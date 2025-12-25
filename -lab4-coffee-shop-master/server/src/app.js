let express = require('express')
let bodyParser = require('body-parser')
 
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
 
// เรียกใช้ routes.js โดยส่ง app เข้าไป
require('./routes')(app)
 
// ไม่ต้องมี route อื่นแล้วตาม Lab5
 
let port = 8081
 
app.listen(port, function () {
    console.log('server running on ' + port)
})