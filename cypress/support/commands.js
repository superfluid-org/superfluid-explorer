// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("toggleSettings", () => {
  cy.get(`[data-cy="settings-cog"]`).click();
});

Cypress.Commands.add("toggleTestNet", (network, setTo) => {
  cy.toggleSettings();

  if (setTo) {
    const elem = cy
      .get(`[data-cy="testnet-switch-${network}"]`)
      .get(`[data-cy-state="$${setTo}"]`);

    if (elem) {
      return;
    }
  }

  cy.get(`[data-cy="network-switch-${network}"]`).click();
});
