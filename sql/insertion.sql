DELETE FROM flight_bookings;
DELETE FROM hotel_bookings;
DELETE FROM users;
DELETE FROM roles;
DELETE FROM hotel_categories;


INSERT INTO "roles" ("role_name")
VALUES ('guest'), ('admin'), ('user');

INSERT INTO "users" ("user_name", "user_last", "user_email", "user_password", "user_phone", "role_id")
VALUES ('Gustavo', 'Test', 'gustavo@mail.com', '12345', '666999888', (SELECT role_id FROM roles WHERE role_name = 'admin')), ('Pepe', 'Test', 'pepe@mail.com', '12345', '666999888', (SELECT role_id FROM roles WHERE role_name = 'guest')), ('Marta', 'Test', 'marta@mail.com', '12345', '666999888', (SELECT role_id FROM roles WHERE role_name = 'user'));

INSERT INTO "hotel_bookings" ("user_id", "booking_id", "booking_from","booking_to", "booking_price")
VALUES ( (SELECT user_id FROM users WHERE user_email = 'gustavo@mail.com'), 'AAA1234566', '2022/10/10', '2022/10/15', '335.75'),((SELECT user_id FROM users WHERE user_email = 'pepe@mail.com'), 'DEF4452', '2022/11/10', '2022/11/15', '80.25'), ((SELECT user_id FROM users WHERE user_email = 'marta@mail.com'), 'DE558F4452', '2022/11/15', '2022/11/25', '250.25');


INSERT INTO "flight_bookings" ("user_id", "booking_id", "booking_departure", "booking_return", "booking_from", "booking_to", "booking_price")

VALUES ( (SELECT user_id FROM users WHERE user_email = 'marta@mail.com'),  'AAA3R2', '2022/12/01', NULL, 'MUC', 'MAD', '325.25'), ((SELECT user_id FROM users WHERE user_email = 'gustavo@mail.com'),'A32RDE', '2023/02/01', '2023/02/15', 'MAD', 'MIA', '958.25'), ((SELECT user_id FROM users WHERE user_email = 'pepe@mail.com'), 'RES2SW', '2023/02/01', '2023/02/10', 'MAD', 'BCN', '105.25');
