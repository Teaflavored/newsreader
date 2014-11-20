NewsReader.Views.FeedsIndex = Backbone.View.extend({
    template: JST['feeds/index'],
    events: {
        "click button.delete-feed": "deleteFeed"
    },
    
    deleteFeed: function(event){
        event.preventDefault();
        var $button = $(event.currentTarget);
        var feedId = $button.data("id");
        var feed = this.collection.get(feedId);
        feed.destroy();
    },
    
    initialize: function () {
        this.listenTo(this.collection, "sync add remove", this.render);
    },
    
    render: function () {
        var content = this.template({ feeds: this.collection });
        this.$el.html(content);
        return this;
    },
    

});
