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

Cypress.Commands.add("openSettings", () => {
  cy.get(`[data-cy="settings-cog"]`).click();
});

Cypress.Commands.add("closeSettings", () => {
  cy.get(`[data-cy="settings-close"]`).click();
});

Cypress.Commands.add("exists", (...selectors) => {
  return cy.window().then((win) => {
    const elem = win.document.querySelector(selectors.join(","));

    return elem ? true : false;
  });
});

Cypress.Commands.add("toggleTestnet", (network, setTo) => {
  cy.openSettings();

  const elem = cy.get(`[data-cy="testnet-switch-${network}"]`);

  if (setTo) {
    elem.then(($switch) => {
      if ($switch.attr(`[data-cy="${setTo}]`)) {
        return;
      }

      $switch.click();
    });
  } else {
    elem.click();
  }

  cy.closeSettings();
});
