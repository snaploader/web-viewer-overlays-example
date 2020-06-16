export interface PluginOptions {
    [key: string]: any;
}
export interface Plugin {
    getPluginName(): string;
    patchOptions?(option: PluginOptions): void;
}
