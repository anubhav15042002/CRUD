const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes'); 

const app = express();

const port = process.env.PORT || 3000;
const databaseUrl =process.env.DATABASE_URL;


app.use(express.json());

mongoose.connect(databaseUrl);

app.use('/api/items' , itemRoutes);

app.listen(port,()=>{
    console.log('Server started on port 5000');
});
