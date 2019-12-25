const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fetcher");

let repoSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: String,
  full_name: String,
  owner: {
    login: String,
    id: Number
  }
});

let Repo = mongoose.model("Repo", repoSchema);
// save on database
let save = repos => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //const newRepo = new Repo(repo);insertMany

  Repo.create(repos, function(err, r) {
    //console.log("------> ", r.length, " repos are saved");
  });
};
//  Repo.find({ full_name: /assessment/i }, function(err, docs) {
let findBy = (option, callback) => {
  console.log("option", option);
  if (option === "undefined") {
    Repo.find(function(err, docs) {
      callback(docs);
    });
  } else {
    Repo.find({ owner: { login: option } }, function(err, docs) {
      ///******************need to change this witgh promise  ********************************************************************/
      callback(docs);
    }); //.limit(20);
  }
};
module.exports.findBy = findBy;
module.exports.save = save;
