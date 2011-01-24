qx.Class.define("ut3.business.MyRemoteData", {
  extend: unify.business.RemoteData,
      type: "singleton",

  construct: function() {
    this.base(arguments);
    this.setEnableProxy(false);
    this._addService("remotetest", {url: "http://localhost:8080/data.json", keep: 60*60});
  }
});
