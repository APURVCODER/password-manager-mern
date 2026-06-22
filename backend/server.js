
const express = require('express');
const app = express()
const port = 3000
const cors= require ('cors')
app.use(cors())

const dotenv=require('dotenv') 
dotenv.config()
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect();

// Database Name
const dbName = 'PassOp';
app.get('/', async(req, res) => {
  
    const db= client.db(dbName);
    const collection =db.collection('documents');
    const findresult= await collection.find({}).toArray();
    res.json(findresult);
})

app.post('/', async(req, res) => {
    const Password=req.body
    const db= client.db(dbName);
    const collection =db.collection('documents');
    const findresult= await collection.insertOne(Password);
    res.send({success:true,result:findresult});
})

app.delete('/', async(req, res) => {
    const Password=req.body
    const db= client.db(dbName);
    const collection =db.collection('documents');
    const findresult= await collection.deleteOne(Password);
    res.send({success:true,result:findresult});
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
}) 
