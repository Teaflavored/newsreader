window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewsReader.Routers.AppRouter({
      $mainEl: $("div#content")
    });
    NewsReader.feeds = new NewsReader.Collections.Feeds();
    Backbone.history.start();
    
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
