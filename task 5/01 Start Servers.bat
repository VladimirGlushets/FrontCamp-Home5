mkdir db1
mkdir db2
mkdir db3

start C:\mongodb\bin\mongod --dbpath db1 --port 27001 --replSet myreplica
start C:\mongodb\bin\mongod --dbpath db2 --port 27002 --replSet myreplica
start C:\mongodb\bin\mongod --dbpath db3 --port 27003 --replSet myreplica
