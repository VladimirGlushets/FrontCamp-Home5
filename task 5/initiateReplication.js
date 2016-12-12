rs.initiate();

rs.add(hostname() + ":27002");
rs.addArb(hostname() + ":27003");
printjson(rs.status());
