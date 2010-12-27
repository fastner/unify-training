/* ************************************************************************

   ut2

   Copyright:
     2010 Deutsche Telekom AG, Germany, http://telekom.com

 ************************************************************************ */

/* ************************************************************************

#asset(ut2/mobile/*)

************************************************************************ */

/**
 * Unify application class for mobile devices.
 */
qx.Class.define("ut2.application.Mobile", 
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
      document.title = "ut2";

      // Register views
      var ViewManager = unify.view.mobile.ViewManager.getInstance();
      ViewManager.add(ut2.view.mobile.Start);
      ViewManager.add(ut2.view.mobile.GreatWineCapitals);
      ViewManager.add(unify.view.mobile.SysInfo);

      // Initialize navigation
      unify.view.mobile.NavigationManager.getInstance().init();   
    }
  }
});
