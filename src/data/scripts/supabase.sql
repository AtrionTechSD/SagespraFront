drop table if exists students, applications, users, projects, companies, infos, municipes, provinces, campus, roles, careers;

CREATE TABLE "provinces" (
    "id" smallint NOT NULL, 
    "name" text NOT NULL, 
    PRIMARY KEY ( "id"),
    UNIQUE ("name")
);

CREATE TABLE "infos" (
    "id" bigint NOT NULL GENERATED ALWAYS AS IDENTITY, 
    "name" text NOT NULL, 
    "address" text NOT NULL, 
    "email" text NOT NULL, 
    "phone" text NOT NULL, 
    "municipe_id" smallint NOT NULL, 
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY ("id")
);

CREATE TABLE "municipes" (
    "id" bigint NOT NULL GENERATED ALWAYS AS IDENTITY, 
    "province_id" smallint NOT NULL, 
    "name" text NOT NULL, 
     "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

CREATE TABLE "careers" (
    "id" bigint NOT NULL GENERATED ALWAYS AS IDENTITY, 
    "name" text NOT NULL, 
    "sigla" text NOT NULL,
    "trim_pasantia" int NOT NULL,
    "trim_ssu" int NOT NULL DEFAULT 6, 
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

CREATE TABLE "applications" (
    "id" bigint NOT NULL GENERATED ALWAYS AS IDENTITY, 
    "status" text NOT NULL  CHECK ("status" IN ('Pendiente', 'Aprobada', 'Rechazada')) DEFAULT 'Pendiente',
    "note" text NULL, 
   "user_id" bigint NOT NULL,
   "project_id" bigint NOT NULL ,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY ("id")
);

CREATE TABLE "projects" (
    "id" bigint NOT NULL GENERATED ALWAYS AS IDENTITY, 
    "goal" text NOT NULL, 
    "department" text NOT NULL,
    "type" text NOT NULL CHECK ("type" IN ('Pasantía', 'SSU')), 
   "company_id" bigint NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY ("id")
);

CREATE TABLE "campus" (
    "id" bigint NOT NULL GENERATED ALWAYS AS IDENTITY, 
    "name" text NOT NULL, 
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

CREATE TABLE "roles" (
    "id" bigint NOT NULL GENERATED ALWAYS AS IDENTITY, 
    "name" text NOT NULL, 
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY ("id"),
    UNIQUE ("name")
);

CREATE TABLE "users" (
    "id" bigint NOT NULL , 
    "email" text NOT NULL, 
    "role_id" int NOT NULL, 
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY ("id"),
    UNIQUE ("email")
);

CREATE TABLE "students" (
    "id" bigint NOT NULL,
    "cedula" text NOT NULL, 
    "genre" text NOT NULL CHECK ("genre" IN ('Masculino', 'Femenino')), 
    "info_id" int, 
     "career_id" int , 
    "campus_id" int, 
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY ("id"),
    UNIQUE ("cedula"),
    UNIQUE ("info_id")
);

CREATE TABLE "companies" (
    "id" bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    "rnc" text,
    "sector" text NOT NULL CHECK ("sector" IN ('Pública', 'Privada')), 
    "info_id" bigint NOT NULL, 
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY ("id"),
    UNIQUE ("rnc"),
    UNIQUE ("info_id")
);


ALTER TABLE "infos"  ADD CONSTRAINT "fk_infos_municipes" FOREIGN KEY ("municipe_id") REFERENCES "municipes" ("id");

ALTER TABLE "municipes"  ADD CONSTRAINT "fk_municipes_provinces" FOREIGN KEY ("province_id") REFERENCES "provinces" ("id");

ALTER TABLE "applications"  ADD CONSTRAINT "fk_applications_users" FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "applications"  ADD CONSTRAINT "fk_applications_student" FOREIGN KEY ("user_id") REFERENCES "students" ("id");

ALTER TABLE "applications"  ADD CONSTRAINT "fk_applications_projects" FOREIGN KEY ("project_id") REFERENCES "projects" ("id");

ALTER TABLE "projects"  ADD CONSTRAINT "fk_projects_companies" FOREIGN KEY ("company_id") REFERENCES "companies" ("id");

ALTER TABLE "users"  ADD CONSTRAINT "fk_users_roles" FOREIGN KEY ("role_id") REFERENCES "roles" ("id");

ALTER TABLE "students"  ADD CONSTRAINT "fk_students_users" FOREIGN KEY ("id") REFERENCES "users" ("id");

ALTER TABLE "students"  ADD CONSTRAINT "fk_students_infos" FOREIGN KEY ("info_id") REFERENCES "infos" ("id");

ALTER TABLE "students"  ADD CONSTRAINT "fk_students_careers" FOREIGN KEY ("career_id") REFERENCES "careers" ("id");

ALTER TABLE "students"  ADD CONSTRAINT "fk_students_campus" FOREIGN KEY ("campus_id") REFERENCES "campus" ("id");

ALTER TABLE "companies"  ADD CONSTRAINT "fk_companies_infos" FOREIGN KEY ("info_id") REFERENCES "infos" ("id");

grant all privileges on all tables in schema public to public;

insert into
  public.roles (name)
values
  ('Admin'),
  ('Director'),
  ('Pasantia'),
  ('Participante');