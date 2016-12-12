db = db.getSiblingDB('posts');

db.authors.createIndex({"lastName": 1});

db.articles.createIndex({"theme": 1});
db.articles.createIndex({"author_id": 1});

db.comments.createIndex({"creationDate": 1});
db.comments.createIndex({"article_id": 1});