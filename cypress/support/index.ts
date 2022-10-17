export {};

export type TestNet = "avalanche-fuji" | "goerli" | "mumbai";

declare global {
  namespace Cypress {
    interface Chainable {
      toggleTestnet(network: TestNet, setTo?: "on" | "off"): Chainable<Element>;
      openSettings(): Chainable<Element>;
      closeSettings(): Chainable<Element>;
    }
  }
}
