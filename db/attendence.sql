\c attendence;

CREATE TABLE attendence_items (
    user_name varchar(40),
    user_id varchar(40),
    presence integer,
    event_id serial references events(id)
);

INSERT INTO attendence_items (user_name, user_id, presence, event_id) VALUES (
    'My Test Postgres User',
    'xyz',
    2,
    1
);