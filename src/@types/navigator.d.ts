/* eslint-disable @typescript-eslint/no-empty-interface */
export {}
// WICG Spec: https://wicg.github.io/ua-client-hints
declare global {
  interface Navigator {
    standalone?: boolean
    userAgentData?: NavigatorUAData
  }
}

declare interface WorkerNavigator extends NavigatorUA {}

// https://wicg.github.io/ua-client-hints/#navigatorua
declare interface NavigatorUA {
  readonly userAgentData?: NavigatorUAData
}

// https://wicg.github.io/ua-client-hints/#dictdef-navigatoruabrandversion
interface NavigatorUABrandVersion {
  readonly brand: string
  readonly version: string
}

// https://wicg.github.io/ua-client-hints/#dictdef-uadatavalues
interface UADataValues {
  readonly brands?: NavigatorUABrandVersion[]
  readonly mobile?: boolean
  readonly platform?: string
  readonly architecture?: string
  readonly bitness?: string
  readonly model?: string
  readonly platformVersion?: string
  /** @deprecated in favour of fullVersionList */
  readonly uaFullVersion?: string
  readonly fullVersionList?: NavigatorUABrandVersion[]
  readonly wow64?: boolean
}

// https://wicg.github.io/ua-client-hints/#dictdef-ualowentropyjson
interface UALowEntropyJSON {
  readonly brands: NavigatorUABrandVersion[]
  readonly mobile: boolean
  readonly platform: string
}

// https://wicg.github.io/ua-client-hints/#navigatoruadata
interface NavigatorUAData extends UALowEntropyJSON {
  getHighEntropyValues(hints: string[]): Promise<UADataValues>
  toJSON(): UALowEntropyJSON
}

interface NavigatorStandAlone {
  standalone?: boolean
}
