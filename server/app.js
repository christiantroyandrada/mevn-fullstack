require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/routes');

//middleware middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("uploads"));

//connect to db
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to db successfully')).catch(err => console.error(err));

//route prefix
require('./routes/routes') (app);

//start server
app.listen(port, () => console.log('server running at port ' + port));