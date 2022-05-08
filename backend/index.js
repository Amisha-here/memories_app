import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv' ;

import postRoutes from './routes/posts.js';

const app=express();
dotenv.config();

app.use(express.json({limit:"30mb",extended: true}));
app.use(express.urlencoded({limit:"30mb",extended: true}));

app.use(cors());

app.use('/posts',postRoutes);

app.get('/',(req,res)=> {
    res.send('Hello to Memories API');
})

const CONNECTION_URL='mongodb+srv://amisha:amisha123@cluster0.vmsir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)) )
    .catch((error)=>console.log(error.message));

mongoose.set(`useFindAndModify`, false);

