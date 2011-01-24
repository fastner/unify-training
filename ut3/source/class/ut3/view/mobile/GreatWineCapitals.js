qx.Class.define("ut3.view.mobile.GreatWineCapitals", {
  extend: unify.view.mobile.RemoteView,
      type: "singleton",

  members: {
    __content: null,

    getTitle: function() {
      return "GreatWineCapitals";
    },

    _createView: function() {
      var layer = new unify.ui.mobile.Layer(this);
      var titlebar = new unify.ui.mobile.TitleBar(this);
      layer.add(titlebar);

      var content = this.__content = new unify.ui.mobile.ScrollView();
      content.setEnableScrollX(false);
      layer.add(content);

      return layer;
    },

    _getBusinessObject: function() {
      return ut3.business.MyRemoteData.getInstance();
    },

    _getServiceName: function() {
      return "remotetest";
    },

    _renderData: function(data) {
      var html = "<ul>";
      html += data.map(this.__renderItem, this).join("");
          html += "</ul>";
      this.__content.replace(html);
    },

    _errorHandler : function() {
      this.__content.replace("Could not load content");
    },

    __renderItem: function(item) {
      return "<li>" + item.city + " is in the area of " + item.area + "</li>";
    }
  }
});
