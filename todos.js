Clicks = new Mongo.Collection('clicks');

if (Meteor.isClient) {
  Template.hello.helpers({
    counter: function () {
      return Clicks.findOne({}).total
    }
  });

  Template.hello.events({
    'click button': function () {
      var click = Clicks.findOne({});

      Clicks.update(click._id, {
        $inc: {
          total: 1
        }
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    var click = Clicks.findOne({});

    if (click == null) {
      Clicks.insert({
        total: 0
      });
    }
  });
}
