DROP TABLE IF EXISTS flight_bookings;
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



CREATE TABLE IF NOT EXISTS flight_bookings (
    user_id uuid REFERENCES users
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







