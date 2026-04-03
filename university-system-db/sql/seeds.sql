USE university_db;

INSERT INTO instructors (name, department) VALUES 
('Dr. Smith', 'Computer Science'),
('Prof. Johnson', 'Mathematics'),
('Dr. Lee', 'Physics');

INSERT INTO students (name, email, age) VALUES 
('Alice Brown', 'alice@email.com', 20),
('Bob Wilson', 'bob@email.com', 22),
('Charlie Davis', 'charlie@email.com', 19);

INSERT INTO courses (title, credits, instructor_id) VALUES 
('Database Systems', 4, 1),
('Calculus I', 3, 2),
('Quantum Mechanics', 4, 3);

INSERT INTO enrollments (student_id, course_id, grade) VALUES 
(1, 1, 'A'), -- Alice in Databases
(2, 1, 'B'), -- Bob in Databases
(1, 2, 'A'), -- Alice in Calculus
(3, 3, 'C'); -- Charlie in Quantum