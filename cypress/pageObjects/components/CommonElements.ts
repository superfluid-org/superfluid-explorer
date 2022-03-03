import {BasePage} from "../BasePage";

const HEADER_SEARCH_BAR = "[data-cy=search-input-base]"
const MODAL_SEARCH_INPUT = "#outlined-search"
const ADDRESS_BOOK_ENTRIES = "[data-cy=address-book-entry] span a"
const ADDRESS_BOOK_NAME_INPUT = "#name"
const ADDRESS_BOOK_SAVE = "[data-cy=address-save]"
const ADDRESS_BOOK_CANCEL = "[data-cy=address-cancel]"
const ADDRESS_BOOK_REMOVE = "[data-cy=address-remove]"
const ALL_ACCOUNT_SEARCH_RESULTS = "[data-cy*=account-search-result]"
const SUBGRAPH_BUTTON = "#search-button"
const SUBGRAPH_CONTAINER = ".graphiql-container"

export class CommonElements extends BasePage {


  static clickHeaderSearchBar() {
    cy.get(HEADER_SEARCH_BAR).parent().click()
    //this.click(HEADER_SEARCH_BAR)
  }

  static searchForStaticBalanceAccount() {
    cy.fixture("commonData").then(fixture => {
      this.type(MODAL_SEARCH_INPUT, fixture.staticBalanceAccount)
    })
  }

  static openNetworkAddressResult(network: string) {
    cy.get("[data-cy=" + network + "-account-search-result]").then(el => {
      cy.wrap(el.text()).as("lastOpenedResult")
    })
    this.click("[data-cy=" + network + "-account-search-result]")
  }

  static validateAccountPageLink(network: string) {
    cy.get("@lastOpenedResult").then(result => {
      this.validatePageUrl("/" + network + "/accounts/" + result + "?tab=streams")
    })
  }

  static searchFor(text: string) {
    this.type(MODAL_SEARCH_INPUT, text)
  }

  static openFirstTokenResult(network: string) {
    cy.get("[data-cy=" + network + "-token-search-result] [data-cy=token-address]").eq(0).then(el => {
      cy.wrap(el.text()).as("lastOpenedResult")
    })
    this.clickFirstVisible("[data-cy=" + network + "-token-search-result]")
  }

  static validateTokenPageLink(network: string) {
    cy.get("@lastOpenedResult").then(result => {
      this.validatePageUrl("/" + network + "/supertokens/" + result + "?tab=streams")
    })
  }

  static inputAndSaveToAddressBook(name: string) {
    this.type(ADDRESS_BOOK_NAME_INPUT, name)
    this.click(ADDRESS_BOOK_SAVE)
  }

  static addressBookEntryIsShown(name: string) {
    this.containsText(ADDRESS_BOOK_ENTRIES, name)
  }

  static accountSearchResultContainsName(name: any) {
    this.containsText(ALL_ACCOUNT_SEARCH_RESULTS, name)
  }

  static clickSubgraphButton() {
    this.click(SUBGRAPH_BUTTON)
  }

  static subgraphContainerIsVisible() {
    this.isVisible(SUBGRAPH_CONTAINER)
  }

  static switchToTab(tab: string) {
    this.click("[data-cy=" + tab.replaceAll(" ", "-") + "-tab")
  }

}
