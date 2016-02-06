#!/bin/bash
echo "******CREATING travelaries DATABASE******"
gosu postgres postgres --single <<- EOSQL
   CREATE USER travelaries;
   CREATE DATABASE travelaries WITH TEMPLATE = template0 OWNER = travelaries ENCODING = 'UTF8';
   GRANT ALL PRIVILEGES ON DATABASE travelaries to travelaries;
EOSQL
echo "******travelaries DATABASE CREATED******"
