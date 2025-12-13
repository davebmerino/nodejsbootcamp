const express = require('express');

const app = express();
const taskRouter = express.Router();


taskRouter.get("/task", (req,  res) => {console.log(req.info); res.send(req.info)});
taskRouter.post("/task", (req,  res) => res.send("Task Router"));

module.exports = taskRouter;