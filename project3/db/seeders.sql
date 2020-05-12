USE travelDB;

INSERT INTO Users (name, email, createdAt, UpdatedAt)
VALUES 
("Nadine Bundschuh", "nadineb@umich.edu", NOW(), NOW()),
("Marjorie Bundschuh", "mbundschuh@cymatix.com", NOW(), NOW());

INSERT INTO Countries (countryName, continent, UserId, createdAt, UpdatedAt)
VALUES
("Germany", "Europe", 1, NOW(), NOW()),
("Japan", "Asia", 1, NOW(), NOW()),
("Colombia", "South America", 1, NOW(), NOW()),
("Costa Rica", "North America", 1, NOW(), NOW());

INSERT INTO Cities (cityName, CountryId, createdAt, UpdatedAt)
VALUES
("Berlin", 1, NOW(), NOW()),
("Osaka", 2, NOW(), NOW()),
("Cartegena", 3, NOW(), NOW()),
("San Jose", 4, NOW(), NOW());