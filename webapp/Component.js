sap.ui.define([
      "sap/ui/core/UIComponent",
      "sap/ui/model/json/JSONModel",
      "sap/ui/model/resource/ResourceModel"      
      ], function (UIComponent, JSONModel, ResourceModel) {
          "use strict";
          return UIComponent.extend("development.Component", {
          metadata : {
            rootView : {
              "viewName": "development.view.App",
              "type"    : "XML",
              "async"   : true, 
              "id"      : "app"
            }
          },
          
          init : function () {
            UIComponent.prototype.init.apply(this, arguments);
          
          var oData = {
            recipient : {
              name : "Wolrd"
            }
          };
          var oModel = new JSONModel(oData);
          this.setModel(oModel);
                   
          var i18nModel = new ResourceModel({
            bundleName : "development.i18n.i18n"
          });
          
          this.setModel(i18nModel, "i18n");
        }
      });
});