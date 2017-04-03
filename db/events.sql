DROP DATABASE IF EXISTS attendence;
CREATE DATABASE attendence;

\c attendence;

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name varchar(40),
    stamp timestamp,
    type integer
);

INSERT INTO events (name, stamp, type) VALUES (
    'Test Postgres Event',
    current_timestamp,
    2
);