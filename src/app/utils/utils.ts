export class CheckIsAvailable {
  static window = typeof window !== 'undefined'
  static gtm = () => Array.isArray(window?.dataLayer)
  static webEngage = () => typeof window?.webengage !== 'undefined'
  static navigator = CheckIsAvailable.window && !!window.navigator
  static navigatorUseragentData =
    CheckIsAvailable.navigator && !!window.navigator.userAgentData
  static share = () => typeof window?.navigator?.share !== 'undefined'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static map = () => typeof (window as any)?.maplibregl !== 'undefined'
  static indexedDB = () => CheckIsAvailable.window && !!window.indexedDB
  static standalone = CheckIsAvailable.navigator && 'standalone' in navigator
  static otpCredential = () => CheckIsAvailable.window && 'OTPCredential' in window
}
