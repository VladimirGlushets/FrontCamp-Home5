db = db.getSiblingDB('posts');

db.authors.insert({firstName: "Robert Bernard", lastName: "Fowler"});
db.authors.insert({firstName: "Jeffrey", lastName: "Richter"});
db.authors.insert({firstName: "John", lastName: "Skitt"});

db.tags.insert({title: "tag1"});
db.tags.insert({title: "tag2"});
db.tags.insert({title: "tag3"});

var authors = db.authors.find();

authors.forEach(function(author){
	db.articles.insert({
		content: "article content by " + author.firstName + " " + author.lastName,
		title: "article title by " + author.firstName + " " + author.lastName,
		description: "description title by " + author.firstName + " " + author.lastName,
		theme: "programming",
		author_id: author._id
	});		
});

var articles = db.articles.find();
var tag = db.tags.findOne();

articles.forEach(function(article){
	db.comments.insert({
		content: "comment by article '" + article.title + "'",		
		creationDate: new Date(),
		article_id: article._id,
		tags: [tag._id]
	});		
});
