const  express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {PORT} = require('./config/server.config');
const apiRouter = require("./routes");
const connectToDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//from here it will go to routes/index.js
app.use('/api',apiRouter)
app.get('/ping', (req,res) =>  {
    return res.json({message: 'Problem Service is alive'});
})

app.listen(PORT,async () => {
    console.log(`server started at Port: ${PORT}`);
    await connectToDB();
    console.log("Successfully Connected to DB");
});