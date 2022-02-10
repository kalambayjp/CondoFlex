DROP TABLE IF EXISTS amenities CASCADE;

CREATE TABLE amenities (
  id SERIAL PRIMARY KEY NOT NULL,
  building_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  email TEXT,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  unit_number VARCHAR(40) NOT NULL,
  image TEXT
);

