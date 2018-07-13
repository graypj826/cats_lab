const express = require('express');
const router = express.Router();

const Cats = require("../models/cat");


router.get("/", (req, res) => {
  res.render("index.ejs", { catsList: Cats.all() })
});

router.get("/new", (req, res) => {
  res.render("new.ejs", {})
});

router.post("/", (req, res) => {
  Cats.create(req.body);
  res.redirect("/cats");
})

router.get("/:id", (req, res) => {
  res.render("show.ejs", { cat: Cats.findOne(req.params.id) })
});

router.get("/:id/edit", (req, res) => {
  res.render("edit.ejs", { cat: Cats.findOne(req.params.id) })
})
router.put("/:id", (req, res) => {
  Cats.update(req.params.id, req.body);
  res.redirect("/cats/" + req.params.id);
})
router.delete("/:id", (req, res) => {
  Cats.delete(req.params.id);
  res.redirect("/cats");
})


module.exports = router;