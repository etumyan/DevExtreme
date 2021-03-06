"use strict";

var $ = require("jquery"),
    ko = require("knockout"),
    angular = require("angular");

require("bundles/dx.viz.js");

QUnit.test("DevExpress namespaces", function(assert) {
    var namespaces = [
        "Color",        // from core

        "data",
        "viz",
        "events"
    ];

    $.each(namespaces, function(index, namespace) {
        assert.ok(DevExpress[namespace], namespace + " namespace");
    });

    assert.ok(ko.bindingHandlers.dxAction, "knockout integration");
    assert.ok(angular.module("dx"), "angular integration");
});

require("./bundlesParts/core.tests.js");
require("./bundlesParts/events.tests.js");
require("./bundlesParts/data.tests.js");
require("./bundlesParts/data.odata.tests.js");
require("./bundlesParts/animation.tests.js");
