const express = require('express');

const {handle} = require('./controllers');

const app = express();

app.use(express.json());

app.post('/',async (req,res)=>{
    res.send(await handle(req,"post"))
})

app.listen(3000,()=>console.log("listening on 3000"));