/* ************************************************************************

   ut1

   Copyright:
     2010 Deutsche Telekom AG, Germany, http://telekom.com

 ************************************************************************ */

/* ************************************************************************

#asset(ut1/mobile/*)

************************************************************************ */

/**
 * Unify application class for mobile devices.
 */
qx.Class.define("ut1.application.Mobile", 
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
      document.title = "ut1";

      // Register views
      var ViewManager = unify.view.mobile.ViewManager.getInstance();
      ViewManager.add(ut1.view.mobile.Start);
      ViewManager.add(unify.view.mobile.SysInfo);

      // Initialize navigation
      unify.view.mobile.NavigationManager.getInstance().init();   
    }
  }
});
