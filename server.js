import express from "express"
import mongoose from "mongoose"
import Cors from 'cors'
import Cards from './dbCards.js'
//app config
const app=express();
const port =process.env.PORT||8001
const connection_url="mongodb+srv://admin:admin@cluster0.tgtgb.mongodb.net/tinderdb?retryWrites=true&w=majority"
//middlewares
app.use(express.json())
app.use(Cors())
//db config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//api endpoint

app.get('/',(req,res) => res.status(200).send("hello world"));
app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;

    Cards.create(dbCard,(err,data)=>{
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards',(req,res)=>{
    const dbCard=req.body;

    Cards.find((err,data)=>{
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})


//listener
app.listen(port,()=>console.log(`listening on localhost: ${port}`));