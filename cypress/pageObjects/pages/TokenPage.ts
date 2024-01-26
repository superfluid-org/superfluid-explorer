import { ethers } from 'ethers'

import { BasePage } from '../BasePage'

const TOKEN_LISTED_STATUS = '[data-cy=token-listed-status] span'
const TOKEN_SYMBOL = '[data-cy=token-symbol] span'
const TOKEN_ADDRESS = '[data-cy=token-address] span'
const TOKEN_FANCY_NAME = '[data-cy=token-fancy-network] span'
const TOKEN_UNDERLYING_ADDRESS = '[data-cy=underlying-token-address] span div'
const STREAMS_SENDER = '[data-cy=sender]'
const STREAMS_RECEIVER = '[data-cy=receiver]'
const STREAMS_FLOW_RATES = '[data-cy=flowrate]'
const INDEX_PUBLISHERS = '[data-cy=publisher]'
const INDEX_ID = '[data-cy=index-id]'
const TOTAL_AMOUNT_DISTRIBUTED = '[data-cy=total-distributed]'
const EVENT_NAMES = '[data-cy=event-name]'
const EVENT_BLOCK_NUMBERS = '[data-cy=event-block-number]'
const EVENT_SHORT_TX_HASH = '[data-cy=transaction-hash]'
const FILTER_BUTTON = '[data-testid=FilterListIcon]'
const FILTER_SENDER_ADDRESS = '[data-cy=sender-address-input]'
const FILTER_RECEIVER_ADDRESS = '[data-cy=receiver-address-input]'
const FILTER_ACTIVE_YES = '[data-cy=filter-active-yes]'
const FILTER_ACTIVE_NO = '[data-cy=filter-active-no]'
const FILTER_NO_RESULTS = '[data-cy=no-results]'
const FILTER_CLOSE_BUTTON = '[data-cy=close-filter]'
const FILTER_RESET_BUTTON = '[data-cy=reset-filter]'
const FILTER_CLOSE_ICON = '[data-testid=CloseIcon]'
const FILTER_CANCEL_ICON = '[data-testid=CancelIcon]'
const LOADING_SPINNER = '.MuiCircularProgress-svg'
const LOADING_PAGE = '.MuiTableBody-root > .MuiBox-root' //temporary
const FILTER_INDEX_ID_ADDRESS = '[data-cy=indexId-input]'
const FILTER_PUBLISHER_ADDRESS = '[data-cy=publisher-address-input]'
const FILTER_DISTRIBUTED_YES = '[data-cy=filter-distributed-yes]'
const FILTER_DISTRIBUTED_NO = '[data-cy=filter-distributed-no]'
const FILTER_EVENT_NAME = '[data-cy=event_name_input]'
const FILTER_TRANSACTION_HASH = '[data-cy=transaction_hash_input]'
const CHIP_SENDER = '[data-cy=chip-sender]'
const CHIP_RECEIVER = '[data-cy=chip-receiver]'
const CHIP_STATUS = '[data-cy=chip-status]'
const CHIP_INDEX_ID = '[data-cy=chip-indexId]'
const CHIP_PUBLISHER = '[data-cy=chip-publisher]'
const CHIP_DISTRIBUTED = '[data-cy=chip-distributed]'
const TOTAL_STREAMED = '[data-cy=total-streamed]'
const TOTAL_DISTIRUBTED = '[data-cy=token-total-distributed] span'
const TOTAL_SUPPLY = '[data-cy=total-supply] span'
const TOTAL_TRANSFERRED = '[data-cy=total-transferred] span'

export class TokenPage extends BasePage {
  static validateListedTokenStatus(text: string) {
    this.containsText(TOKEN_LISTED_STATUS, text)
  }

  static validateTokenData(network: string) {
    cy.fixture('tokenData').then((token) => {
      this.containsText(TOKEN_SYMBOL, token[network].symbol)
      this.containsText(TOKEN_ADDRESS, token[network].address)
      this.containsText(TOKEN_FANCY_NAME, token[network].networkFancyName)
      this.containsText(
        TOKEN_UNDERLYING_ADDRESS,
        token[network].underlyingTokenAddress
      )
      this.containsText(TOKEN_LISTED_STATUS, token[network].listedStatus)
    })
  }

  static validateLoadedTokenStreamData() {
    this.isVisible(STREAMS_SENDER)
    this.isVisible(STREAMS_RECEIVER)
    cy.get(STREAMS_FLOW_RATES).last().scrollIntoView()
    this.isVisible(STREAMS_FLOW_RATES)
  }

  static validateLoadedIndexData() {
    this.isVisible(INDEX_PUBLISHERS)
    this.isVisible(INDEX_ID)
    this.isVisible(TOTAL_AMOUNT_DISTRIBUTED)
  }

  static validateLoadedEventsData() {
    this.isVisible(EVENT_NAMES)
    this.isVisible(EVENT_BLOCK_NUMBERS)
    this.isVisible(EVENT_SHORT_TX_HASH)
  }

  static filterStreamsBySenderAddress(network: string) {
    cy.fixture('tokenData').then((tokens) => {
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
      this.click(FILTER_BUTTON)
      this.type(FILTER_SENDER_ADDRESS, tokens[network].sender)
      this.click(FILTER_CLOSE_BUTTON)
      this.caseInsensitive(CHIP_SENDER, tokens[network].sender)
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
    })
  }

  static validateFilteredStreamsBySenderAddress(network: string) {
    cy.fixture('tokenData').then((tokens) => {
      cy.get(STREAMS_SENDER).each(($el) => {
        cy.wrap($el.text()).should(
          'contain',
          this.getShortenedAddress(tokens[network].sender)
        )
      })
    })
  }

  static filterStreamsByReceiverAddress(network: string) {
    cy.fixture('tokenData').then((tokens) => {
      this.click(FILTER_BUTTON)
      this.click(FILTER_CLOSE_ICON)
      this.type(FILTER_RECEIVER_ADDRESS, tokens[network].receiver)
      this.click(FILTER_CLOSE_BUTTON)
      this.caseInsensitive(CHIP_RECEIVER, tokens[network].receiver)
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
    })
  }

  static validateFilteredStreamsByReceiverAddress(network: string) {
    cy.fixture('tokenData').then((tokens) => {
      cy.get(STREAMS_RECEIVER).each(($el) => {
        cy.wrap($el.text()).should(
          'contain',
          this.getShortenedAddress(tokens[network].receiver)
        )
      })
    })
  }

  static filterStreamsByActive() {
    this.click(FILTER_CANCEL_ICON)
    this.click(FILTER_BUTTON)
    this.click(FILTER_ACTIVE_YES)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_STATUS, 'Active')
  }

  static validateFilteredStreamsByActive() {
    cy.get(STREAMS_FLOW_RATES).each(($el) => {
      cy.wrap($el.text()).should('contain', '/')
    })
  }

  static filterStreamsByNotActive() {
    this.click(FILTER_BUTTON)
    this.click(FILTER_ACTIVE_NO)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_STATUS, 'Inactive')
  }

  static validateFilteredStreamsByNotActive() {
    this.doesNotExist(STREAMS_FLOW_RATES)
  }

  static filterStreamsNoResults() {
    this.click(FILTER_BUTTON)
    this.type(FILTER_SENDER_ADDRESS, 'test')
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    cy.get(FILTER_NO_RESULTS).should('be.visible')
  }

  static filterIndexesByIndexID() {
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    this.click(FILTER_BUTTON)
    this.type(FILTER_INDEX_ID_ADDRESS, '1')
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_INDEX_ID, '1')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredIndexesByIndexID() {
    cy.get(INDEX_ID).each(($el) => {
      cy.wrap($el.text()).should('eq', '1')
    })
  }

  static filterIndexesByPublisherAddress(network: string) {
    cy.fixture('tokenData').then((tokens) => {
      this.click(FILTER_BUTTON)
      this.click(FILTER_CLOSE_ICON)
      this.type(FILTER_PUBLISHER_ADDRESS, tokens[network].publisher)
      this.click(FILTER_CLOSE_BUTTON)
      this.caseInsensitive(CHIP_PUBLISHER, tokens[network].publisher)
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
    })
  }

  static validateFilteredIndexesByPublisherAddress(network: string) {
    cy.fixture('tokenData').then((tokens) => {
      cy.get(INDEX_PUBLISHERS).each(($el) => {
        cy.wrap($el.text()).should(
          'contain',
          this.getShortenedAddress(tokens[network].publisher)
        )
      })
    })
  }

  static filterIndexesByDistributed() {
    this.click(FILTER_CANCEL_ICON)
    this.click(FILTER_BUTTON)
    this.click(FILTER_DISTRIBUTED_YES)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_DISTRIBUTED, 'Has distributed tokens')
    this.isVisible(LOADING_PAGE)
    this.isNotVisible(LOADING_PAGE)
  }

  static validateIndexesByDistributed() {
    cy.get(TOTAL_AMOUNT_DISTRIBUTED).each(($el) => {
      cy.wrap($el.text())
        .should('match', /DAIx(\d+)/)
        .then((match) => {
          const value = parseFloat(match.split('DAIx')[1])
          expect(value).to.be.greaterThan(0)
        })
    })
  }

  static filterIndexesByNotDistributed() {
    this.click(FILTER_CANCEL_ICON)
    this.click(FILTER_BUTTON)
    this.click(FILTER_DISTRIBUTED_NO)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_DISTRIBUTED, 'Has not distributed tokens')
    this.isVisible(LOADING_PAGE)
    this.isNotVisible(LOADING_PAGE)
  }

  static validateIndexesByNotDistributed() {
    cy.get(TOTAL_AMOUNT_DISTRIBUTED).each(($el) => {
      cy.wrap($el.text()).should('contain', 'DAIx0')
    })
  }

  static filterIndexesNoResults() {
    this.click(FILTER_BUTTON)
    this.type(FILTER_PUBLISHER_ADDRESS, 'test')
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    cy.get(FILTER_NO_RESULTS).should('be.visible')
  }

  static filterEventsByEventName(network: string) {
    cy.fixture('tokenData').then((token) => {
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
      this.click(FILTER_BUTTON)
      this.type(FILTER_EVENT_NAME, token[network].eventName)
      this.click(FILTER_CLOSE_BUTTON)
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
    })
  }

  static validateFilteredEventsByEventName(network: string) {
    cy.fixture('tokenData').then((token) => {
      cy.get(EVENT_NAMES).each(($el) => {
        cy.wrap($el.text()).should('contain', token[network].eventName)
      })
    })
  }

  static filterEventsByTransactionHash(network: string) {
    cy.fixture('tokenData').then((token) => {
      this.click(FILTER_BUTTON)
      this.click(FILTER_CLOSE_ICON)
      this.type(FILTER_TRANSACTION_HASH, token[network].transactionHash)
      this.click(FILTER_CLOSE_BUTTON)
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
    })
  }

  static validateFilteredEventsByTransactionHash(network: string) {
    cy.fixture('tokenData').then((token) => {
      cy.get(EVENT_SHORT_TX_HASH).each(($el) => {
        cy.wrap($el.text()).should(
          'contain',
          this.getShortenedHashAddress(token[network].transactionHash)
        )
      })
    })
  }

  static filterEventsNoResults() {
    this.click(FILTER_BUTTON)
    this.type(FILTER_EVENT_NAME, 'test')
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    cy.get(FILTER_NO_RESULTS).should('be.visible')
  }

  static errorPageOnRegularToken() {
    cy.contains('404').should('be.visible')
    cy.contains('This page could not be found.').should('be.visible')
    cy.title().should('contain', '404: This page could not be found')
  }

  static validateOverallTokenData() {
    cy.get('[class*=MuiSkeleton]').should('not.exist')
    cy.wait('@tokenStatistics')
    cy.get('@tokenStatistics')
      .its('response')
      .then((res) => {
        let stats = res.body.data.tokenStatistics[0]
        this.hasText(
          TOTAL_TRANSFERRED,
          ethers.utils
            .formatEther(stats.totalAmountTransferredUntilUpdatedAt)
            .toString()
        )
        this.hasText(
          TOTAL_DISTIRUBTED,
          ethers.utils
            .formatEther(stats.totalAmountDistributedUntilUpdatedAt)
            .toString()
        )
        this.hasText(
          TOTAL_SUPPLY,
          ethers.utils.formatEther(stats.totalSupply).toString()
        )
        // Cypress saves the text of the element and then asserts it ,
        // but its hard to catch exact value with the flowing balances and not make the tests brittle
        // So just checking if the totalStreamed value is close to the
        // totalAmountStreamedUntilUpdatedAt value from the graph request
        cy.get(TOTAL_STREAMED).then(($el) => {
          expect(parseFloat($el.text())).to.closeTo(
            parseFloat(
              ethers.utils.formatEther(stats.totalAmountStreamedUntilUpdatedAt)
            ),
            1000
          )
        })
      })
  }

  static saveTokenStatisticsQueriesOn(network: string) {
    cy.intercept('POST', '**protocol-**-' + network, (req) => {
      if (req.body.operationName === 'tokenStatistics') {
        req.alias = 'tokenStatistics'
      }
    })
  }
}
