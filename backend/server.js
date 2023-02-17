const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users');
const cors = require('cors');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://schoolapp:Themba12345678@cluster0.3rt5wsz.mongodb.net/schoolregistration?retryWrites=true&w=majority', { useNewUrlParser: true });
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use('/api/users', usersRoutes);


app.listen(8000, () => {
  console.log('\x1b[36m%s\x1b[0m', 'Connected to MongoDB Database');
  console.log('Server listening on port 8000');
});