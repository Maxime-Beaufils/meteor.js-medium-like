import { Articles, Comments } from "../both";
import { check } from 'meteor/check';

Meteor.publish('articles.list', function() {

  let articleCursor = Articles.find({}, {fields: { content: 0}});

  // recupération des id des auteurs des articles
  let arrayArticle = articleCursor.fetch();
  let arrayOwnerId = arrayArticle.map(article => article.ownerId);
  let arrayUniqueOwnerId = Array.from(new Set(arrayOwnerId));

  return [
    Articles.find({}, {fields: { content: 0}}),
    Meteor.users.find({_id: { $in: arrayUniqueOwnerId}},{ fields: { profile: 1} })
  ]
});

Meteor.publish('article.single', function(articleId){
  check(articleId, String);

    // récuperation cursor
    let articleCursor = Articles.find({_id: articleId});
    let commentCursor = Comments.find({articleId: articleId});

    // récuperation des auteurs Id des articles
    let arrayComment = commentCursor.fetch();
    let arrayOwnerId = arrayComment.map(comment => comment.ownerId);

    // récuperer auteur de l'article
    let article = articleCursor.fetch().find(article => article._id === articleId)
    arrayOwnerId.push(article.ownerId);

    let arrayUniqueOwnerId = Array.from(new Set(arrayOwnerId))

  return [
    articleCursor,
    commentCursor,
    Meteor.users.find({_id: {$in: arrayUniqueOwnerId}},{ fields: { profile: 1} })
  ]
})