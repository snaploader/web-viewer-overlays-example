declare type EventListener<A extends any[]> = (...eventArguments: A) => (boolean | undefined | void);
declare type EventRemover = () => void;
export interface EventDispatcher<T extends {
    [P in keyof T]: any[];
}> {
    addListener<E extends keyof T>(eventName: E, listener: EventListener<T[E]>): EventRemover;
    removeListener<E extends keyof T>(eventName: E, listener: EventListener<T[E]>): void;
}
export {};
