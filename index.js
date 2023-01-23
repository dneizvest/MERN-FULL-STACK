import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

//general setup so you can send requests
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencded({limit: "30mb", extended: true}))

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://dneizvest:jkiu88@sei.xkd1rlx.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000;


mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
   .then(() => app.list (PORT, ()=> console.log (`Server running on port: ${PORT}`) ))
   .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);

//mongoose.set('useFindAndModify', false);
mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})

import postRoutes from './routes/posts.js';

app.use('/posts', postRoutes)

