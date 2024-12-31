CREATE TABLE if not existS roles(
    roles_id SERIAL PRIMARY KEY,
    role_name varchar(50) NOT NULL,
  );

CREATE TABLE IF NOT EXISTS designations(
    designation_id SERIAL PRIMARY KEY,
    department_id INTEGER NOT NULL,
    designation_name varchar(50) NOT NULL,
    status BOOLEAN DEFAULT TRUE
  );  


CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    user_name VARCHAR(70) NOT NULL,
    user_designation_id INTEGER ,
    user_contact VARCHAR(30),
    user_email VARCHAR(70) UNIQUE,
    user_role varchar(70) NOT NULL,
    user_status BOOLEAN DEFAULT TRUE,
    user_password varchar(20) DEFAULT ${password},
    FOREIGN KEY (designation_id) REFERENCES designations(designation_id)
  );

  CREATE TABLE IF NOT EXISTS login(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(300) NOT NULL,
    role_id INTEGER,
    status BOOLEAN DEFAULT TRUE,
    lastLoggedIn TIMESTAMP,
    FOREIGN KEY(role_id) REFERENCES roles(roles_id)
  );