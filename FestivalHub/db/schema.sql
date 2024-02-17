DROP DATABASE IF EXISTS festival_db;
CREATE DATABASE festival_db;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    preference VARCHAR(255)
);

CREATE TABLE Festivals (
    festival_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE Bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    festival_id INT NOT NULL,
    user_id INT NOT NULL,
    number_of_tickets INT NOT NULL,
    booking_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ticket_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (festival_id) REFERENCES Festivals(festival_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
