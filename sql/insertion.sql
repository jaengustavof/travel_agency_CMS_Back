DELETE FROM flight_bookings;
DELETE FROM users;
DELETE FROM roles;



INSERT INTO "roles" ("role_name")
VALUES ('guest'), ('admin'), ('user');

INSERT INTO "users" ("user_name", "user_last", "user_email", "user_password", "user_phone", "role_id")
VALUES ('Gustavo', 'Test', 'gustavo@mail.com', '12345', '666999888', (SELECT role_id FROM roles WHERE role_name = 'admin')), ('Pepe', 'Test', 'pepe@mail.com', '12345', '666999888', (SELECT role_id FROM roles WHERE role_name = 'guest')), ('Marta', 'Test', 'marta@mail.com', '12345', '666999888', (SELECT role_id FROM roles WHERE role_name = 'user'));

INSERT INTO "flight_bookings" ("user_id", "booking_id", "booking_departure", "booking_return", "booking_from", "booking_to", "booking_price")

VALUES ( (SELECT user_id FROM users WHERE user_email = 'marta@mail.com'),  'AAA3R2', '2022/12/01', NULL, 'MUC', 'MAD', '325.25'), ((SELECT user_id FROM users WHERE user_email = 'gustavo@mail.com'),'A32RDE', '2023/02/01', '2023/02/15', 'MAD', 'MIA', '958.25'), ((SELECT user_id FROM users WHERE user_email = 'pepe@mail.com'), 'RES2SW', '2023/02/01', '2023/02/10', 'MAD', 'BCN', '105.25');
