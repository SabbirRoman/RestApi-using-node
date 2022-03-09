const express = require("express");
const leaderRouter = express.Router();



leaderRouter.get("/", (req, res) => {
  res.send(`Will send all the leaders to You...`);
});

leaderRouter.get("/:leaderId", (req, res) => {
  res.send(`Will send leader of id: ${req.params.leaderId}`);
});

leaderRouter.post("/", (req, res) => {
  res.send(`Will add the leader: ${req.body.name} with details: ${req.body.description}`);
});

leaderRouter.post("/:leaderId", (req, res) => {
  res.status(403).send(`Post operation is not supported on /leaders/${req.params.leaderId}`);
});

leaderRouter.put("/:leaderId", (req, res) => {
  res.write(`Updating the leader: ${req.params.leaderId}`);
  res.end(`Will update the leader: ${req.body.name} with details: ${req.body.description}`);
});

leaderRouter.put("/", (req, res) => {
  res.status(403).send(`Put operation is not supported on /leaders`);
});

leaderRouter.delete("/", (req, res) => {
  res.send(`Will delete all the leaders!!!!`);
});

leaderRouter.delete("/:leaderId", (req, res) => {
  res.send(`Will delete the leader of id: ${req.params.leaderId}`);
});


module.exports = leaderRouter;