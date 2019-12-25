const express = require("express");
const getReposByUsername = require("../helpers/github");
const db = require("../database/index");
let app = express();
var cors = require("cors");

app.use(cors());

app.use(express.static(__dirname + "/../client/dist"));

app.post("/repos", function(req, res) {
  db.findBy(req.query.user, doc => {
    console.log();
    // res.send(JSON.stringify(doc));
    return doc;
  }).then(jsonDoc => {
    if ((jsonDoc = {})) {
      getReposByUsername.getReposByUsername(req.query.user, result => {
        db.save(result);
        res.send(result);
      });
    } else {
      res.send(JSON.stringify(doc));
    }
  });
});

app.get("/repos", function(req, res) {
  console.log(req.query.option);
  db.findBy(req.query.option, doc => {
    console.log();
    res.send(JSON.stringify(doc));
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
