
// src/app.js (ฉบับปรับปรุง MVC)
const express = require('express')
const cors = require('cors')
// const config = require('./config/config') // (ถ้ามีไฟล์ config)

const app = express()

// --- Middleware Zone ---
// ใช้ express.json() แทน body-parser.json() 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// --- Routes Zone ---
// เรียกใช้งานไฟล์ routes.js ที่เราเพิ่งสร้าง
require('./routes')(app)

// --- Server Start ---
const port = process.env.PORT || 8081
app.listen(port, function () {
  console.log('Server running on port ' + port)
})

