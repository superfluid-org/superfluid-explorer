import { BasePage } from '../BasePage'

const HEADER_SEARCH_BAR = '[data-cy=search-input-base]'
const MODAL_SEARCH_INPUT = '#outlined-search'
const ADDRESS_BOOK_ENTRIES = '[data-cy=address-book-entry] span a'
const ADDRESS_BOOK_NAME_INPUT = '#name'
const ADDRESS_BOOK_SAVE = '[data-cy=address-save]'
const ADDRESS_BOOK_CANCEL = '[data-cy=address-cancel]'
const ADDRESS_BOOK_REMOVE = '[data-cy=address-remove]'
const ALL_ACCOUNT_SEARCH_RESULTS = '[data-cy*=account-search-result]'
const SUBGRAPH_BUTTON = '#subgraph-button'
const SUBGRAPH_CONTAINER = '.graphiql-container'
const INDEX_PAGE_CONTAINER = '[data-cy=index-page-container]'
const INDEX_SUBSCRIPTION_CONTAINER = '[data-cy=index-subscription-container]'
const SETTINGS_CLOSE_BUTTON = '[data-testid=CloseIcon]'
const ETHER_DECIMAL_GROUP = '[data-cy=ether-decimal-button-group]'
const STREAM_GRANULARITY_GROUP = '[data-cy=stream-granularity-button-group]'
const SETTINGS_BUTTON = '[data-testid=SettingsOutlinedIcon]'
const FILTER_BUTTON = '[data-testid=FilterListIcon]'
const FILTER_RESET_BUTTON = '[data-cy=reset-filter]'
const FILTER_CLOSE_BUTTON = '[data-cy=close-filter]'
const SETTINGS_TESTNET_SWITCHES = '[data-cy*=testnet-switch'

export class CommonElements extends BasePage {
  static clickHeaderSearchBar() {
    cy.get(HEADER_SEARCH_BAR).parent().click()
    //this.click(HEADER_SEARCH_BAR)
  }

  static searchForStaticBalanceAccount() {
    cy.fixture('commonData').then((fixture) => {
      this.type(MODAL_SEARCH_INPUT, fixture.staticBalanceAccount)
    })
  }

  static searchForTransactionAccount() {
    cy.fixture('commonData').then((fixture) => {
      this.type(MODAL_SEARCH_INPUT, fixture.transactionAccount)
    })
  }

  static openNetworkAddressResult(network: string) {
    cy.get('[data-cy=' + network + '-account-search-result]').then((el) => {
      cy.wrap(el.text()).as('lastOpenedResult')
    })
    this.click('[data-cy=' + network + '-account-search-result]')
  }

  static validateAccountPageLink(network: string) {
    cy.get('@lastOpenedResult').then((result) => {
      this.validatePageUrl(
        '/' + network + '/accounts/' + result + '?tab=tokens'
      )
    })
  }

  static searchFor(text: string) {
    this.type(MODAL_SEARCH_INPUT, text)
  }

  static openFirstTokenResult(network: string) {
    cy.get(
      '[data-cy=' + network + '-token-search-result] [data-cy=token-address]'
    )
      .eq(0)
      .then((el) => {
        cy.wrap(el.text()).as('lastOpenedResult')
      })
    this.clickFirstVisible('[data-cy=' + network + '-token-search-result]')
  }

  static validateTokenPageLink(network: string) {
    cy.get('@lastOpenedResult').then((result) => {
      this.validatePageUrl(
        '/' + network + '/supertokens/' + result + '?tab=streams'
      )
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
    this.click('[data-cy=' + tab.replaceAll(' ', '-') + '-tab')
  }

  static indexPageContainerIsVisible() {
    this.isVisible(INDEX_PAGE_CONTAINER)
  }

  static subscriptionContainerVisible() {
    this.isVisible(INDEX_SUBSCRIPTION_CONTAINER)
  }

  static closeSettingsMenu() {
    this.click(SETTINGS_CLOSE_BUTTON)
  }

  static changeDecimalPlaces(num: number) {
    cy.get(ETHER_DECIMAL_GROUP).children().contains(num).click()
  }

  static openSettingsMenu() {
    this.click(SETTINGS_BUTTON)
  }

  static changeGranularity(granularity: string) {
    cy.get(STREAM_GRANULARITY_GROUP).children().contains(granularity).click()
  }

  static openReadMePage(page: string) {
    cy.fixture('toolTipStringsAndLinks').then((fixture) => {
      cy.visit(fixture[page + '-link'])
    })
  }

  static resetFilter() {
    this.click(FILTER_BUTTON)
    this.click(FILTER_RESET_BUTTON)
  }

  static enableAllTestnets() {
    this.click(SETTINGS_BUTTON)
    cy.get(SETTINGS_TESTNET_SWITCHES).click({ multiple: true })
    this.click(SETTINGS_CLOSE_BUTTON)
  }

  static toggleTestnetBySlug(slugName: string) {
    this.click(SETTINGS_TESTNET_SWITCHES + '-' + slugName)
  }

  static clickFilterResetButton() {
    this.click(FILTER_RESET_BUTTON)
  }

  static clickFilterCloseButton() {
    this.click(FILTER_CLOSE_BUTTON)
  }
}
