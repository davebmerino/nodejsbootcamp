const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const taskRouter = require('./tasks/task-router.js');
const cors = require('cors');

const app = express();
const PORT = 3001;

const middleWare = function (req, res, next) {
  req.info = { name: "Middleware info", author: "Dave" };
  next();
}

app.use(express.json());

app.use(middleWare);

const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

let accessLogStream = fs.createWriteStream(path.join(__dirname,".." , 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }));

app.use('/', taskRouter );

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 

