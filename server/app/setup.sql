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

CREATE TABLE "oauthTokens" (
    token_id    serial NOT NULL,
    accesstoken jsonb,
    refreshtoken jsonb
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;