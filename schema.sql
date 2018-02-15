DROP DATABASE IF EXISTS recipes;

CREATE DATABASE recipes;

USE recipes;

CREATE TABLE list (
  id int NOT NULL AUTO_INCREMENT,
  url nvarchar(500) NOT NULL,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO list (url, name) VALUES ('www.jamieoliver.com/recipes/vegetables-recipes/ratatouille/', 'ratatouille');
INSERT INTO list (url, name) VALUES ('www.vegansociety.com/resources/recipes/quick-easy/tofu-scramble', 'tofu scramble');
