const express = require('express');
const router = express.Router();

const Cats = require("../models/cat");


router.get("/", (req, res) => {
  Cats.find({}, (err, foundCats) => {
    if(err) {
      res.send(err);
    } else {
      res.render("index.ejs", {catsList: foundCats});
    }

  })
});

router.get("/new", (req, res) => {
  res.render("new.ejs", {})
});

router.post("/", (req, res) => {
  Cats.create(req.body, (err, createdCat) => {
    if (err) {
      res.send(err);
    } else {
       res.redirect(`/cats/${createdCat.id}`);
    }
  });
 
})

router.get("/:id", (req, res) => {
 Cats.findById(req.params.id, (err, cat) => {
    if(err) {
      res.send(err);
    } else {
      res.render("show.ejs", {cat: cat});
    }

  })
});

router.get("/:id/edit", (req, res) => {
  Cats.findById(req.params.id, (err, cat) => {
    if(err) {
      res.send(err);
    } else {
      res.render("edit.ejs", {cat: cat});
    }

  })
})
router.put("/:id", (req, res) => {
  Cats.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, cat) => {
    if(err) {
      res.send(err);
    } else {
      res.redirect("/cats")
    }

  })
  
})
router.delete("/:id", (req, res) => {
  Cats.findByIdAndRemove(req.params.id, (err, cat) => {
    if(err) {
      res.send(err);
    } else {
      res.redirect("/cats");
    }

  })
})


module.exports = router;