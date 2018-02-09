CREATE TABLE Users(
	ID 			serial primary key,
	UserName 	VARCHAR(50) NOT NULL,
	Email 		VARCHAR(255) NOT NULL,
	Password 	VARCHAR(255) NOT NULL DEFAULT '',
	BattlenetId VARCHAR(50),
	AvatarLink 	VARCHAR(255),
	date_registered date,
	CONSTRAINT uniquename UNIQUE(UserName),
	CONSTRAINT uniqueemail UNIQUE(Email)
);

CREATE TABLE PlayerStats(
	user_id 	serial NOT NULL,
	data jsonb
);
