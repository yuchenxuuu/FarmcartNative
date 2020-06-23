const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// apply the middleware
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open',() => {
    console.log("Mongodb connection successed. ");
});

const farmproductRouter = require('./routes/farmproducts');
const userRouter = require('./routes/users');

// define and use routes

app.use('/users', userRouter);
app.use('/farmproducts', farmproductRouter);

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});