/* ************************************************************************

   ut3

   Copyright:
     2010 Deutsche Telekom AG, Germany, http://telekom.com

 ************************************************************************ */

/* ************************************************************************

#asset(ut3/mobile/*)

************************************************************************ */

/**
 * Unify application class for mobile devices.
 */
qx.Class.define("ut3.application.Mobile", 
{
  extend : unify.application.Mobile,

  members : 
  {
    // overridden
    main : function() 
    {
      // Call super class
      this.base(arguments);

      // Configure application
      document.title = "ut3";

      // Register views
      var ViewManager = unify.view.mobile.ViewManager.getInstance();
      ViewManager.add(ut3.view.mobile.Start);
      ViewManager.add(ut3.view.mobile.GreatWineCapitals);
      ViewManager.add(unify.view.mobile.SysInfo);

      // Initialize navigation
      unify.view.mobile.NavigationManager.getInstance().init();   
    }
  }
});
