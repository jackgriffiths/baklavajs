import type { AbstractNodeConstructor } from "./node";
import type { NodeInterface } from "./nodeInterface";

export interface IAddConnectionEventData {
    from: NodeInterface;
    to: NodeInterface;
}

export interface IRegisterNodeTypeOptions {
    /** Category of the node. Can be used to structure the node palette view */
    category?: string;
    /** Set the title of the node in the node palette. Will use the `title` property of the node when not specified */
    title?: string;
    /**
     * If `true`, the node stays registered (so existing graphs keep working) but is
     * hidden from the node palette and the add-node context menu. Useful for
     * deprecating a node without breaking backwards compatibility.
     */
    hidden?: boolean;
}

export interface IAddNodeTypeEventData {
    type: AbstractNodeConstructor;
    options?: IRegisterNodeTypeOptions;
}

export interface INodeUpdateEventData {
    type: "input" | "output";
    name: string;
    intf: NodeInterface;
}
