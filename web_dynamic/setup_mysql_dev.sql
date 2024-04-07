-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS uninet_db;
CREATE USER IF NOT EXISTS 'uninet_dev'@'localhost' IDENTIFIED BY 'Uninet-m1';
GRANT ALL PRIVILEGES ON `uninet_db`.* TO 'uninet_dev'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'uninet_dev'@'localhost';
FLUSH PRIVILEGES;
