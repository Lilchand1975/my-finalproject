const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "Mr.",
    firstName: "Chandra",
    lastName:"Chhetri"
    synopsis:
      "community leader. Currently working as a School Liaison in Commonwealth Catholic Charities.",
    date: new Date(Date.now())
  },
  {
    title: "Mr.",
    firstName: "Laxman",
    lastName: "Chamlagai",
    synopsis:
      "Bhutanese community leader. Currently serving as Medical Liaison in International Resque Community",
    date: new Date(Date.now())
  }
];


db.Member
  .remove({})
  .then(() => db.Member.collection.insertMany(memberSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  