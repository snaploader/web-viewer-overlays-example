import { EventDispatcher } from './events/EventDispatcher';
import { Plugin } from './plugins/Plugin';
import { DeveloperStack } from './plugins/DeveloperStack';
export interface Options {
    [key: string]: any;
}
export interface SceneOptions extends Options {
}
declare type SimpleEventArgs = [Viewer3d];
interface EventArgMap {
    fullscreenDisabled: SimpleEventArgs;
    fullscreenEnabled: SimpleEventArgs;
    fullscreenError: SimpleEventArgs;
    rendered: SimpleEventArgs;
    sceneLoaded: SimpleEventArgs;
    sceneVisible: SimpleEventArgs;
    sceneUpdated: SimpleEventArgs;
}
interface PluginMap {
    [key: string]: Plugin;
    developerStack: DeveloperStack;
}
interface Viewer3d extends EventDispatcher<EventArgMap> {
    readonly containerElement: null | HTMLElement;
    readonly sceneScale: null | number;
    readonly sceneSnapId: null | string;
    readonly sceneModelId: null | string;
    /**
     * You must call this method if you've dynamically resized the viewer's DOM
     * element.
     *
     * NOTE: Viewer3d tracks regular window resize events (i.e. CSS reflow)
     * itself. You only need to call this manually if you're dynamically
     * resizing the viewer (i.e. from JavaScript).
     */
    onResize(): void;
    /**
     * Sets whether or not the viewer’s controls (zoom buttons etc.) are
     * visible.
     *
     * @param visible
     */
    setControlsVisible(visible: boolean): void;
    /**
     * Sets whether the T&Cs button is displayed in the viewer.
     *
     * WARNING: The disclaimer includes important legal info. If you hide the
     * disclaimer you must show this info somewhere else in your UI.
     *
     * @param visible
     */
    setDisclaimerVisible(visible: boolean): void;
    /**
     * Detaches the viewer from the DOM.
     */
    detach(): void;
    /**
     * Attaches the viewer as a child of the specified container, detaching it
     * from the previous container element where necessary.
     *
     * @param newContainerElement
     */
    attach(newContainerElement: HTMLElement): void;
    /**
     * Creates a screenshot of the viewer; and typically prompts the user as to
     * where they'd like to save it.
     */
    saveScreenshot(): void;
    /**
     * Prompts the user to save a copy of the floorplan.
     *
     * The user will be given the opportunity to provide an email address. A
     * link to the model (including any changes they've made to it) will be
     * emailed to them.
     *
     * Typically used in conjunction with the Furniture Suite.
     */
    showSaveDialog(): void;
    /**
     * Indicates whether or not a plugin is presently enabled.
     *
     * Some plugins (such as the Furniture Suite) may be loaded without but
     * aren't always enabled. Instead they're enabled/disabled in response to
     * user interaction.
     *
     * @param pluginName
     */
    isPluginEnabled(pluginName: string): boolean;
    /**
     * Returns a reference to a loaded plugin.
     *
     * @param pluginName
     */
    getPlugin<N extends keyof PluginMap>(pluginName: N): null | PluginMap[N];
    /**
     * Requests that the browser to make the web viewer element full screen
     */
    requestFullscreen(): boolean;
    /**
     * Exits full-screen mode (unless a request to enter full-screen is
     * currently in progress)
     */
    exitFullscreen(): void;
    /**
     * Zooms the camera in slightly.
     */
    zoomIn(): void;
    /**
     * Zooms the camera out slightly.
     */
    zoomOut(): void;
    /**
     * Sets the web viewer’s clear color i.e. 3D scene background color.
     *
     * @param color
     */
    setClearColor(color: string): void;
    /**
     * Toggles the primary pointer action from orbiting to panning.
     *
     * By default left mouse (or single touch) is orbit, whilst right mouse (or the obscure triple touch) is pan.
     *
     * Calling this method without providing an argument will toggle between the two schemes.
     */
    reversePointerControlScheme(reverse?: boolean): void;
    /**
     * Instructs the viewer to stop presenting the current scene (if there is
     * one), and instead download and display a new scene, as defined by the
     * provided sceneOptions.
     *
     * Only returns false if WebGL is not supported in the user's browser,
     * otherwise true.
     *
     * @param sceneOptions
     */
    loadScene(sceneOptions: SceneOptions): boolean;
}
declare class Viewer3d {
    constructor(container: HTMLElement, viewerOptions?: Options);
    static VERSION_MAJOR: number;
    static VERSION_MINOR: number;
    static VERSION_REVISION: number;
    static viewerUrl: {
        (): string;
        (snapId: string, modelId: string): string;
    };
}
export { Viewer3d };
