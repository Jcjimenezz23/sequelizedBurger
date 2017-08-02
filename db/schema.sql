-- Created database
CREATE DATABASE burgers_db;

-- Switched to burgers_db
USE burgers_db;

-- Created a table for the burgers
CREATE  TABLE burgers (
id INTEGER  AUTO_INCREMENT,
burger_name VARCHAR(23) NOT NULL,
devoured BOOLEAN  DEFAULT FALSE,
date TIMESTAMP,
PRIMARY KEY (id)
);