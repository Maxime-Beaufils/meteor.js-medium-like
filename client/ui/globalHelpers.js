import moment from "moment";

Template.registerHelper('getDisplayDateTime', function(date){
  return moment(date).format("DD/MM/YYYY à HH:mm");
});

Template.registerHelper('getFullNameFromOwnerId', function(ownerId){
  let user =  Meteor.users.findOne({_id: ownerId});
  if(user && user.profile){
    return user.profile.fullname
  }else{
    return "anonymus"
  }
});

Template.registerHelper('equals', function(a,b){
  return a === b;
});