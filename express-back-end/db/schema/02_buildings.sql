DROP TABLE IF EXISTS buildings CASCADE;

CREATE TABLE buildings (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  building_code VARCHAR(255) NOT NULL,
  image TEXT,
  capacity int,
  open_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  close_time TIMESTAMP NOT NULL
);

