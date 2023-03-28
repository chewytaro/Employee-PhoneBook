INSERT INTO departments (name) VALUES ('Servers');
INSERT INTO departments (name) VALUES ('Leadership');
INSERT INTO departments (name) VALUES ('Management');

INSERT INTO roles (title, salary, department_id) VALUES ('Part Time Servers', 50000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Full Time Servers', 90000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Server Supervisor', 100000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Assistant Manager', 130000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Manager', 150000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Jacky', 'Chan', 1, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Will', 'Smith', 2, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Miley', 'Cyrus', 3, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Magic', 'Mike', 3, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Buble', 5, 777);