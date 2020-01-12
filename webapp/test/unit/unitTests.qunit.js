/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mg/STA_MD_01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});