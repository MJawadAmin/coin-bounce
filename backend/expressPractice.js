const express = require ('express')
const app = express()
const port = 3000;
app.get('/',(req, res)=>{
    res.send('Hello World!')
})
app.get('/about',(req, res)=>{
    res.send('This is about page')
})
app.get('/contact',(req, res)=>{
    res.send('<h1>Hello This is about page </h1>')
})
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:3000 ${port}`)
})