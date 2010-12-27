qx.Class.define("ut2.business.MyStaticData", {
  extend: unify.business.StaticData,
      type: "singleton",

  construct: function() {
    this.base(arguments);
    this._addService("statictest");
  },

  members: {
    _readData : function(service, params) {
      if (service == "statictest") {
        var myStaticData = [
          {area: "Rioja", city: "Bilbao"},
          {area: "Bordeaux", city: "Bordeaux"},
          {area: "Toskana", city: "Florenz"},
          {area: "Cape-Wineland", city: "Kapstadt"},
          {area: "Mendoza", city: "Mendoza"},
          {area: "Dourotal", city: "Porto"},
          {area: "Napa Valley", city: "San Francisco"},
          {area: "Neuseeland", city: "Christ Church"},
          {area: "Rheinhessen", city: "Mainz"}
        ];
        return myStaticData;
      }

      return null;
    }
  }
});
