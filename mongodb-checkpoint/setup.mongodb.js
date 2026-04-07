// 1. Create/Switch to the 'contact' database
use('contact');

// 2. Insert the documents (The 'C' in CRUD: Create)
db.contactlist.insertMany([
  { last_name: "Ben", first_name: "Moris", email: "ben@gmail.com", age: 26 },
  { last_name: "Kefi", first_name: "Seif", email: "kefi@gmail.com", age: 15 },
  { last_name: "Emilie", first_name: "brouge", email: "emilie.b@gmail.com", age: 40 },
  { last_name: "Alex", first_name: "brown", age: 4 },
  { last_name: "Denzel", first_name: "Washington", age: 3 }
]);

// 3. Display all (The 'R' in CRUD: Read)
db.contactlist.find().pretty();

// 4. Find all with age > 18
db.contactlist.find({ age: { $gt: 18 } });

// 5. Find age > 18 and name contains "ah"
// ($regex looks for patterns, "i" makes it case-insensitive)
db.contactlist.find({ 
  age: { $gt: 18 }, 
  first_name: { $regex: "ah", $options: "i" } 
});

// 6. Update first name (The 'U' in CRUD: Update)
db.contactlist.updateOne(
  { first_name: "Seif" }, 
  { $set: { first_name: "Anis" } }
);

// 7. Delete young contacts (The 'D' in CRUD: Delete)
db.contactlist.deleteMany({ age: { $lt: 5 } });

// 8. Final display to confirm everything worked
db.contactlist.find();