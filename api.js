const http = require('http');
var express = require('express');
const router = express.Router();
var cors = require('cors');
var app = express();

app.use('/', express.static(__dirname));
// application URL from where you are calling these APIs
app.use(cors({origin: 'http://localhost:80'}));

// import `items` from `routes` folder
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);


const server = http.createServer(app);
const port = 3001;
server.listen(port);
console.debug('Server listening on port ' + port);


