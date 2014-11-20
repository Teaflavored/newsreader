NewsReader.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
    "feeds/:id": "feedShow",
    "feeds/:id/edit": "edit"
  },
  
  initialize: function (options) {
      this.$mainEl = options.$mainEl;
  },
  
  
  feedsIndex: function () {
      var indexView = new NewsReader.Views.FeedsIndex({ collection: NewsReader.feeds });  
      NewsReader.feeds.fetch();
      this._swapView(indexView);
  },
  
  feedShow: function(id){
      var feed = NewsReader.feeds.getOrFetch(id);
      var showView = new NewsReader.Views.FeedShow({ model: feed });
      this._swapView(showView);
  },
  
  _swapView: function (view) {
      this.currentView && this.currentView.remove();
      this.currentView = view;
      this.$mainEl.html(this.currentView.render().$el);
  },
  
  
});
