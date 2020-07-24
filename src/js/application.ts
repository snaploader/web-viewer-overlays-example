const NODES = {
	VAV_1: {
		displayName: 'VAV-1',
		height: 1.5,
	},
	VAV_2: {
		displayName: 'VAV-2',
		height: 1.5,
	},
	VAV_3: {
		displayName: 'VAV-3',
		height: 1.5,
	},
	VAV_4: {
		displayName: 'VAV-4',
		height: 1.5,
	},
	VAV_5: {
		displayName: 'VAV-5',
		height: 1.5,
	},
	VAV_6: {
		displayName: 'VAV-6',
		height: 1.5,
	},
	VAV_7: {
		displayName: 'VAV-7',
		height: 1.5,
	},
	VAV_8: {
		displayName: 'VAV-8',
		height: 1.5,
	},
	VAV_9: {
		displayName: 'VAV-9',
		height: 1.5,
	},
}


const SCENE_OPTIONS = {
	sceneSnapId: '5b8aa75a-5322-49b9-947e-2dad226acda1',
	sceneModelId: '1d0176bc-ba87-4fee-9c35-bf2ee1dc4386'
}

const container = document.getElementById('viewer3d')
const viewer = new snaploader.Viewer3d(container!, SCENE_OPTIONS)

// Create a snaploader.ui.ProjectorOverlay, which is responsible for updating
// the position of overlaid DOM elements based on the current camera projection.

const overlay = new snaploader.ui.ProjectorOverlay(viewer)

// DOM elements are attached to 3D objects (nodes) within the scene. Therefore,
// we must wait for the scene to finish loading before we add any DOM elements
// to the overlay.

viewer.addListener('sceneLoaded', () => {
	// sceneScale allows us to convert from metres to units used within a
	// Snaploader scene.

	const sceneScale = viewer.sceneScale!

	const developerStack = viewer.getPlugin('developerStack')
	const nodeVisibilityMap: {[nodeName: string]: boolean} = {}

	for (const nodeName of Object.keys(NODES)) {
		const nodeConfig = NODES[nodeName as keyof typeof NODES]

		const displayNameSpan = document.createElement('span')
		displayNameSpan.innerText = nodeConfig.displayName
		displayNameSpan.style.display = 'inline-block'
		displayNameSpan.style.boxShadow = 'rgba(0, 0, 0, 0.25) 2px 2px'
		displayNameSpan.style.borderRadius = '4px'
		displayNameSpan.style.background = 'rgba(255, 255, 255, 0.9)'
		displayNameSpan.style.padding = '0 10px'
		displayNameSpan.style.fontSize = '14px'
		displayNameSpan.style.lineHeight = '30px'
		displayNameSpan.style.height = '26px'
		displayNameSpan.style.color = '#4d1'
		displayNameSpan.style.fontWeight = '100'

		nodeVisibilityMap[nodeName] = true

		displayNameSpan.addEventListener('click', () => {
			const visibility = !nodeVisibilityMap[nodeName]
			nodeVisibilityMap[nodeName] = visibility
			developerStack?.setNodeVisibility(nodeName, visibility)
			displayNameSpan.style.color = visibility ? '#2c1' : '#c10'
		})

		// We add a DOM element and associate it with a node in the scene, via
		// the nodes name. Additionally, we specify an (optional) offset from
		// the center of the node to the center of the DOM element.

		overlay.addChild(displayNameSpan, nodeName, {x: 0, y: nodeConfig.height * sceneScale, z: 0})
	}

	// When we constructed the overlay we associated it with a Viewer3d. So
	// the overlay knows where to inject itself in the DOM, we just tell it to
	// show().

	overlay.show()
})

// In order to update the position of the DOM elements as the camera moves, we
// must tell the overlay to update. The simplest way to do this is in response
// to the viewer's 'rendered' event.

viewer.addListener('rendered', () => {
	overlay.update()
})
