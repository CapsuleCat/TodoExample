Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Tasks.insert({ text: "Hello world!", createdAt: new Date() });
    Tasks.insert({ text: "Give a presentation about Meteor", createdAt: new Date() });
  });
}
