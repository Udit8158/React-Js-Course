// import express from "express";
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// create a new user with the post request on /api/auth with a basic validaton.
router.post(
  "/",
  [
    body("name", "Enter a valid name minimum of 3 character.").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email.").isEmail(),
    body("password", "Enter a password with minimum 5 character.").isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    // const user1 = new User(req.body);
    // user1.save();

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({
          error: "Please enter a unique value for email",
          message: err.message,
        });
      });
    // res.send(user1);
  }
);

module.exports = router;
