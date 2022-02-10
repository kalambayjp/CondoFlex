DROP TABLE IF EXISTS bookings CASCADE;

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  amenity_id VARCHAR(255) NOT NULL,
  number_of_people VARCHAR(255) NOT NULL,
  start_time timestamp NOT NULL,
  end_time timestamp NOT NULL
);

