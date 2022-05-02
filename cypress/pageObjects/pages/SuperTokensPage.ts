import {BasePage} from "../BasePage";

const TOKENS_BUTTON = 'a[href="/super-tokens"]'
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
const CHIP_SYMBOL ="[data-cy=chip-symbol]"
const CHIP_LISTED_STATUS = "[data-cy=chip-listed-status]"
const FILTERING_CHIP = ".css-nj19ab-MuiStack-root > .MuiButtonBase-root"
const CANCEL_ICON = "[data-testid=CancelIcon]"

export class SuperTokensPage extends BasePage {

  static openTokensPage() {
    this.click(TOKENS_BUTTON)
  }

  static switchLNetworkAndValidateTokens(network: string) {
    this.isNotVisible(LOADING_SPINNER)
    this.click(NETWORK_RIGHT_ARROW)
    this.click("[data-cy=" + network + "-landing-button]")
    this.hasAttributeWithValue("[data-cy=" + network + "-landing-button]", "aria-selected", "true")
    this.isNotVisible(LOADING_SPINNER)
    this.hasLength(SUPER_TOKENS_NAME, 10)
    this.hasLength(SUPER_TOKENS_SYMBOL, 10)
    this.hasLength(SUPER_TOKENS_ADDRESS, 10)
  }

  static filterByTokenName(network: string){
   // cy.get(SUPER_TOKENS_NAME).invoke("text".as("tokensName")
    cy.fixture("supertokensData").then(supertokens => {
      this.click(FILTER_BUTTON)
      this.type(TOKEN_NAME_FILTER, supertokens[network].TokenName)
      this.hasText(CHIP_NAME,supertokens[network].TokenName)
      this.click(FILTER_CLOSE_BUTTON)
      cy.wait(1000) //It's the only way I was able to make it work
      cy.get(SUPER_TOKENS_NAME).each((
        $el) => {
        expect($el.text()).contains(supertokens[network].TokenName)
      })
    })
  }

  static filterByTokenSymbol(network: string){
   // cy.get(SUPER_TOKENS_SYMBOL).as("tokensSymbol")
    cy.fixture("supertokensData").then(supertokens => {
      this.click(FILTER_BUTTON)
      this.type(TOKEN_SYMBOL_FILTER, supertokens[network].TokenSymbol)
      this.hasText(CHIP_SYMBOL,supertokens[network].TokenSymbol)
      this.click(FILTER_CLOSE_BUTTON)
      cy.wait(1000)
      cy.get(SUPER_TOKENS_SYMBOL).each((
        $el) => {
        expect($el.text()).contains(supertokens[network].TokenSymbol)
      })
    })
  }

  static filterByListed(){
    //cy.get(LISTED_TOKEN_ROW).as("listedToken")
    this.click(FILTER_BUTTON)
    this.click(FILTER_LISTED_YES_BUTTON)
    this.hasText(CHIP_LISTED_STATUS,"Yes")
    this.click(FILTER_CLOSE_BUTTON)
    cy.wait(1000)
    cy.get(LISTED_TOKEN_ROW).each((
      $el) => {
      expect($el.text()).to.be.equal("Yes")
   })
  }

  static filterByNotListed() {
   // cy.get(LISTED_TOKEN_ROW).as("listedToken")
    this.click(FILTER_BUTTON)
    this.click(FILTER_LISTED_NO_BUTTON)
    this.hasText(CHIP_LISTED_STATUS,"No")
    this.click(FILTER_CLOSE_BUTTON)
    cy.wait(1000)
    cy.get(LISTED_TOKEN_ROW).each((
      $el) => {
      expect($el.text()).to.be.equal("No")
    })
  }

  static resetFilter() {
    this.click(FILTER_BUTTON)
    this.click(FILTER_RESET_BUTTON)
    this.doesNotExist(FILTERING_CHIP)
  }

  //When starting the filtering save the table data as an alias
  //Then after finishing the filtering, compare the table data with the alias in a new step

  //not sure how to do it
  static resetNameFilter() {
    this.click(CANCEL_ICON)
    this.doesNotExist(FILTERING_CHIP)
    cy.get("@tokensName").should("contain", "")
  }

  static resetSymbolFilter(){
    this.click(CANCEL_ICON)
    this.doesNotExist(FILTERING_CHIP)
    cy.get("@tokensSymbol").should("contain", "")
  }

  static resetListedFilter(){
    this.click(CANCEL_ICON)
    this.doesNotExist(FILTERING_CHIP)
    cy.get("@listedToken").should("contain", "")
  }

}
