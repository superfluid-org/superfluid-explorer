import {BasePage} from "../BasePage";

//Element selectors
const PROTOCOL_LINK = "[data-cy=protocol-link]"
const TERMS_LINK = "[data-cy=terms-of-use-link]"
const PRIVACY_LINK = "[data-cy=privacy-policy-link]"
const LOADING_SPINNER = "[data-cy=loading-spinner]"
const ADDRESS_LINKS = "[data-cy=account-address]"
const TOKEN_LINKS = "[data-cy=token-link]"
const TOTAL_STREAMED = "[data-cy=total-streamed]"
const NETWORK_RIGHT_ARROW = "[data-testid=KeyboardArrowRightIcon]"
const TOKENS_BUTTON = "[data-cy=token-page-button]"

//Links
const TERMS_OF_USE_LINK = "https://www.superfluid.finance/termsofuse/"
const PRIVACY_POLICY_LINK = "https://www.iubenda.com/privacy-policy/34415583/legal"
const SUPERFLUID_PROTOCOL_LINK = "https://docs.superfluid.finance/superfluid/protocol-overview/what-is-superfluid"

export class LandingPage extends BasePage {

  static latestStreamsAreVisible(network: string) {
    this.doesNotExist(LOADING_SPINNER)
    this.hasAttributeWithValue("[data-cy=" + network + "-landing-button]", "aria-selected", "true")
    this.hasLength(ADDRESS_LINKS, 20)
    this.hasLength(TOTAL_STREAMED, 10)
    this.hasLength(TOKEN_LINKS, 10)
  }

  static openPage(page: string) {
    switch (page) {
      case "terms of use": {
        cy.visit(TERMS_OF_USE_LINK)
        break;
      }
      case "superfluid protocol": {
        cy.visit(SUPERFLUID_PROTOCOL_LINK)
        break;
      }
      case "privacy policy": {
        cy.visit(PRIVACY_POLICY_LINK)
        break;
      }
      case "landing" : {
        cy.visit("/")
        break;
      }
      case "tokens" : {
        cy.visit("/supertokens")
        break;
      }
      case "protocol" : {
        cy.visit("/protocol")
        break;
      }
      default: {
        throw Error("Page not defined : " + page)
      }
    }
  }

  static openDataPage(page: string, network: string) {
    switch (page) {
      case "static balance account": {
        cy.fixture("accountData").then(fixture => {
          cy.visit("/" + network + "/accounts/" + fixture[network].address)
        })
        break;
      }
      case "ongoing streams account": {
        cy.fixture("commonData").then(fixture => {
          cy.visit("/" + network + "/accounts/" + fixture.ongoingStreamsAccount)
        })
        break;
      }
      case "listed token": {
        cy.fixture("tokenData").then(fixture => {
          cy.visit("/" + network + "/supertokens/" + fixture[network].address)
        })
        break;
      }
      case "ended stream": {
        cy.fixture("streamData").then(fixture => {
          cy.visit("/" + network + "/streams/" + fixture[network].hash)
        })
        break;
      }
      case "super app": {
        cy.fixture("accountData").then(fixture => {
          cy.visit("/" + network + "/accounts/" + fixture[network].superApp.address)
        })
        break;
      }
      case "index": {
        cy.fixture("accountData").then(fixture => {
          cy.visit("/" + network + "/indexes/" + fixture[network].superApp.indexes.publications[0].hash)
        })
        break;
      }
      case "index subscription": {
        cy.fixture("accountData").then(fixture => {
          cy.visit("/" + network + "/index-subscriptions/" + fixture[network].superApp.indexes.publications[0].details.subscriptions[0].details.hash)
        })
        break;
      }
      case "balance account for filtering": {
        cy.fixture("filteringData").then(fixture => {
          cy.visit("/" + network + "/accounts/" + fixture[network].address)
        })
        break;
      }
      case "regular token": {
        cy.fixture("tokenData").then(fixture => {
          cy.visit("/" + network + "/supertokens/" + fixture[network].regularTokenAddress)
        })
        break;
      }
      default: {
        throw Error("Page not defined : " + page)
      }
    }
  }

  static clickHyperlink(link: string) {
    switch (link) {
      case "terms of use": {
        this.click(TERMS_LINK)
        break;
      }
      case "superfluid protocol": {
        this.click(PROTOCOL_LINK)
        break;
      }
      case "privacy policy": {
        this.click(PRIVACY_LINK)
        break;
      }
      case "landing" : {
        cy.visit("/")
        break;
      }
      default: {
        throw Error("Page not defined : " + link)
      }
    }
  }

  static validateLinkHref(link: string) {
    switch (link) {
      case "terms of use": {
        this.hasAttributeWithValue(TERMS_LINK, "href", TERMS_OF_USE_LINK)
        break;
      }
      case "superfluid protocol": {
        this.hasAttributeWithValue(PROTOCOL_LINK, "href", SUPERFLUID_PROTOCOL_LINK)
        break;
      }
      case "privacy policy": {
        this.hasAttributeWithValue(PRIVACY_LINK, "href", PRIVACY_POLICY_LINK)
        break;
      }
      default: {
        throw Error("Page not defined : " + link)
      }
    }
  }

  static switchLatestStreamNetwork(network: string) {
    this.click("[data-cy=" + network + "-landing-button]")
    this.hasAttributeWithValue("[data-cy=" + network + "-landing-button]", "aria-selected", "true")
    this.hasLength(ADDRESS_LINKS, 20)
    this.hasLength(TOTAL_STREAMED, 10)
    this.hasLength(TOKEN_LINKS, 10)
  }

  static validateLatestStreamHyperlinks(network: string) {
    cy.get(ADDRESS_LINKS).should("have.attr", "href").and("contain", network + "/accounts/")
    cy.get(TOKEN_LINKS).should("have.attr", "href").and("contain", network + "/supertokens/")
  }

  static validateStreamedValueDecimalPlaces(num: number) {
    cy.get(TOTAL_STREAMED).each(el => {
      let decimalCount
      if (el.text().split(".")[1] === undefined) {
        decimalCount = 0
      } else {
        decimalCount = el.text().split(".")[1].length
      }
      expect(decimalCount).to.lte(num)
    })
  }

  static openTokenGovernancePage() {
    this.click(TOKENS_BUTTON)
  }
}
