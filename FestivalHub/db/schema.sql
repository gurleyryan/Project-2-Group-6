-- Create the database for FestivalHub
CREATE DATABASE festivalhub_db;

-- Switch to the newly created database
USE festivalhub_db;

-- Create the users table
CREATE TABLE users (
    id INT NOT NULL,
    username VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY,
);

-- Create the festivals table
CREATE TABLE festivals (
    id INT NOT NULL,
    name VARCHAR NOT NULL,
    location VARCHAR NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    PRIMARY KEY 
);

-- Create the user_favorites table to store user-festival relationships
CREATE TABLE user_favorites (
    user_id INT NOT NULL,
    festival_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (festival_id) REFERENCES festivals(id),
    PRIMARY KEY (user_id, festival_id)
);
