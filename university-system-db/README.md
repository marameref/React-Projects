```markdown
# University Information System (Relational Database)

This project demonstrates the design and implementation of a normalized relational database for a university. It covers schema creation, data integrity constraints (Primary/Foreign Keys, NOT NULL, CHECK), and complex SQL queries.

---

## 📂 Project Structure

```text
university-system-db/
├── sql/
│   ├── schema.sql    # Table structures, relationships, and constraints
│   ├── seeds.sql     # Sample data for testing
│   └── queries.sql    # SQL solutions for the challenge tasks
└── README.md         # Documentation and instructions
```

---

## 🏛 Database Schema Design (3NF)

The database consists of four main entities, designed to avoid data redundancy:

1.  **Instructors**: Stores faculty details.
2.  **Students**: Stores student details with an age constraint (`> 17`).
3.  **Courses**: Links to instructors (Many-to-One).
4.  **Enrollments**: A "Bridge" table linking Students and Courses (Many-to-Many), storing specific grades.

---

## 🚀 Getting Started

### 1. Prerequisites
- **MySQL Server** installed and running on your machine.
- Access to a terminal or MySQL client.

### 2. Implementation Steps
Run these commands in your MySQL terminal to build the system:

```sql
-- Step 1: Create Schema
SOURCE sql/schema.sql;

-- Step 2: Insert Sample Data
SOURCE sql/seeds.sql;
```

---

## 🔍 SQL Challenges & Solutions

### Task 1: Retrieve students in "Database Systems"
Uses an `INNER JOIN` across three tables to filter by course title.

### Task 2: List courses with Instructor names
Uses a `LEFT JOIN` to ensure courses are listed even if an instructor hasn't been assigned yet.

### Task 3: Find students not enrolled in any course
Uses a `NOT IN` subquery to identify students missing from the `enrollments` table.

### Task 4: Update student email
Demonstrates the `UPDATE` command using a specific `WHERE` clause.

### Task 5: Delete a course
Demonstrates the `DELETE` command. Note: Due to `ON DELETE CASCADE` in the schema, deleting a course automatically removes its associated enrollment records.

---

## 🛠 Constraints Used
- **PRIMARY KEY**: Uniquely identifies each record.
- **FOREIGN KEY**: Maintains referential integrity between tables.
- **CHECK**: Ensures business rules (e.g., `age > 17`).
- **UNIQUE**: Prevents duplicate emails in the `students` table.
- **NOT NULL**: Ensures essential data (like names) is never missing.

---

## 💡 How to Preview Queries
To see the results of the queries, you can run them directly from the terminal:
```bash
mysql -u root -p university_db < sql/queries.sql
```
```