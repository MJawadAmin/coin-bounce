import express from 'express'
const app = express()

const PORT = 8080;

app.get('/', (req , res )=> res.json({msg : "Hello "}))

app.listen(PORT , ()=>(console.log(`Sever are connected at ${PORT}`)))