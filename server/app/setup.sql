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

CREATE TABLE player_ids (
	id int NOT NULL,
	name varchar(20) NOT NULL,
	region int NOT NULL,
	url varchar(100) NOT NULL
);
ALTER TABLE player_ids ADD CONSTRAINT uniquelink UNIQUE (url);

CREATE TABLE player_profile (
	id int NOT NULL,
	display_name varchar(20) NOT NULL,
	clan_name varchar(40),
	clan_tag varchar(40),
	url	varchar(100) NOT NULL,
	portrait_url varchar(150),
	primary_race varchar(20),
	highest_one_v_one_rank varchar(20),
	highest_team_rank varchar(20),
	career_total_games int,
	season_id int,
	season_number int,
	season_total_games int,
	one_v_one_wins int,
	one_v_one_games int,
	team_wins int,
	team_games int,
	solo_ladders jsonb
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
