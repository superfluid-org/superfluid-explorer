import {BasePage} from "../BasePage";


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

export class SuperTokensPage extends BasePage {

  // @mariam Create a quick test case that will check if the button in header will work too
  static openTokensPage() {
    cy.visit('/super-tokens')
  }

  static validateSuperTokens(network: string) {
    cy.fixture("supertokensData").then(supertokens => {
      this.isNotVisible(LOADING_SPINNER)
      // @mariam This has to be changed, new tokens come up every day , so sooner or later, but the test case will break
      //Simply check if 10 tokens are present for now
      this.hasText(SUPER_TOKENS_NAME, supertokens[network].TokenName)
      this.hasText(SUPER_TOKENS_SYMBOL, supertokens[network].TokenSymbol)
      this.hasText(SUPER_TOKENS_ADDRESS, supertokens[network].TokenAddress)
    })
  }

  // @mariam Delete this function  , and use a step from landing page to switch to the network and then just validate
  // with validateSuperTokens() after that step
  static switchNetworks(network: string) {
    cy.fixture("supertokensData").then(supertokens => {
      //this.click(OPTIMISM_BUTTON)
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
      this.click(FILTER_CLOSE_BUTTON)
      this.isNotVisible(LOADING_SPINNER)
      cy.get(SUPER_TOKENS_NAME).each((
        $el) => {
        // @mariam Should change this equal to contains, since it will find all tokens containing the filter input
        expect($el.text()).to.be.equal(supertokens[network].TokenName)
      })

    })
  }

  static filterByTokenSymbol(network: string){
    cy.fixture("supertokensData").then(supertokens => {
      this.click(FILTER_BUTTON)
      // @mariam Add a check for the chip that appears after filtering
      this.type(TOKEN_SYMBOL_FILTER, supertokens[network].TokenSymbol)
      this.click(FILTER_CLOSE_BUTTON)
      this.isNotVisible(LOADING_SPINNER)
      cy.get(SUPER_TOKENS_SYMBOL).each((
        $el) => {
        // @mariam Should change this equal to contains, since it will find all tokens containing the filter input
        expect($el.text()).to.be.equal(supertokens[network].TokenSymbol)
      })
    })
  }

  static filterByListed(){
    this.click(FILTER_BUTTON)
    this.click(FILTER_LISTED_YES_BUTTON)
    // @mariam Add a check for the chip that appears after filtering
    this.click(FILTER_CLOSE_BUTTON)
    // @mariam Get rid of this wait, we can do better
    // Either wait for the loading spinner to be gone or intercept the graph request
    // and wait for it to complete before asserting    cy.wait(1000)
    cy.get(LISTED_TOKEN_ROW).each((
      $el) => {
      expect($el.text()).to.be.equal("Yes")
    })
  }

  static filterByNotListed() {
    this.click(FILTER_BUTTON)
    // @mariam Add a check for the chip that appears after filtering
    this.click(FILTER_LISTED_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    // @mariam Get rid of this wait, we can do better
    // Either wait for the loading spinner to be gone or intercept the graph request
    // and wait for it to complete before asserting
    cy.wait(1000)
    cy.get(LISTED_TOKEN_ROW).each((
      $el) => {
      expect($el.text()).to.be.equal("No")
    })
  }

  // @mariam Leave this as a seperate step to close the filter, but
  //When starting the filtering save the table data as an alias
  //Then after finishing the filtering, compare the table data with the alias in a new step
  static resetFilter(){
    this.click(FILTER_BUTTON)
    this.click(FILTER_RESET_BUTTON)
    //  @mariam Add a check that there are no more filtering chips visible after reset
    this.click(FILTER_CLOSE_BUTTON)
  }
}
