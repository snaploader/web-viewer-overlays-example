import { Viewer3d } from '../Viewer3d';
interface Point3 {
    x: number;
    y: number;
    z: number;
}
interface ProjectorOverlay {
    /**
     * Shows the projector overlay (and its children) on top of the associated
     * viewer.
     */
    show(): void;
    /**
     * Hides the projector overlay (and its children).
     */
    hide(): void;
    /**
     * Adds the provided DOM element as a child of this projector overlay, and
     * associates it with a node in the scene.
     *
     * Optionally, a 3D point may be provided to facilitate offsetting the DOM
     * element from the node's center in the 3D scene.
     *
     * Will return false if no node can be found matching the provided name,
     * otherwise true.
     *
     * @param domElement
     * @param nodeName
     * @param overlayOffset
     */
    addChild(domElement: HTMLElement, nodeName: string, overlayOffset?: Point3): boolean;
    /**
     * Removes the specified child from the overlay.
     *
     * @param domElement
     */
    removeChild(domElement: HTMLElement): void;
    /**
     * Updates the position (and visibility) of each child based on the current
     * scene state.
     *
     * Typically, you'll want to call this each time the viewer renders a frame
     * e.g. in response to the viewer's 'rendered' event.
     *
     * Children (DOM elements) are subject to z-sorting and will be added and
     * removed from the projector overlay's DOM container frequently.
     *
     * Additionally, if the viewer (camera) does not have a clear line of sight
     * to the 3D coordinates associated with a child, it will be given the CSS
     * class snaploader-v3d-projected-overlay-occluded. Otherwise, the child
     * will be given the CSS class snaploader-v3d-projected-overlay-unoccluded.
     * You may wish to use these classes in CSS selectors in order to
     * dynamically adjust your visuals.
     */
    update(): void;
}
declare class ProjectorOverlay {
    constructor(viewer: Viewer3d);
}
export { ProjectorOverlay };
