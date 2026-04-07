require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/person');

// 1. Connect to Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected!"))
  .catch(err => console.error("Connection error", err));

// 2. Create and Save a Record
const createAndSavePerson = (done) => {
  const person = new Person({ name: "John Doe", age: 30, favoriteFoods: ["Pizza", "Pasta"] });
  person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// 3. Create Many Records
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};

// 4. Use model.find()
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, personFound) => {
    if (err) return console.error(err);
    done(null, personFound);
  });
};

// 5. Use model.findOne()
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// 6. Use model.findById()
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// 7. Perform Classic Updates (Find, Edit, Save)
const findEditThenSave = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    person.favoriteFoods.push("hamburger");
    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      done(null, updatedPerson);
    });
  });
};

// 8. New Updates with findOneAndUpdate()
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({ name: personName }, { age: ageToSet }, { new: true }, (err, updatedDoc) => {
    if (err) return console.error(err);
    done(null, updatedDoc);
  });
};

// 9. Delete One Document
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedDoc) => {
    if (err) return console.error(err);
    done(null, removedDoc);
  });
};

// 10. Delete Many Documents
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, (err, response) => {
    if (err) return console.error(err);
    done(null, response);
  });
};

// 11. Chain Search Query Helpers
const queryChain = (done) => {
  const foodToSearch = "burritos";
  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 }) // Hide age
    .exec((err, data) => {
      if (err) return console.error(err);
      done(null, data);
    });
};