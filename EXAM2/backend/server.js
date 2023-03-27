const express=require('express');
const bodyparser=require('body-parser');
const handler=require('./controller/handler')
const mongoose=require('mongoose')
const cors = require('cors');

const server = express();

server.use(cors());
server.use(bodyparser());

server.get('/',(req,res,next)=>{
    res.send("hello");
})

server.get('/book/:isbn',handler.getBook);
server.get('/book',handler.getBooks);
server.post('/book',handler.createBooks);
server.put('/book/:isbn',handler.updateBook);
server.delete('/book/:isbn',handler.deleteBook);

mongoose.connect("mongodb://127.0.0.1:27017/bookdb")
.then((d)=>{
    server.listen(4000,()=>{
        console.log("connected");
    })
})
.catch((err)=>{console.log(err)});