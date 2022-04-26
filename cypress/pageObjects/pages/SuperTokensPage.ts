import {BasePage} from "../BasePage";

//Temporary Selectors
const LOADING_SPINNER = ".MuiCircularProgress-svg"
const SUPER_TOKENS_NAME = ".MuiTableBody-root > :nth-child(1) > :nth-child(1) > .MuiTypography-root"
const SUPER_TOKENS_SYMBOL = ":nth-child(1) > :nth-child(2) > .MuiTypography-root > .MuiButtonBase-root > .MuiChip-label"
const SUPER_TOKENS_ADDRESS = ".MuiTableBody-root > :nth-child(1) > :nth-child(4)"
const OPTIMISM_BUTTON = "[data-cy=optimism-mainnet-landing-button]"
const FILTER_BUTTON = "[data-testid=FilterListIcon]"
const TOKEN_NAME_FILTER = ":nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
const TOKEN_SYMBOL_FILTER = ":nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
const RESET_BUTTON = ".css-10v7adq-MuiStack-root > [type=button]"
const CLOSE_BUTTON = "[type=submit]"
const BUTTON_YES = "[value=0]"
const BUTTON_NO = "[value=1]"
const LISTED_TOKEN_ROW = ".MuiTableBody-root > :nth-child(1) > :nth-child(3)"

export class SuperTokensPage extends BasePage {

  static openTokensPage() {
    cy.visit('/super-tokens')
  }

  static validateSuperTokens(network: string) {
    cy.fixture("supertokensData").then(supertokens => {
      this.isNotVisible(LOADING_SPINNER)
      this.hasText(SUPER_TOKENS_NAME, supertokens[network].TokenName)
      this.hasText(SUPER_TOKENS_SYMBOL, supertokens[network].TokenSymbol)
      this.hasText(SUPER_TOKENS_ADDRESS, supertokens[network].TokenAddress)
    })
  }

  static switchNetworks(network: string) {
    cy.fixture("supertokensData").then(supertokens => {
      this.click(OPTIMISM_BUTTON)
      this.isNotVisible(LOADING_SPINNER)
      this.hasText(SUPER_TOKENS_NAME, supertokens[network].TokenName)
      this.hasText(SUPER_TOKENS_SYMBOL, supertokens[network].TokenSymbol)
      this.hasText(SUPER_TOKENS_ADDRESS, supertokens[network].TokenAddress)
    })
  }

  static filterByTokenName(network: string){
    cy.fixture("supertokensData").then(supertokens => {
      this.click(FILTER_BUTTON)
      this.type(TOKEN_NAME_FILTER, supertokens[network].TokenName)
      this.click(CLOSE_BUTTON)
      this.isNotVisible(LOADING_SPINNER)
      cy.get(SUPER_TOKENS_NAME).each((
        $el) => {
        expect($el.text()).to.be.equal(supertokens[network].TokenName)
      })

    })
  }

  static filterByTokenSymbol(network: string){
    cy.fixture("supertokensData").then(supertokens => {
      this.click(FILTER_BUTTON)
      this.type(TOKEN_SYMBOL_FILTER, supertokens[network].TokenSymbol)
      this.click(CLOSE_BUTTON)
      this.isNotVisible(LOADING_SPINNER)
      cy.get(SUPER_TOKENS_SYMBOL).each((
        $el) => {
        expect($el.text()).to.be.equal(supertokens[network].TokenSymbol)
      })
    })
  }

  static filterByListed(){
    this.click(FILTER_BUTTON)
    this.click(BUTTON_YES)
    this.click(CLOSE_BUTTON)
    cy.wait(1000)
    cy.get(LISTED_TOKEN_ROW).each((
      $el) => {
      expect($el.text()).to.be.equal("Yes")
    })
  }

  static filterByNotListed() {
    this.click(FILTER_BUTTON)
    this.click(BUTTON_NO)
    this.click(CLOSE_BUTTON)
    cy.wait(1000)
    cy.get(LISTED_TOKEN_ROW).each((
      $el) => {
      expect($el.text()).to.be.equal("No")
    })
  }

  static resetFilter(){
    this.click(FILTER_BUTTON)
    this.click(RESET_BUTTON)
    this.click(CLOSE_BUTTON)
  }
}
