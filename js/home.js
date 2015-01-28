var $ = require("jquery");
var Backbone = require("backbone");
var hogan = require("hogan.js");
Backbone.$ = $;
var data;

var HomeModel = Backbone.Model.extend({
  initialize: function() {
    fetch();
  },
  fetch: function() {
    d3.json(""), function(error, json) {
      if (error) return console.warn(error);
      data = json;
      window.console.log(data);
    }
  }
});

var HomeView = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
    this.model = new homeModel();
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