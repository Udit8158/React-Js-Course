// import express from "express";
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// create a new user with the post request on /api/auth
router.post("/", (req, res) => {
  const user1 = new User(req.body);
  user1.save();
  res.send(user1);
});

module.exports = router;
