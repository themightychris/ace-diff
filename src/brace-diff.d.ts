import { Editor } from 'brace'

export declare class AceDiff {
  constructor(opts: AceDiffOptions)

  getEditors() : { left : Editor, right : Editor }
  setOptions(opts : AceDiffOptions) : void
  getNumDiffs() : number
  diff() : void
  destroy() : void
}

interface AceDiffOptions {
  mode: string
  theme?: string
  diffGranularity?: "specific" | "broad"
  showDiffs?: boolean
  showConnectors?: boolean
  maxDiffs?: number
  left?: AceDiffEditorOptions
  right?: AceDiffEditorOptions
  classes?: AceDiffClassOptions
}

interface AceDiffEditorOptions {
  id?: string | HTMLElement
  content?: string
  mode?: string
  theme?: string
  editable?: boolean
  copyLinkEnabled?: boolean
}

interface AceDiffClassOptions {
  gutterID? : string
  gutterEl? : HTMLElement
  diff? : string
  connector? : string
  newCodeConnectorLink? : string
  newCodeConnectorLinkContent? : string
  deletedCodeConnectorLink? : string
  copyRightContainer? : string
  copyLeftContainer? : string
}