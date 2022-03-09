const express = require("express");
const promoRouter = express.Router();



promoRouter.get("/", (req, res) => {
  res.send(`Will send all the promotions to You...`);
});

promoRouter.get("/:promoId", (req, res) => {
  res.send(`Will send the promotion of id : ${req.params.promoId}`);
});

promoRouter.post("/", (req, res) => {
  res.send(`Will add the promotion: ${req.body.name} with details : ${req.body.description}`);
});

promoRouter.post("/:promoId", (req, res) => {
  res.status(403).send(`Post operation is not supported on /promotions/${req.params.promoId}`);
});

promoRouter.put("/:promoId", (req, res) => {
  res.write(`Updating the promotion: ${req.params.promoId} \n`);
  res.end(`Will update the promotion: ${req.body.name} with details: ${req.body.description}`);
});

promoRouter.put("/", (req, res) => {
  res.status(403).send(`Put operation is not supported on /promotions`);
});

promoRouter.delete("/", (req, res) => {
  res.send(`Will delete all the promotions!!!!`);
});

promoRouter.delete("/:promoId", (req, res) => {
  res.send(`Will delete the promotion of Id: ${req.params.promoId}`);
});


module.exports = promoRouter;