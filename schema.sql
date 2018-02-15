DROP DATABASE IF EXISTS recipes;

CREATE DATABASE recipes;

USE recipes;

CREATE TABLE list (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url varchar NOT NULL,
  description varchar(50) NOT NULL
);
INSERT INTO list (url, description) VALUES ('https://www.jamieoliver.com/recipes/vegetables-recipes/ratatouille/', 'ratatouille');
INSERT INTO list (url, description) VALUES ('https://www.vegansociety.com/resources/recipes/quick-easy/tofu-scramble', 'tofu scramble');
