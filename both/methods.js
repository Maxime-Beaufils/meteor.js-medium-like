import {Articles, Comments } from './collections';

Meteor.methods({
  insertArticle(title, content){
    let articleDoc = {
      title: title,
      content: content,
      createAt: new Date(),
      ownerId: this.userId
    }

    Articles.insert(articleDoc);
  },
  updateArticle(){

  },
  removeArticle(){

  },
  insertComment(){

  }
})