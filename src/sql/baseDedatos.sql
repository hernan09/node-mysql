CREATE DATABASE mysql;

USE mysql;

SHOW TABLES;

CREATE TABLE news (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100),
  news TEXT,
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO news (title, news) values ('my title', 'content of the news');

SELECT * FROM news;