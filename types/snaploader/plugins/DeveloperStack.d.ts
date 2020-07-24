import { EventDispatcher } from '../events/EventDispatcher'
import { Color } from '../utils/color'
import { Plugin } from './Plugin'
import { Viewer3d } from '../Viewer3d'

interface EventArgMap {
	/** [viewer, nodeName] */
	currentInteractiveNodeChanged: [Viewer3d, string | null]

	/** [viewer, nodeName] */
	interactiveNodeTriggered: [Viewer3d, string]
}

interface InteractiveNodeOptions {
	interactionHighlightColor?: Color
	interactionDefaultHighlighted?: boolean
}

interface Options {
	interactiveNodes?: {[nodeName: string]: InteractiveNodeOptions}
}

export interface DeveloperStack extends Plugin, EventDispatcher<EventArgMap> {
	patchOptions(option: Options): void

	/**
	 * Sets an interactive node's visibility i.e. hides/shows a node.
	 *
	 * Returns false if no interactive node corresponding with nodeName exists in the current scene, otherwise true.
	 *
	 * @param nodeName
	 * @param visible
	 */
	setNodeVisibility(nodeName: string, visible: boolean): boolean
}
