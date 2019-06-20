import "./comment.html";
import { Comments } from "../../../both/collections";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.comment_form.events({
  "submit .js-create-comment"(event, instance){
    event.preventDefault();

    if(!Meteor.userId()){
      document.querySelector('.modal').classList.add('is-active');
      return;
    }

    const content = event.target.content.value

    Meteor.call("insertComment", {content: content, articleId: FlowRouter.getParam('articleId')}, function(err, res){
      if(!err){
        event.target.content.value = "";
      }
    });
  }
});

Template.comment_list.helpers({
  comments(){
    return Comments.find({articleId: FlowRouter.getParam("articleId")});
  }
})