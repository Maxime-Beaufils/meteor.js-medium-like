import "./ui/layout/layout";
import "./ui/globalHelpers";

import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { Articles, Comments } from "../both";
import "./startup/router";


if(Meteor.isDevelopment){
  window.FlowRouter = FlowRouter;
  window.Articles = Articles;
  window.Comments = Comments;
}

