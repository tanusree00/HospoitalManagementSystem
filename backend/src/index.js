require('dotenv').config()
var cors = require('cors')
const mongoose = require('mongoose');
const express = require('express')
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.get('/',(req,res)=>{
res.status(200).send(`Hello from node server`)
});

app.post('api/login',(req,res)=>{
res.status(200).json({
    "user_name":"Rohit",
    "user_type":"ADMIN",
    "profile:pic":"",
    "first_name":"Rohit",
    "middle_name":"",
    "last_name":"Sharma",
    "email":"rohitsharma@gmail.com",
    "mob":"9876543210"
})
})

mongoose.connect('mongodb+srv://tanu:TANUkaran@tanudb.vevem7h.mongodb.net/').then(() => {
    app.listen(3000, () => {
        console.log('Server started');

    })
})

    .catch(() => {

    });