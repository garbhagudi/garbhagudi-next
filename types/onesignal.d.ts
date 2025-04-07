// types/onesignal.d.ts
export {};

declare global {
  interface Window {
    OneSignal: OneSignalStub | OneSignalAPI | undefined;
  }

  type OneSignalStub = Array<() => void>;

  interface OneSignalAPI {
    push(callback: () => void): void;
    init(options: OneSignalInitOptions): void;
    // optionally add: showSlidedownPrompt, on, isPushNotificationsEnabled, etc.
  }

  interface OneSignalInitOptions {
    appId: string;
    safari_web_id?: string;
    notifyButton?: OneSignalNotifyButtonOptions;
    allowLocalhostAsSecureOrigin?: boolean;
  }

  interface OneSignalNotifyButtonOptions {
    enable: boolean;
    position?: 'bottom-left' | 'bottom-right';
    // Add other optional properties here if needed
  }
}
