sap.ui.define([
                "sap/ui/core/ComponentContainer"
                ], function(ComponentContainer) {
                    "use strict";

                    new ComponentContainer({
                        name: "development",
                        settings: {
                            id: "development"
                        },
                        async: true
                    }).placeAt("content");
                });