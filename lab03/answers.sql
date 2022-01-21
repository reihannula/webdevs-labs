-- Exercise 1 (done for you):
SELECT * FROM users;

-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;

-- Exercise 3
SELECT id, first_name, last_name FROM users
ORDER BY last_name

-- Exercise 4
SELECT id, image_url, user_id FROM posts
WHERE user_id=26

-- Exercise 5
SELECT id, image_url, user_id FROM posts
WHERE user_id=26 or user_id=12

-- Exercise 6
SELECT count(posts.id) FROM posts

-- Exercise 7
SELECT user_id, count(*) 
FROM comments 
GROUP BY user_id
ORDER BY count(*) desc

-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, 
users.username, users.first_name, users.last_name
FROM posts
JOIN users ON users.id=posts.user_id
where user_id=26 or user_id=12

-- Exercise 9
SELECT posts.id, posts.pub_date, following.following_id 
FROM following
JOIN posts ON posts.user_id = following.following_id
where following.user_id=26 

-- Exercise 10

-- Exercise 11
INSERT INTO bookmarks (user_id, post_id)
SELECT user_id, id 
FROM posts 
WHERE id=219 

INSERT INTO bookmarks (user_id, post_id)
SELECT user_id, id 
FROM posts 
WHERE id=220

INSERT INTO bookmarks (user_id, post_id)
SELECT user_id, id 
FROM posts 
WHERE id=221

-- Exercise 12
DELETE FROM bookmarks 
WHERE post_id = 219

DELETE FROM bookmarks 
WHERE post_id = 220

DELETE FROM bookmarks 
WHERE post_id = 221

-- Exercise 13
UPDATE users 
SET email = 'cyoung2022@gmail.com'
WHERE last_name = 'Young'

-- Exercise 14
