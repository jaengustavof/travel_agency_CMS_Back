DELETE FROM flight_bookings;
DELETE FROM air_carriers;
DELETE FROM hotel_bookings;
DELETE FROM users;
DELETE FROM hotels;
DELETE FROM ticket_types;
DELETE FROM roles;
DELETE FROM hotel_categories;

INSERT INTO "ticket_types" ("ticket_type_name")
VALUES ('One Way'), ('Round Trip');

INSERT INTO "roles" ("role_name")
VALUES ('client'), ('admin'), ('editor');

INSERT INTO "hotel_categories" ("h_cat_name")
VALUES ('5 stars'), ('4 stars'), ('3 stars'), ('2 stars'), ('1 stars'), ('boutique'), ('hostel'), ('other');

INSERT INTO "users" ("user_name", "user_last", "user_email", "user_password", "user_phone", "role_id")
VALUES ('Gustavo', 'Test', 'gustavo@mail.com', '12345', '666999888', (SELECT role_id FROM roles WHERE role_name = 'admin')), ('Pepe', 'Test', 'pepe@mail.com', '12345', '666999888', (SELECT role_id FROM roles WHERE role_name = 'editor')), ('Marta', 'Test', 'marta@mail.com', '12345', '666999888', (SELECT role_id FROM roles WHERE role_name = 'client'));

INSERT INTO "hotels" ("hotel_name", "hotel_city", "hotel_address", "h_cat_id")
VALUES ('Novotel Madrid Center', 'Madrid', 'Calle de ODonnell, 53, 28009', (SELECT h_cat_id FROM hotel_categories WHERE h_cat_name = '4 stars')), ('Hotel NH Madrid Alonso Martínez', 'Madrid', '', (SELECT h_cat_id FROM hotel_categories WHERE h_cat_name = '3 stars')),('Hotel Soho Boutique Opera', 'Madrid', 'C. de las Veneras, 2, 28013', (SELECT h_cat_id FROM hotel_categories WHERE h_cat_name = 'boutique'));


INSERT INTO "hotel_bookings" ("hotel_id", "user_id", "booking_id", "booking_from","booking_to", "booking_price")
VALUES ((SELECT hotel_id FROM hotels WHERE hotel_name = 'Novotel Madrid Center'), (SELECT user_id FROM users WHERE user_email = 'gustavo@mail.com'), 'AAA1234566', '2022/10/10', '2022/10/15', '335.75'),((SELECT hotel_id FROM hotels WHERE hotel_name = 'Hotel NH Madrid Alonso Martínez'), (SELECT user_id FROM users WHERE user_email = 'pepe@mail.com'), 'DEF4452', '2022/11/10', '2022/11/15', '80.25'), ((SELECT hotel_id FROM hotels WHERE hotel_name = 'Hotel Soho Boutique Opera'), (SELECT user_id FROM users WHERE user_email = 'marta@mail.com'), 'DE558F4452', '2022/11/15', '2022/11/25', '250.25');


INSERT INTO "air_carriers" ("carrier_name", "carrier_logo", "carrier_iata")
VALUES ('Lufthansa', 'https://www.airfleets.net/cie/Lufthansa.jpg', 'LH'), ('Iberia', 'https://www.airfleets.net/cie/Iberia.jpg', 'IB'),('Vueling', 'https://www.airfleets.net/cie/Vueling%20Airlines.jpg', 'VY');

INSERT INTO "flight_bookings" ("carrier_id", "user_id", "ticket_type_id", "booking_id", "booking_departure", "booking_return", "booking_from", "booking_to", "booking_price")
VALUES ((SELECT carrier_id FROM air_carriers WHERE carrier_iata = 'LH'), (SELECT user_id FROM users WHERE user_email = 'marta@mail.com'), (SELECT ticket_type_id FROM ticket_types WHERE ticket_type_name = 'One Way'), 'AAA3R2', '2022/12/01', NULL, 'MUC', 'MAD', '325.25'), ((SELECT carrier_id FROM air_carriers WHERE carrier_iata = 'IB'), (SELECT user_id FROM users WHERE user_email = 'gustavo@mail.com'), (SELECT ticket_type_id FROM ticket_types WHERE ticket_type_name = 'Round Trip'), 'A32RDE', '2023/02/01', '2023/02/15', 'MAD', 'MIA', '958.25'), ((SELECT carrier_id FROM air_carriers WHERE carrier_iata = 'VY'), (SELECT user_id FROM users WHERE user_email = 'pepe@mail.com'), (SELECT ticket_type_id FROM ticket_types WHERE ticket_type_name = 'Round Trip'), 'RES2SW', '2023/02/01', '2023/02/10', 'MAD', 'BCN', '105.25');
