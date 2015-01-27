var $ = require("jquery");
var Backbone = require("backbone");
var hogan = require("hogan.js");
Backbone.$ = $;

var HomeModel = Backbone.Model.extend({
  initialize: function() {
    this.fetch();
  },
  fetch: function() {
    var me = this;
    $.ajax({
      url: 'http://startupgrid-api-staging.herokuapp.com/topics.json',
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      me.set("topics", data);
    });
  }
});

var HomeView = Backbone.View.extend({
  initialize: function(params) {
    this.router =params.router;
    this.mode = new homeModel();
  },
  template: function() {
    return hogan.compile($("#template-home").html()).render(this.model.attributes);
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.addClass('home');
  }
});

module.exports = HomeView;