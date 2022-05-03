export class BasePage {
  static click(selector: string) {
    cy.get(selector).click();
  }

  static clickVisible(selector: string) {
    cy.get(selector).filter(":visible").click();
  }

  static clickFirstVisible(selector: string) {
    cy.get(selector).filter(":visible").first().click();
  }

  static scrollToAndClick(selector: string) {
    cy.get(selector).scrollIntoView().click();
  }

  static type(selector: string, text: string) {
    cy.get(selector).filter(":visible").type(text, {delay: 0});
  }

  static hasText(selector: string, text?: string) {
    cy.get(selector).filter(":visible").should("have.text", text);
  }

  static scrollToAndhasText(selector: string, text: string) {
    cy.get(selector).scrollIntoView().should("have.text", text);
  }

  static doesNotExist(selector: string) {
    cy.get(selector).should("not.exist");
  }

  static exists(selector: string) {
    cy.get(selector).should("exist");
  }

  static isVisible(selector: string) {
    cy.get(selector).should("be.visible");
  }

  static isNotVisible(selector: string) {
    cy.get(selector).should("not.be.visible");
  }

  static selectOption(selector: string, option: string) {
    cy.get(selector).filter(":visible").select(option);
  }

  static validatePageUrl(appendix: string) {
    cy.url().should("eq", Cypress.config().baseUrl + appendix);
  }

  static containsValue(selector: string, value: string) {
    cy.get(selector).should("contain.value", value);
  }

  static containsText(selector: string, text: string) {
    cy.get(selector).should("contain.text", text);
  }

  static contains(selector: string, number: string) {
    cy.get(selector).should("contain", number);
  }

  static clear(selector: string) {
    cy.get(selector).filter(":visible").clear();
  }

  static visitBasePage() {
    cy.visit("/");
  }

  static hasLength(selector: string, length: number) {
    cy.get(selector).should("have.length", length)
  }

  static hasAttributeWithValue(selector: string, attribute: string, value: string) {
    cy.get(selector).should("have.attr", attribute, value);
  }

  static notContains(text: string) {
    cy.contains(text).should("not.exist")
  }

  static wasOpenFunctionCalled() {
    cy.get("@newTab").should("be.called");
  }

  static replaceSpacesAndAssertText(selector: string, text: string, index = 0) {
    cy.get(selector).eq(index).invoke("text").invoke("replace", /\u00a0/g, ' ').should("eq", text)
  }

  static getShortenedAddress(address: string, chars = 6) {
    return address.slice(0, chars + 2) + "..." + address.slice(address.length - chars, address.length)
  }
}
