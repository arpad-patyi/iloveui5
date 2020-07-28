sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";
  return Controller.extend("development.controller.App", {
    onShowHello : function () {
      alert("Hello World");
    }
  });
});