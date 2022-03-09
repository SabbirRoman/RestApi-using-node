const express = require("express");
const dishRouter = express.Router();


dishRouter.get("/", (req, res) => {
  res.send(`Will send all the dishes to you...`);
});

dishRouter.get("/:dishId", (req, res) => {
  res.send(`Will send the dish of Id : ${req.params.dishId}`);
});

dishRouter.post("/", (req, res) => {
  res.send(`Will add the dish: ${req.body.name} with details: ${req.body.description}`);
});

dishRouter.post("/:dishId", (req, res) => {
  res.status(403).send(`Post operation is not supported on /dishes/${req.params.dishId}`);
});


dishRouter.put("/:dishId", (req, res) => {
  res.write(`Updating the dish: ${req.params.dishId} \n`);
  res.end(`Will update the dish: ${req.body.name} with details: ${req.body.description}`);
});

dishRouter.put("/", (req, res) => {
  res.status(403).send(`Put operation is not supported on /dishes`);
});


dishRouter.delete("/", (req, res) => {
  res.send(`Will delete all the dishes!!!!`);
});

dishRouter.delete("/:dishId", (req, res) => {
  res.send(`Will delete the dish of Id : ${req.params.dishId}`);
});


module.exports = dishRouter;