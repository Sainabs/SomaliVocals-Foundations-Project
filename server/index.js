require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const {PORT} = process.env
const {seed, getAlphabets, getWordListbyIDandLevel, login, register} = require('./controller.js')

app.use(express.json())
app.use(cors())


app.use(express.static(path.join(__dirname, "../Public")))

app.get("/home", (req, res) => res.sendFile(path.join(__dirname, "../Public/home.html")))
app.get("/learn", (req, res)=> res.sendFile(path.join(__dirname, "../Public/learn.html")))
app.get("/login", (req, res)=> res.sendFile(path.join(__dirname, "../Public/login.html")))

app.post('/seed', seed)


app.get('/alphabets', getAlphabets);
app.get('/wordslist', getWordListbyIDandLevel);



app.post('/api/login', login)
app.post('/api/register', register)

app.use ((req, res)=>{
res.redirect('/home')
});

app.listen(PORT, () => console.log(`up on ${PORT}`))


