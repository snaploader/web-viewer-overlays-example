"use strict";
var NODES = {
    VAV_1: {
        displayName: "VAV-1",
        height: 1.5,
        color: "#4d1",
    },
    VAV_2: {
        displayName: "VAV-2",
        height: 1.5,
        color: "#4d1",
    },
    VAV_3: {
        displayName: "VAV-3",
        height: 1.5,
        color: "#4d1",
    },
    AHU_1_Sensor: {
        displayName: "AHU-1 Sensor",
        height: 1.75,
        color: "#d1d",
    },
    AHU_2_Sensor: {
        displayName: "AHU-2 Sensor",
        height: 1.75,
        color: "#d1d",
    },
    AHU_3_Sensor: {
        displayName: "AHU-3 Sensor",
        height: 1.75,
        color: "#d1d",
    }
};
var SCENE_OPTIONS = {
    sceneSnapId: '5b8aa75a-5322-49b9-947e-2dad226acda1',
    sceneModelId: '1d0176bc-ba87-4fee-9c35-bf2ee1dc4386',
    plugins: {
        stats: {
            panel: 'ums'
        }
    }
};
var container = document.getElementById('viewer3d');
var viewer = new snaploader.Viewer3d(container, SCENE_OPTIONS);
// Create a snaploader.ui.ProjectorOverlay, which is responsible for updating
// the position of overlaid DOM elements based on the current camera projection.
var overlay = new snaploader.ui.ProjectorOverlay(viewer);
// DOM elements are attached to 3D objects (nodes) within the scene. Therefore,
// we must wait for the scene to finish loading before we add any DOM elements
// to the overlay.
viewer.addListener('sceneLoaded', function () {
    // sceneScale allows us to convert from metres to units used within a
    // Snaploader scene.
    var sceneScale = viewer.sceneScale;
    for (var _i = 0, _a = Object.keys(NODES); _i < _a.length; _i++) {
        var nodeName = _a[_i];
        var nodeConfig = NODES[nodeName];
        var displayNameSpan = document.createElement('span');
        displayNameSpan.innerText = nodeConfig.displayName;
        displayNameSpan.style.color = nodeConfig.color;
        // We add a DOM element and associate it with a node in the scene, via
        // the nodes name. Additionally, we specify an (optional) offset from
        // the center of the node to the center of the DOM element.
        overlay.addChild(displayNameSpan, nodeName, { x: 0, y: nodeConfig.height * sceneScale, z: 0 });
    }
    // When we constructed the overlay we associated it with a Viewer3d. So
    // the overlay knows where to inject itself in the DOM, we just tell it to
    // show().
    overlay.show();
});
// In order to update the position of the DOM elements as the camera moves, we
// must tell the overlay to update. The simplest way to do this is in response
// to the viewer's 'rendered' event.
viewer.addListener('rendered', function () {
    overlay.update();
});
