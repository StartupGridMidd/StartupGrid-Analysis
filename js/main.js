var $ = require('jquery');
var Backbone = require("backbone");
var HomeView = require("./home");

$(document).ready(function() {

  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "home",
    },
    initialize: function() {

    },
    landing: function() {
      this.HomeView = new HomeView({
        el: "#container",
        router: this
      });
      this.HomeView.render();
    }
  });

  var router = new AppRouter();
  Backbone.history.start();
});