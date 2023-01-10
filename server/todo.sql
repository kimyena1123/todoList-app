SHOW databases;
USE kdt;
SHOW tables;

CREATE TABLE todo(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0
);

DESC todo;

--insert 방법1
INSERT INTO todo (title, done) VALUES ('sean todo1', 0);
INSERT INTO todo (title, done) VALUES ('sean todo2', 1);
INSERT INTO todo (title, done) VALUES ('sean todo3', 0);
INSERT INTO todo (title, done) VALUES ('sean todo4', 1);
INSERT INTO todo (title, done) VALUES ('sean todo5', 1);
INSERT INTO todo (title, done) VALUES ('sean todo6', 0);

-- insert 방법2
-- INSERT INTO todo VALUES (null, 'my todo1', 0);
-- INSERT INTO todo VALUES (null, 'my todo2', 0);
-- INSERT INTO todo VALUES (null, 'my todo3', 1);
-- INSERT INTO todo VALUES (null, 'my todo4', 1);
-- INSERT INTO todo VALUES (null, 'my todo5', 0);
-- INSERT INTO todo VALUES (null, 'my todo6', 0);

SELECT * FROM todo;