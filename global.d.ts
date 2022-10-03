export {};

declare global {
  interface Window {
    Matomo?: {
      initialized: boolean;
    };
  }
}
