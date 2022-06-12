// import express from "express";
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = { name: "Udit" };
  res.json(obj);
});

module.exports = router;
