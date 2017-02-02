// Type definitions for brace-diff
// Project: https://github.com/datanav/brace-diff
// Definitions by: Stephen Tsimidis <https://github.com/g0tsimid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Editor } from 'brace'

declare var out: typeof AceDiff
export = out

/**
 * An editor that contains two editor viewports and displays any changes that
 * exist between the two pieces of code.
 */
declare class AceDiff {
    constructor(opts: AceDiffOptions)

    /**
     * Return the Ace editor instances for the left and right editors.
     * @returns The left and right Ace editor instances.
     */
    getEditors(): { left: Editor, right: Editor }
    /**
     * Change options for the diff instance in-place. Note: certain things
     * used during the construction of the editor, like the classes, cannot
     * be overriden.
     */
    setOptions(opts: AceDiffOptions): void
    /**
     * Return the number of diffs currently being displayed.
     * @returns The number of diffs currently being displayed.
     */
    getNumDiffs(): number
    /**
     * Manually update the diff.
     */
    diff(): void
    /**
     * Destroy the AceDiff instance.
     */
    destroy(): void
}

interface AceDiffOptions {
    /**
     * The mode used by default for both Ace editors.
     * @example "ace/mode/javascript"
     */
    mode: string
    /**
     * The theme set by default for both Ace editors.
     * @example "ace/theme/monokai"
     */
    theme?: string
    /**
     * The level of granularity used for grouping diffs. Can be set to either
     * "specific" or "broad".
     */
    diffGranularity?: "specific" | "broad"
    /**
     * Whether or not the diffs are enabled. When false, everything is turned
     * off.
     */
    showDiffs?: boolean
    /**
     * Whether or not the gutter in the middle shows connectors visualizing
     * where the left and right changes map to one another.
     */
    showConnectors?: boolean
    /**
     * The maximum number of diffs that can be shown before diffing is
     * disabled altogether.
     */
    maxDiffs?: number
    /**
     * The editor options for the left editor.
     */
    left?: AceDiffEditorOptions
    /**
     * The editor options for the right editor.
     */
    right?: AceDiffEditorOptions
    /**
     * Options for configuring miscellaneous CSS classes used.
     */
    classes?: AceDiffClassOptions
}

interface AceDiffEditorOptions {
    /**
     * The ID of the element that will be used to generate the Ace editor.
     * Alternatively, the element can be passed in directly.
     */
    id?: string | HTMLElement
    /**
     * Code content that should appear in the editor.
     */
    content?: string
    /**
     * The Ace editor mode used for this editor.
     */
    mode?: string
    /**
     * The Ace editor theme used for this editor.
     */
    theme?: string
    /**
     * Whether the editor is enabled or not.
     */
    editable?: boolean
    /**
     * Whether the copy to right/left arrows should appear.
     */
    copyLinkEnabled?: boolean
}

interface AceDiffClassOptions {
    /**
     * The ID of the gutter element.
     */
    gutterID?: string
    /**
     * Instead of gutterID, the document element itself can be passed.
     */
    gutterEl?: HTMLElement
    /**
     * The class for a diff line on either editor.
     */
    diff?: string
    /**
     * The class for an SVG connector.
     */
    connector?: string
    /**
     * The class for the copy-to-right links.
     */
    newCodeConnectorLink?: string
    /**
     * The content of the copy-to-right links.
     */
    newCodeConnectorLinkContent?: string
    /**
     * The class for the copy-to-left links.
     */
    deletedCodeConnectorLink?: string
    /**
     * The content of the copy-to-right links.
     */
    deletedCodeConnectorLinkContent?: string
    /**
     * The class for a wrapper container containing the copy-to-right links.
     */
    copyRightContainer?: string
    /**
     * The class for a wrapper container containing the copy-to-left links.
     */
    copyLeftContainer?: string
}
