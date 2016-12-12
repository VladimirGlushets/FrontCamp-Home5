db = db.getSiblingDB('posts');

db.authors.drop();
db.articles.drop();
db.comments.drop();
db.tags.drop();