import {BasePage} from "../BasePage";

const NETWORK_RIGHT_ARROW = "[data-testid=KeyboardArrowRightIcon]"
const LOADING_SPINNER = ".MuiCircularProgress-svg"
const SUPER_TOKENS_NAME = "[data-cy=token-name] > *"
const SUPER_TOKENS_SYMBOL = "[data-cy=token-symbol] span"
const SUPER_TOKENS_ADDRESS = "[data-cy=token-address]"
const FILTER_BUTTON = "[data-testid=FilterListIcon]"
const TOKEN_NAME_FILTER = "[data-cy=filter-name-input] input"
const TOKEN_SYMBOL_FILTER = "[data-cy=filter-symbol-input] input"
const FILTER_RESET_BUTTON = "[data-cy=reset-filter]"
const FILTER_CLOSE_BUTTON = "[data-cy=close-filter]"
const FILTER_LISTED_YES_BUTTON = "[data-cy=filter-listed-yes]"
const FILTER_LISTED_NO_BUTTON = "[data-cy=filter-listed-no]"
const LISTED_TOKEN_ROW = "[data-cy=token-listed-status]"
const CHIP_NAME = "[data-cy=chip-name]"
const CHIP_SYMBOL = "[data-cy=chip-symbol]"
const CHIP_LISTED_STATUS = "[data-cy=chip-listed-status]"
const FILTERING_CHIP = ".css-nj19ab-MuiStack-root > .MuiButtonBase-root"
const CANCEL_ICON = "[data-testid=CancelIcon]"

export class TokenGovernancePage extends BasePage {

  static switchNetworkAndValidateTokens(network: string) {
    this.isNotVisible(LOADING_SPINNER)
    this.click("[data-cy=" + network + "-landing-button]")
    this.hasAttributeWithValue("[data-cy=" + network + "-landing-button]", "aria-selected", "true")
    this.isNotVisible(LOADING_SPINNER)
    this.hasLength(SUPER_TOKENS_NAME, 10)
    this.hasLength(SUPER_TOKENS_SYMBOL, 10)
    this.hasLength(SUPER_TOKENS_ADDRESS, 10)
  }

  static filterByTokenName(network: string) {
    cy.fixture("supertokensData").then(supertokens => {
      this.click(FILTER_BUTTON)
      this.type(TOKEN_NAME_FILTER, supertokens[network].TokenName)
      this.hasText(CHIP_NAME, supertokens[network].TokenName)
      this.click(FILTER_CLOSE_BUTTON)
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
      cy.get(SUPER_TOKENS_NAME).each((
        $el) => {
        cy.wrap($el.text()).should("contain", supertokens[network].TokenName)
      })
    })
  }

  static filterByTestTokenSymbolOn(network: string) {
    cy.fixture("supertokensData").then(supertokens => {
      this.click(FILTER_BUTTON)
      this.type(TOKEN_SYMBOL_FILTER, supertokens[network].TokenSymbol)
      this.hasText(CHIP_SYMBOL, supertokens[network].TokenSymbol)
      this.click(FILTER_CLOSE_BUTTON)
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
      cy.get(SUPER_TOKENS_SYMBOL).each((
        $el) => {
        cy.wrap($el.text()).should('contain', supertokens[network].TokenSymbol)
      })
    })
  }

  static filterByListed() {
    this.click(FILTER_BUTTON)
    this.click(FILTER_LISTED_YES_BUTTON)
    this.hasText(CHIP_LISTED_STATUS, "Yes")
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    cy.get(LISTED_TOKEN_ROW).each((
      $el) => {
      cy.wrap($el.text()).should('contain', "Yes")
    })
  }

  static filterByNotListed() {
    this.click(FILTER_BUTTON)
    this.click(FILTER_LISTED_NO_BUTTON)
    this.hasText(CHIP_LISTED_STATUS, "No")
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    cy.get(LISTED_TOKEN_ROW).each((
      $el) => {
      cy.wrap($el.text()).should('contain', "No")
    })
  }

  static resetFilter() {
    this.click(FILTER_BUTTON)
    this.click(FILTER_RESET_BUTTON)
    this.doesNotExist(FILTERING_CHIP)
  }

}
