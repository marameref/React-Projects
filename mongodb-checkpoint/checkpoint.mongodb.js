// --- PREPARATION ---
// 1. Create and use the "contact" database
use('contact');

// --- CREATE (Insert) ---
// 2. Insert the 5 documents into "contactlist"
db.contactlist.insertMany([
  { last_name: "Ben", first_name: "Moris", email: "ben@gmail.com", age: 26 },
  { last_name: "Kefi", first_name: "Seif", email: "kefi@gmail.com", age: 15 },
  { last_name: "Emilie", first_name: "brouge", email: "emilie.b@gmail.com", age: 40 },
  { last_name: "Alex", first_name: "brown", age: 4 },
  { last_name: "Denzel", first_name: "Washington", age: 3 }
]);

// --- READ (Display) ---
// 3. Display all contacts
db.contactlist.find().pretty();

// 4. Find one person by age (since IDs are generated automatically)
db.contactlist.findOne({ last_name: "Ben" });

// 5. Display contacts with age > 18
db.contactlist.find({ age: { $gt: 18 } });

// 6. Display contacts with age > 18 and name containing "ah"
// ($regex: "ah" searches for the letters, $options: "i" ignores uppercase/lowercase)
db.contactlist.find({ 
  age: { $gt: 18 }, 
  $or: [
    { first_name: { $regex: "ah", $options: "i" } },
    { last_name: { $regex: "ah", $options: "i" } }
  ]
});

// --- UPDATE ---
// 7. Change "Seif" to "Anis"
db.contactlist.updateOne(
  { first_name: "Seif" }, 
  { $set: { first_name: "Anis" } }
);

// --- DELETE ---
// 8. Delete contacts aged under 5
db.contactlist.deleteMany({ age: { $lt: 5 } });

// --- FINAL VIEW ---
// 9. Display everything one last time to confirm
db.contactlist.find().pretty();