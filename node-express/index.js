const express = require('express');
// Require what we need
const http = require('http');

const morgan = require('morgan');
const bodyParser = require('body-parser')

const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');
const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

// Build the server
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());



app.use('/leaders' , leaderRouter);
app.use('/leaders/:leaderId' , leaderRouter);

app.use('/promotions' , promoRouter);
app.use('/promotions/:promoId' , promoRouter);

app.use('/dishes' , dishRouter);
app.use('/dishes/:dishId' , dishRouter);
app.use(express.static(__dirname+'/public'));


 // Send answer
app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
})


const server = http.createServer(app);


// Start that server, baby!
server.listen(port,hostname, ()=>{
    console.log(`Server Running at  http://${hostname}:${port}`)
})
