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
//if we put it before the api routes called, then it is of no use. because it is a error middleware.
//which takes four parameters. so it will be act as a error middleware. which supposed to be called at last
// because we are calling in the middle it is of no use and the default error handler kicks in
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`server started at Port: ${PORT}`);
});
