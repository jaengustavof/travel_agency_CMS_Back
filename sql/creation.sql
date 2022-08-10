DROP TABLE IF EXISTS flight_bookings;
DROP TABLE IF EXISTS hotel_bookings;
DROP TABLE IF EXISTS ticket_types;
DROP TABLE IF EXISTS hotels;
DROP TABLE IF EXISTS air_carriers;
DROP TABLE IF EXISTS hotel_categories;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

DROP TYPE IF EXISTS "uuid-ossp";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS roles (
    role_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    role_name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name varchar(255) NOT NULL,
    user_last varchar(255) NOT NULL,
    user_email varchar(255) NOT NULL UNIQUE,
    user_password varchar(255) NOT NULL,
    user_phone varchar(255) NOT NULL,
    role_id uuid REFERENCES roles   
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT NULL
);

CREATE TABLE IF NOT EXISTS hotel_categories (
    h_cat_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    h_cat_name varchar(64) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS hotels (
    hotel_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    hotel_name varchar(225) NOT NULL,
    hotel_city varchar(225) NOT NULL,
    hotel_address varchar(225),
    h_cat_id uuid REFERENCES hotel_categories   
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT NULL
);

CREATE TABLE IF NOT EXISTS hotel_bookings (
    hotel_id uuid REFERENCES hotels
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT NULL,
    user_id uuid REFERENCES users
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT NULL,
    booking_id varchar(25) NOT NULL,
    booking_from DATE NOT NULL,
    booking_to DATE NOT NULL,
    booking_price DECIMAL(10,2) NOT NULL
    
);

CREATE TABLE IF NOT EXISTS air_carriers (
    carrier_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    carrier_name varchar(64) NOT NULL,
    carrier_logo varchar(255),
    carrier_iata varchar(10)
);

CREATE TABLE IF NOT EXISTS ticket_types (
    ticket_type_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_type_name varchar(25) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS flight_bookings (
    carrier_id uuid REFERENCES air_carriers
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT NULL,
    user_id uuid REFERENCES users
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT NULL,
    ticket_type_id uuid REFERENCES ticket_types
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT NULL,
    booking_id varchar(25) NOT NULL,
    booking_departure DATE NOT NULL,
    booking_return DATE,
    booking_from varchar(25),
    booking_to varchar(25),
    booking_price DECIMAL(10,2) NOT NULL
);







