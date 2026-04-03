USE university_db;

-- 1. Retrieve all students enrolled in "Database Systems"
SELECT s.name 
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id
WHERE c.title = 'Database Systems';

-- 2. List all courses with instructor names
SELECT c.title, i.name AS instructor_name
FROM courses c
LEFT JOIN instructors i ON c.instructor_id = i.instructor_id;

-- 3. Find students not enrolled in any course
SELECT name FROM students
WHERE student_id NOT IN (SELECT student_id FROM enrollments);

-- 4. Update student email
UPDATE students 
SET email = 'new.alice@email.com' 
WHERE name = 'Alice Brown';

-- 5. Delete a course by ID
DELETE FROM courses WHERE course_id = 3;