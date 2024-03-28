const  express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/server.config');
const apiRouter = require("./routes");
const errorHandler = require('./utils/errorhandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//from here it will go to routes/index.js
app.use('/api',apiRouter);
app.get('/ping', (req,res) =>  {
    return res.json({message: 'Problem Service is alive'});
})

//last middleware if any error is encountered 
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`server started at Port: ${PORT}`);
});
