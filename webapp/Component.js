sap.ui.define([
      "sap/ui/core/UIComponent",
      "sap/ui/model/json/JSONModel",
      "./controller/HelloDialog"
      ], function(UIComponent, JSONModel, HelloDialog) {
          "use strict";
          return UIComponent.extend("development.Component", {
          metadata: {
            manifest: "json"
          },
          init: function() {
            UIComponent.prototype.init.apply(this, arguments);
          var oData = {
            recipient: {
              name: "World"
              }
            };
          var oModel = new JSONModel(oData);
          this.setModel(oModel);
          this.helloDialog = new HelloDialog(this.getRootControl());
          },

          exit: function() {
            this.helloDialog.destroy();
            delete this.helloDialog;
          },

          openHelloDialog: function() {
            this.helloDialog.open();
          }
      });
});