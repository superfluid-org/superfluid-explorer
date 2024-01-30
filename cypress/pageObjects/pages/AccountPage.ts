import Decimal from 'decimal.js'

import { calculatePoolPercentage } from '../../../src/hooks/usePoolPercentage'
import { BasePage } from '../BasePage'

const ACCOUNT_TYPE = '[data-cy=account-type] span'
const ACCOUNT_SYMBOL = '[data-cy=token-symbol]'
const UNDERLYING_TOKEN_ADDRESS = '[data-cy=underlying-token-address]'
const BORDER_ADD_TO_ADDRESS_BOOK_BUTTON = '[data-testid=StarBorderIcon]'
const FILLED_ADD_TO_ADDRESS_BOOK_BUTTON = '[data-testid=StarIcon]'
const NETWORK_NAME = '[data-cy=network-name] div'
const ACCOUNT_ADDRESS = '[data-cy=address]'
const OTHER_PARTY_ADDRESS = '[data-cy=account-address]'
const FLOW_RATES = '[data-field=currentFlowRate] span'
const TOTAL_STREAMED = '[data-cy=total-streamed]'
const PUBLICATIONS_BOX = '[data-cy=publications-box]'
const TOTAL_DISTRIBUTED = '[data-field=totalAmountDistributedUntilUpdatedAt]'
const TOTAL_UNITS = '[data-field=totalUnits]'
const TOKEN_ADDRESSES = '[data-cy=token-address]'
const PUBLICATION_TOKEN = '[data-field=token][role=cell] > *'
const PUBLICATION_TOTAL_DISTRIBUTED = '[data-cy=publications-total-distributed]'
const PUBLICATION_TOTAL_UNITS = '[data-cy=publications-units]'
const PUBLICATION_DETAILS_BUTTONS = '[data-cy=publications-details-buttons]'
const APPROVED_STATUSES = '[data-cy=approved-status]'
const SUBSCRIPTION_UNITS = '[data-cy=subscription-units]'
const SUBSCRIPTION_AMOUNT_RECEIVED = '[data-cy=amount-received]'
const ACTIVE_STREAM_COUNT = '[data-cy=active-streams]'
const CLOSED_STREAM_COUNT = '[data-cy=closed-streams]'
const SUBSCRIPTIONS_WITH_UNITS_COUNT = '[data-cy=subscriptions-with-units]'
const EVENT_NAMES = '[data-cy=event-name]'
const EVENT_BLOCK_NUMBER = '[data-cy=event-block-number]'
const EVENT_SHORT_TX_HASH = '[data-cy=transaction-hash]'
const INCOMING_TOKEN_NAMES =
  '[data-cy=incoming-total-streamed] [data-cy=token-link] span'
const OUTGOING_TOKEN_NAMES =
  '[data-cy=outgoing-total-streamed] [data-cy=token-link] span'
const SENDER_ADDRESS = '[data-cy=incoming-sender]'
const RECEIVER_ADDRESS = '[data-cy=outgoing-receiver]'
const INCOMING_FLOW_RATES = '[data-cy=incoming-flow-rate]'
const OUTGOING_FLOW_RATES = '[data-cy=outgoing-flow-rate]'
const INCOMING_TOTAL_STREAMED =
  '[data-cy=incoming-total-streamed] [data-cy=total-streamed]'
const OUTGOING_TOTAL_STREAMED =
  '[data-cy=outgoing-total-streamed] [data-cy=total-streamed]'
const INCOMING_NO_RESULTS = '[data-cy=incoming-no-results]'
const OUTGOING_NO_RESULTS = '[data-cy=outgoing-no-results]'
const PUBLICATIONS_NO_RESULTS = '[data-cy=publications-no-results]'
const SUBSCRIPTIONS_NO_RESULTS = '[data-cy=subscriptions-no-results]'
const PUBLICATION_TOKEN_NAMES =
  '[data-cy=publications-total-distributed] [data-cy=token-link] span'
const PUBLICATIONS_INDEX_ID = '[data-cy=publications-index-id]'
const SUBSCRIPTION_TOKEN_NAMES =
  '[data-cy=subscriptions-total-distributed] [data-cy=token-link] span'
const FILTER_BUTTON = '[data-testid=FilterListIcon]'
const INCOMING_FILTER_BUTTON = '[data-cy=incoming-filter-button]'
const OUTGOING_FILTER_BUTTON = '[data-cy=outgoing-filter-button]'
const FILTER_SENDER_ADDRESS = '[data-cy=sender-address-input]'
const FILTER_RECEIVER_ADDRESS = '[data-cy=receiver-address-input]'
const FILTER_ACTIVE_YES_BUTTON = '[data-cy=filter-active-yes]'
const FILTER_ACTIVE_NO_BUTTON = '[data-cy=filter-active-no]'
const FILTER_PUBLICATIONS_BUTTON = '[data-cy=publications-filter]'
const FILTER_INDEX_ID = '[data-cy=indexId-input]'
const FILTER_DISTRIBUTED_YES_BUTTON = '[data-cy=filter-distributed-yes]'
const FILTER_DISTRIBUTED_NO_BUTTON = '[data-cy=filter-distributed-no]'
const FILTER_UNITS_YES_BUTTON = '[data-cy=filter-issued-yes]'
const FILTER_UNITS_NO_BUTTON = '[data-cy=filter-issued-no]'
const FILTER_SUBSCRIPTIONS_BUTTON = '[data-cy=subscriptions-filter]'
const FILTER_SUB_APPROVED_YES_BUTTON =
  '[data-cy=filter-subscriptions-approved-yes]'
const FILTER_SUB_APPROVED_NO_BUTTON =
  '[data-cy=filter-subscriptions-approved-no]'
const FILTER_RECEIVED_DIS_YES_BUTTON =
  '[data-cy=filter-received-distributions-yes]'
const FILTER_RECEIVED_DIS_NO_BUTTON =
  '[data-cy=filter-received-distributions-no]'
const FILTER_SUB_UNITS_YES_BUTTON = '[data-cy=filter-subscriptions-units-yes]'
const FILTER_SUB_UNITS_NO_BUTTON = '[data-cy=filter-subscriptions-units-no]'
const FILTER_CLOSED_YES_BUTTON = '[data-cy=filter-closed-yes]'
const FILTER_CLOSED_NO_BUTTON = '[data-cy=filter-closed-no]'
const FILTER_EVENT_NAME = '[data-cy=event_name_input]'
const FILTER_TRANSACTION_HASH = '[data-cy=transaction_hash_input]'
const FILTER_CLOSE_BUTTON = '[data-cy=close-filter]'
const FILTER_RESET_BUTTON = '[data-cy=reset-filter]'
const FILTER_CLOSE_ICON = '[data-testid=CloseIcon]'
const FILTER_CANCEL_ICON = '[data-testid=CancelIcon]'
const LOADING_SPINNER = '.MuiCircularProgress-svg'
const NO_RESULTS = '[data-cy=no-results]'
const CHIP_SENDER = '[data-cy=chip-sender]'
const CHIP_RECEIVER = '[data-cy=chip-receiver]'
const CHIP_STATUS = '[data-cy=chip-status]'
const CHIP_INDEX_ID = '[data-cy=chip-indexId]'
const CHIP_DISTRIBUTED = '[data-cy=chip-distributed]'
const CHIP_UNITS = '[data-cy=chip-units]'
const CHIP_ACTIVE = '[data-cy=chip-active]'
const CHIP_INACTIVE = '[data-cy=chip-inactive]'
const POOL_IDS = '[data-cy=publications-pool-id]'
const POOLS_TOTAL_DISTRIBUTED = '[data-cy=publications-total-distributed]'
const POOL_TOKENS = `${POOLS_TOTAL_DISTRIBUTED} div span`
const POOLS_UNITS = '[data-cy=publications-units]'
const POOLS_DETAILS_BUTTONS = '[data-cy=publications-details-buttons]'
const NO_POOLS_RESULTS = '[data-cy=publications-no-results]'
const NO_MEMBERS_RESULTS = '[data-cy=members-no-results]'
const POOLS_FILTER_BUTTON = '[data-cy=pools-filter]'
const POOL_FILTER_ID_INPUT = '[data-cy=id-input]'
const POOL_FILTER_HAS_DISTRIBUTED_YES_BUTTON =
  '[data-cy=filter-distributed-yes]'
const POOL_FILTER_HAS_DISTRIBUTED_NO_BUTTON = '[data-cy=filter-distributed-no]'
const POOL_FILTER_HAS_ISSUED_UNITS_YES_BUTTON = '[data-cy=filter-issued-yes]'
const POOL_FILTER_HAS_ISSUED_UNITS_NO_BUTTON = '[data-cy=filter-issued-no]'
const MEMBER_TABLE_ADMINS = '[data-cy=admin-address]'
const MEMBER_TABLE_CONNECTED = '[data-cy=connected-status]'
const MEMBER_TABLE_TOTAL_CLAIMED = '[data-cy=amount-received]'
const MEMBER_TABLE_POOL_UNITS = '[data-cy=member-units]'
const MEMBERS_FILTER_BUTTON = '[data-cy=members-filter]'
const MEMBER_FILTER_IS_CONNECTED_YES_BUTTON =
  '[data-cy=filter-members-approved-yes]'
const MEMBER_FILTER_IS_CONNECTED_NO_BUTTON =
  '[data-cy=filter-members-approved-no]'
const MEMBER_FILTER_HAS_RECEIVED_DISTRIBUTIONS_YES_BUTTON =
  '[data-cy=filter-received-distributions-yes]'
const MEMBER_FILTER_HAS_RECEIVED_DISTRIBUTIONS_NO_BUTTON =
  '[data-cy=filter-received-distributions-no]'
const MEMBER_FILTER_HAS_UNITS_YES_BUTTON = '[data-cy=filter-members-units-yes]'
const MEMBER_FILTER_HAS_UNITS_NO_BUTTON = '[data-cy=filter-members-units-no]'
export class AccountPage extends BasePage {
  static waitForTablesToLoad() {
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static clickAddressBookButton() {
    this.click(BORDER_ADD_TO_ADDRESS_BOOK_BUTTON)
  }

  static addressBookButtonIsFilled() {
    this.doesNotExist(BORDER_ADD_TO_ADDRESS_BOOK_BUTTON)
    this.isVisible(FILLED_ADD_TO_ADDRESS_BOOK_BUTTON)
  }

  static validateAccountAddressTypeAndNetwork(network: string) {
    cy.fixture('accountData').then((account) => {
      this.hasText(ACCOUNT_TYPE, account[network].accountType)
      this.hasText(
        ACCOUNT_ADDRESS,
        this.getShortenedAddress(account[network].address)
      )
      this.hasText(NETWORK_NAME, account[network].networkFancyName)
      account[network].superTokens.forEach((token: any, index: number) => {
        //Reusing the same element for total streamed and balances , so the selector is the same
        cy.get(TOTAL_STREAMED).eq(index).should('contain.text', token.balance)
      })
    })
  }

  static validateStreamsIncomingStreams(index: number, stream: any) {
    cy.get(INCOMING_TOKEN_NAMES).eq(index).should('contain.text', stream.token)
    cy.get(SENDER_ADDRESS)
      .eq(index)
      .should('contain.text', this.getShortenedAddress(stream.receiver))
    cy.get(INCOMING_FLOW_RATES)
      .eq(index)
      .should('contain.text', stream.flowRate)
    cy.get(INCOMING_TOTAL_STREAMED)
      .eq(index)
      .should('contain.text', stream.totalStreamed)
  }

  static validateStreamsOutgoingStreams(index: number, stream: any) {
    cy.get(OUTGOING_TOKEN_NAMES).eq(index).should('contain.text', stream.token)
    cy.get(RECEIVER_ADDRESS)
      .eq(index)
      .should('contain.text', this.getShortenedAddress(stream.receiver))
    cy.get(OUTGOING_FLOW_RATES)
      .eq(index)
      .should('contain.text', stream.flowRate)
    cy.get(OUTGOING_TOTAL_STREAMED)
      .eq(index)
      .should('contain.text', stream.totalStreamed)
  }

  static validateStreamsTabEntries(network: string) {
    cy.fixture('accountData').then((account) => {
      if (account[network].streams.incoming.length === 0) {
        this.validateNoIncomingStreams()
      } else {
        account[network].streams.incoming.forEach(
          (stream: any, index: number) => {
            this.validateStreamsIncomingStreams(index, stream)
          }
        )
      }
      if (account[network].streams.outgoing.length === 0) {
        this.validateNoOutgoingStreams()
      } else {
        account[network].streams.outgoing.forEach(
          (stream: any, index: number) => {
            this.validateStreamsOutgoingStreams(index, stream)
          }
        )
      }
    })
  }

  static validateNoIncomingStreams() {
    cy.get(INCOMING_NO_RESULTS).should('be.visible')
    cy.get(INCOMING_TOKEN_NAMES).should('not.exist')
  }

  static validateNoOutgoingStreams() {
    cy.get(OUTGOING_NO_RESULTS).should('be.visible')
    cy.get(OUTGOING_TOKEN_NAMES).should('not.exist')
  }

  static validateNoPublications() {
    cy.get(PUBLICATIONS_NO_RESULTS).should('be.visible')
    cy.get(PUBLICATION_TOKEN_NAMES).should('not.exist')
  }

  static validateNoSubscriptions() {
    cy.get(SUBSCRIPTIONS_NO_RESULTS).should('be.visible')
    cy.get(SUBSCRIPTION_TOKEN_NAMES).should('not.exist')
  }

  static validateIndexTabEntries(network: string) {
    cy.fixture('accountData').then((account) => {
      if (account[network].indexes.publications.length === 0) {
        this.validateNoPublications()
      } else {
        account[network].indexes.publications.forEach(
          (ida: any, index: number) => {
            //Currently not checking account with distributions, should actually deploy an IDA for testing purposes on matic too
            //Selectors are already defined at the top, just need to do the logic here and add data to fixtures
          }
        )
      }
      if (account[network].indexes.subscriptions.length === 0) {
        this.validateNoSubscriptions()
      } else {
        account[network].indexes.subscriptions.forEach(
          (ida: any, index: number) => {
            //Currently not checking account with distributions, should actually deploy an IDA for testing purposes on matic too
            //Selectors are already defined at the top, just need to do the logic here and add data to fixtures
          }
        )
      }
    })
  }

  static validateSuperAppPublicationEntries(network: string) {
    cy.fixture('accountData').then((account) => {
      if (account[network].superApp.indexes.publications.length === 0) {
        this.validateNoPublications()
      } else {
        account[network].superApp.indexes.publications.forEach(
          (publication: any, index: number) => {
            cy.get(PUBLICATION_TOKEN_NAMES)
              .eq(index)
              .should('contain.text', publication.token)
            this.replaceSpacesAndAssertText(
              PUBLICATION_TOTAL_DISTRIBUTED,
              publication.token + publication.totalDistributed,
              index
            )
            cy.get(PUBLICATION_TOTAL_UNITS)
              .eq(index)
              .should('contain.text', publication.totalUnits)
          }
        )
      }
    })
  }

  static openFirstPublicationDetails() {
    cy.get(PUBLICATION_DETAILS_BUTTONS).eq(0).click()
  }

  static validateTokensTabEntries(network: string) {
    cy.fixture('accountData').then((account) => {
      account[network].superTokens.forEach((token: any, index: number) => {
        cy.get(TOKEN_ADDRESSES)
          .eq(index)
          .should('contain.text', token.tokenName)
        cy.get(TOTAL_STREAMED).eq(index).should('contain.text', token.balance)
        cy.get(ACTIVE_STREAM_COUNT)
          .eq(index)
          .should('contain.text', token.activeStreamCount)
        cy.get(CLOSED_STREAM_COUNT)
          .eq(index)
          .should('contain.text', token.closedStreamCount)
        cy.get(SUBSCRIPTIONS_WITH_UNITS_COUNT)
          .eq(index)
          .should('contain.text', token.subscriptionWithUnitsCount)
      })
    })
  }

  static validateEventsTabEntries(network: string) {
    cy.fixture('accountData').then((account) => {
      account[network].events.forEach((event: any, index: number) => {
        cy.get(EVENT_NAMES).eq(index).should('contain.text', event.name)
        cy.get(EVENT_BLOCK_NUMBER)
          .eq(index)
          .should('contain.text', event.blockNumber)
        cy.get(EVENT_SHORT_TX_HASH)
          .eq(index)
          .should('contain.text', event.shortTransactionHash)
      })
    })
  }

  static validateChangedFlowGranularity(granularity: string, network: string) {
    let granularityMultiplier: number
    switch (granularity) {
      case 'second':
        granularityMultiplier = 1
        break
      case 'minute':
        granularityMultiplier = 60
        break
      case 'hour':
        granularityMultiplier = 3600
        break
      case 'day':
        granularityMultiplier = 86400
        break
      case 'week':
        granularityMultiplier = 604800
        break
      case 'month':
        granularityMultiplier = 2592000
        break
    }

    cy.fixture('accountData').then((fixture) => {
      fixture[network].ongoingStreamAccount.streams.outgoing.forEach(
        (stream: { flowRate: string }, index: number) => {
          cy.get(OUTGOING_FLOW_RATES)
            .eq(index)
            .then((el) => {
              let expectedFlowAmount =
                parseFloat(stream.flowRate) * granularityMultiplier
              let actualFlowAmount = parseFloat(el.text().split('/')[0])
              let timeUnit = el.text().split('/')[1]
              expect(timeUnit).to.eq(granularity)
              cy.log(el.text())
              cy.log(actualFlowAmount.toString())
              cy.wrap(expectedFlowAmount).should(
                'be.closeTo',
                actualFlowAmount,
                1e-18
              )
            })
        }
      )
    })
  }

  static validateHelpAlertAndLink(alert: string) {
    cy.fixture('toolTipStringsAndLinks').then((fixture) => {
      this.hasText(
        '[data-cy=' + alert + '-help-alert]',
        fixture[alert + '-help-alert']
      )
      this.hasAttributeWithValue(
        '[data-cy=' + alert + '-help-alert-link]',
        'href',
        fixture[alert + '-help-alert-link']
      )
    })
  }

  static hoverTooltipAndValidateLink(tooltip: string) {
    cy.fixture('toolTipStringsAndLinks').then((fixture) => {
      cy.get('[data-cy=' + tooltip + '-tooltip]')
        .trigger('mouseover')
        .then((el) => {
          let attributeToCheck = fixture[tooltip + '-tooltip-link']
            ? 'aria-labelledby'
            : 'aria-label'
          cy.wrap(el)
            .should('have.attr', attributeToCheck)
            .then((attr) => {
              if (attributeToCheck === 'aria-labelledby') {
                this.hasText(`[id="${attr}"]`, fixture[tooltip + '-tooltip'])
                this.hasAttributeWithValue(
                  '[data-cy=' + tooltip + '-tooltip-link]',
                  'href',
                  fixture[tooltip + '-tooltip-link']
                )
              } else {
                this.hasText(
                  `[role=tooltip] div`,
                  fixture[tooltip + '-tooltip']
                )
              }
            })
          cy.get('[data-cy=' + tooltip + '-tooltip]').trigger('mouseout')
        })
    })
  }

  static filterIncomingStreamsBySenderAddress(network: string) {
    //Save the sender addresses before filtering
    let senderAddresses: string[] = []
    cy.get(SENDER_ADDRESS).each((el) => {
      senderAddresses.push(el.text())
    })
    cy.wrap(senderAddresses).as('senderAddresses')
    cy.fixture('filteringData').then((account) => {
      this.isNotVisible(LOADING_SPINNER)
      this.click(INCOMING_FILTER_BUTTON)
      this.type(FILTER_SENDER_ADDRESS, account[network].sender)
      this.click(FILTER_CLOSE_BUTTON)
      this.caseInsensitive(CHIP_SENDER, account[network].sender)
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
    })
  }

  static validateFilteredIncomingStreamsBySenderAddress(network: string) {
    cy.fixture('filteringData').then((account) => {
      cy.get(SENDER_ADDRESS).each(($el) => {
        cy.wrap($el.text()).should(
          'contain',
          this.getShortenedAddress(account[network].sender)
        )
      })
    })
  }

  static filterIncomingStreamsByActive() {
    this.click(INCOMING_FILTER_BUTTON)
    this.click(FILTER_CLOSE_ICON)
    this.click(FILTER_ACTIVE_YES_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_STATUS, 'Active')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredIncomingStreamsByActive() {
    cy.get(INCOMING_FLOW_RATES).each(($el) => {
      cy.wrap($el.text()).should('contain', '/')
    })
  }

  static filterIncomingStreamsByNotActive() {
    this.click(FILTER_CANCEL_ICON)
    this.click(INCOMING_FILTER_BUTTON)
    this.click(FILTER_ACTIVE_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_STATUS, 'Inactive')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredIncomingStreamsByNotActive() {
    cy.get(INCOMING_FLOW_RATES).each(($el) => {
      cy.wrap($el.text()).should('contain', '0')
    })
  }

  static filterIncomingStreamsNoResults() {
    this.click(INCOMING_FILTER_BUTTON)
    this.type(FILTER_SENDER_ADDRESS, 'test')
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    this.isVisible(INCOMING_NO_RESULTS)
  }

  static resetIncomingStreamsFilter() {
    this.click(INCOMING_FILTER_BUTTON)
    this.click(FILTER_RESET_BUTTON)
  }

  static filterOutgoingStreamsByReceiverAddress(network: string) {
    cy.fixture('filteringData').then((account) => {
      this.click(OUTGOING_FILTER_BUTTON)
      this.type(FILTER_RECEIVER_ADDRESS, account[network].receiver)
      this.click(FILTER_CLOSE_BUTTON)
      this.caseInsensitive(CHIP_RECEIVER, account[network].receiver)
      //Firefox somehow filters without a loading spinner
      if (Cypress.browser.name !== 'firefox') {
        this.isVisible(LOADING_SPINNER)
        this.isNotVisible(LOADING_SPINNER)
      }
    })
  }

  static validateFilteredOutgoingStreamsByReceiverAddress(network: string) {
    cy.fixture('filteringData').then((account) => {
      cy.get(RECEIVER_ADDRESS).each(($el) => {
        cy.wrap($el.text()).should(
          'contain',
          this.getShortenedAddress(account[network].receiver)
        )
      })
    })
  }

  static filterOutgoingStreamsByActive() {
    this.click(OUTGOING_FILTER_BUTTON)
    this.click(FILTER_CLOSE_ICON)
    this.click(FILTER_ACTIVE_YES_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_STATUS, 'Active')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredOutgoingStreamsByActive() {
    cy.get(OUTGOING_FLOW_RATES).each(($el) => {
      cy.wrap($el.text()).should('contain', '/')
    })
  }

  static filterOutgoingStreamsByNotActive() {
    this.click(OUTGOING_FILTER_BUTTON)
    this.click(FILTER_ACTIVE_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_STATUS, 'Inactive')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredOutgoingStreamsByNotActive() {
    cy.get(OUTGOING_FLOW_RATES).each(($el) => {
      cy.wrap($el.text()).should('contain', '0')
    })
  }

  static filterOutgoingStreamsNoResults() {
    this.click(OUTGOING_FILTER_BUTTON)
    this.type(FILTER_RECEIVER_ADDRESS, 'test')
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    cy.get(OUTGOING_NO_RESULTS).should('be.visible')
  }

  static resetOutgoingStreamsFilter() {
    this.click(OUTGOING_FILTER_BUTTON)
    this.click(FILTER_RESET_BUTTON)
  }

  static filterPublicationsByIndexID() {
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    this.click(FILTER_PUBLICATIONS_BUTTON)
    this.type(FILTER_INDEX_ID, '0')
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_INDEX_ID, '0')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredPublicationsByIndexID() {
    cy.get(PUBLICATIONS_INDEX_ID).each(($el) => {
      cy.wrap($el.text()).should('eq', '0')
    })
  }

  static filterPublicationsByDistributed() {
    this.click(FILTER_CANCEL_ICON)
    this.click(FILTER_PUBLICATIONS_BUTTON)
    this.click(FILTER_DISTRIBUTED_YES_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_DISTRIBUTED, 'Has distributed tokens')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredPublicationsByDistributed() {
    cy.get(PUBLICATION_TOTAL_DISTRIBUTED).each(($el) => {
      cy.wrap($el.text()).should('not.eq', '0')
    })
  }

  static filterPublicationsByNotDistributed() {
    this.click(FILTER_PUBLICATIONS_BUTTON)
    this.click(FILTER_DISTRIBUTED_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_DISTRIBUTED, 'Has not distributed tokens')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredPublicationsByNotDistributed() {
    cy.get(PUBLICATION_TOTAL_DISTRIBUTED).each(($el) => {
      cy.wrap($el.text()).should('eq', '0')
    })
  }

  static filterPublicationsByIssuedUnits() {
    this.click(FILTER_CANCEL_ICON)
    this.click(FILTER_PUBLICATIONS_BUTTON)
    this.click(FILTER_UNITS_YES_BUTTON)
    this.validateChip(CHIP_UNITS, 'Has issued units')
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredPublicationsByIssuedUnits() {
    cy.get(PUBLICATION_TOTAL_UNITS).each(($el) => {
      cy.wrap($el.text()).should('not.eq', '0')
    })
  }

  static filterPublicationsByNoIssuedUnits() {
    this.click(FILTER_PUBLICATIONS_BUTTON)
    this.click(FILTER_UNITS_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_UNITS, 'Has not issued units')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredPublicationsByNoIssuedUnits() {
    cy.get(PUBLICATION_TOTAL_UNITS).each(($el) => {
      cy.wrap($el.text()).should('eq', '0')
    })
  }

  static filterPublicationsNoResults() {
    this.click(FILTER_CANCEL_ICON)
    this.click(FILTER_PUBLICATIONS_BUTTON)
    this.click(FILTER_DISTRIBUTED_NO_BUTTON)
    this.click(FILTER_UNITS_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    cy.get(PUBLICATIONS_NO_RESULTS).should('be.visible')
  }

  static resetPublicationsFilter() {
    this.click(FILTER_PUBLICATIONS_BUTTON)
    this.click(FILTER_RESET_BUTTON)
  }

  static filterSubscriptionsByApproved() {
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    this.click(FILTER_SUBSCRIPTIONS_BUTTON)
    this.click(FILTER_SUB_APPROVED_YES_BUTTON)
    this.validateChip(CHIP_STATUS, 'Approved')
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSubscriptionsByApproved() {
    cy.get(APPROVED_STATUSES).each(($el) => {
      cy.wrap($el.text()).should('contain', 'Yes')
    })
  }

  static filterSubscriptionsByNotApproved() {
    this.click(FILTER_SUBSCRIPTIONS_BUTTON)
    this.click(FILTER_SUB_APPROVED_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_STATUS, 'Not approved')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSubscriptionsByNotApproved() {
    cy.get(APPROVED_STATUSES).each(($el) => {
      cy.wrap($el.text()).should('contain', 'No')
    })
  }

  static filterSubscriptionsByDistributed() {
    this.click(FILTER_CANCEL_ICON)
    this.click(FILTER_SUBSCRIPTIONS_BUTTON)
    this.click(FILTER_RECEIVED_DIS_YES_BUTTON)
    this.validateChip(CHIP_DISTRIBUTED, 'Has received distribution')
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSubscriptionsByDistributed() {
    cy.get(SUBSCRIPTION_AMOUNT_RECEIVED).each(($el) => {
      cy.wrap($el.text()).should('not.eq', '0')
    })
  }

  static filterSubscriptionsByNotDistributed() {
    this.click(FILTER_SUBSCRIPTIONS_BUTTON)
    this.click(FILTER_RECEIVED_DIS_NO_BUTTON)
    this.validateChip(CHIP_DISTRIBUTED, 'No distributions received')
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSubscriptionsByNotDistributed() {
    cy.get(SUBSCRIPTION_AMOUNT_RECEIVED).each(($el) => {
      cy.wrap($el.text()).should('contain', '0')
    })
  }

  static filterSubscriptionsByUnits() {
    this.click(FILTER_CANCEL_ICON)
    this.click(FILTER_SUBSCRIPTIONS_BUTTON)
    this.click(FILTER_SUB_UNITS_YES_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_UNITS, 'Has units')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSubscriptionsByUnits() {
    cy.get(SUBSCRIPTION_UNITS).each(($el) => {
      cy.wrap($el.text()).should('not.contain', '(0%)')
    })
  }

  static filterSubscriptionsByNoUnits() {
    this.click(FILTER_SUBSCRIPTIONS_BUTTON)
    this.click(FILTER_SUB_UNITS_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_UNITS, 'No units')

    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSubscriptionsByNoUnits() {
    cy.get(SUBSCRIPTION_UNITS).each(($el) => {
      cy.wrap($el.text()).should('contain', '0%')
    })
  }

  static filterSubscriptionsNoResults() {
    this.click(FILTER_SUBSCRIPTIONS_BUTTON)
    this.click(FILTER_SUB_UNITS_YES_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    cy.get(SUBSCRIPTIONS_NO_RESULTS).should('be.visible')
  }

  static resetSubscriptionsFilter() {
    this.click(FILTER_SUBSCRIPTIONS_BUTTON)
    this.click(FILTER_RESET_BUTTON)
  }

  static filterSuperTokensByActive() {
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    this.click(FILTER_BUTTON)
    this.click(FILTER_ACTIVE_YES_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_ACTIVE, 'Has active streams')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSuperTokensByActive() {
    cy.get(ACTIVE_STREAM_COUNT).each(($el) => {
      cy.wrap($el.text()).should('not.eq', '0')
    })
  }

  static filterSuperTokensByNotActive() {
    this.click(FILTER_BUTTON)
    this.click(FILTER_ACTIVE_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_ACTIVE, 'Has no active streams')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSuperTokensByNotActive() {
    cy.get(ACTIVE_STREAM_COUNT).each(($el) => {
      cy.wrap($el.text()).should('eq', '0')
    })
  }

  static filterSuperTokensByClosed() {
    this.click(FILTER_CANCEL_ICON)
    this.click(FILTER_BUTTON)
    this.click(FILTER_CLOSED_YES_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_INACTIVE, 'Has inactive streams')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSuperTokensByClosed() {
    cy.get(CLOSED_STREAM_COUNT).each(($el) => {
      cy.wrap($el.text()).should('not.eq', '0')
    })
  }

  static filterSuperTokensByNotClosed() {
    this.click(FILTER_BUTTON)
    this.click(FILTER_CLOSED_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_INACTIVE, 'Has no inactive streams')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSuperTokensByNotClosed() {
    cy.get(CLOSED_STREAM_COUNT).each(($el) => {
      cy.wrap($el.text()).should('eq', '0')
    })
  }

  static filterSuperTokensByUnits() {
    this.click(FILTER_CANCEL_ICON)
    this.click(FILTER_BUTTON)
    this.click(FILTER_SUB_UNITS_YES_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_UNITS, 'Has subscriptions with units')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSuperTokensByUnits() {
    cy.get(SUBSCRIPTIONS_WITH_UNITS_COUNT).each(($el) => {
      cy.wrap($el.text()).should('not.eq', '0')
    })
  }

  static filterSuperTokensByNoUnits() {
    this.click(FILTER_BUTTON)
    this.click(FILTER_SUB_UNITS_NO_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.validateChip(CHIP_UNITS, 'Has no subscriptions with units')
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateFilteredSuperTokensByNoUnits() {
    cy.get(SUBSCRIPTIONS_WITH_UNITS_COUNT).each(($el) => {
      cy.wrap($el.text()).should('eq', '0')
    })
  }

  static filterSuperTokensNoResults() {
    this.click(FILTER_BUTTON)
    this.click(FILTER_ACTIVE_NO_BUTTON)
    this.click(FILTER_CLOSED_NO_BUTTON)
    this.click(FILTER_SUB_UNITS_YES_BUTTON)
    this.click(FILTER_CLOSE_BUTTON)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
    cy.get(NO_RESULTS).should('be.visible')
  }

  static filterEventsByEventName(network: string) {
    cy.fixture('filteringData').then((account) => {
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
      this.click(FILTER_BUTTON)
      this.type(FILTER_EVENT_NAME, account[network].eventName)
      this.click(FILTER_CLOSE_BUTTON)
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
    })
  }

  static validateFilteredEventsByEventName(network: string) {
    cy.fixture('filteringData').then((account) => {
      cy.get(EVENT_NAMES).each(($el) => {
        cy.wrap($el.text()).should('contain', account[network].eventName)
      })
    })
  }

  static filterEventsByTransactionHash(network: string) {
    cy.fixture('filteringData').then((account) => {
      this.click(FILTER_BUTTON)
      this.click(FILTER_CLOSE_ICON)
      this.type(FILTER_TRANSACTION_HASH, account[network].transactionHash)
      this.click(FILTER_CLOSE_BUTTON)
      this.isVisible(LOADING_SPINNER)
      this.isNotVisible(LOADING_SPINNER)
    })
  }

  static validateFilteredEventsByTransactionHash(network: string) {
    cy.fixture('filteringData').then((account) => {
      cy.get(EVENT_SHORT_TX_HASH).each(($el) => {
        cy.wrap($el.text()).should(
          'contain',
          this.getShortenedHashAddress(account[network].transactionHash)
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
    cy.get(NO_RESULTS).should('be.visible')
  }

  static validateSenderAddressesAfterFiltering() {
    cy.get('@senderAddresses').each((address, i) => {
      cy.get(SENDER_ADDRESS).eq(i).should('contain', address)
    })
  }

  static validateOnlyConnectedPoolsAreVisible() {
    cy.get(MEMBER_TABLE_CONNECTED).each((el) => {
      cy.wrap(el).should('have.text', 'Yes')
    })
  }

  static validateOnlyPoolsWithReceivedDistributionsAreVisible() {
    cy.get('body').then(($body) => {
      if ($body.find(MEMBER_TABLE_CONNECTED).length > 0) {
        cy.get(MEMBER_TABLE_CONNECTED).each((el) => {
          cy.wrap(el).should('have.text', 'Yes')
        })
      } else {
        cy.get(NO_MEMBERS_RESULTS)
      }
    })
  }
  static validateMembersTableFilterNotVisible() {
    this.doesNotExist(MEMBER_FILTER_HAS_RECEIVED_DISTRIBUTIONS_NO_BUTTON)
    this.doesNotExist(MEMBER_FILTER_HAS_RECEIVED_DISTRIBUTIONS_YES_BUTTON)
    this.doesNotExist(MEMBER_FILTER_HAS_UNITS_NO_BUTTON)
    this.doesNotExist(MEMBER_FILTER_HAS_UNITS_YES_BUTTON)
    this.doesNotExist(MEMBER_FILTER_IS_CONNECTED_NO_BUTTON)
    this.doesNotExist(MEMBER_FILTER_IS_CONNECTED_YES_BUTTON)
  }

  static validateOnlyPoolsWithMemberUnitsAreVisible() {
    cy.get('body').then(($body) => {
      if ($body.find(MEMBER_TABLE_POOL_UNITS).length > 0) {
        cy.get(MEMBER_TABLE_POOL_UNITS).each((el) => {
          cy.wrap(parseFloat(el.text().split(' ')[0])).should(
            'be.greaterThan',
            0
          )
        })
      } else {
        cy.get(NO_MEMBERS_RESULTS)
      }
    })
  }

  static validatePoolTableFilterNotVisible() {
    this.doesNotExist(POOL_FILTER_HAS_DISTRIBUTED_NO_BUTTON)
    this.doesNotExist(POOL_FILTER_HAS_DISTRIBUTED_YES_BUTTON)
    this.doesNotExist(POOL_FILTER_HAS_ISSUED_UNITS_NO_BUTTON)
    this.doesNotExist(POOL_FILTER_HAS_ISSUED_UNITS_YES_BUTTON)
    this.doesNotExist(POOL_FILTER_ID_INPUT)
  }

  static validateOnlyPoolsWithIssuedUnitsAreVisible() {
    cy.get('body').then(($body) => {
      if ($body.find(MEMBER_TABLE_CONNECTED).length > 0) {
        cy.get(MEMBER_TABLE_CONNECTED).each((el) => {
          cy.wrap(parseFloat(el.text().split(' ')[0])).should(
            'be.greaterThan',
            0
          )
        })
      } else {
        cy.get(NO_MEMBERS_RESULTS)
      }
    })
  }
  static validateOnlyPoolsWithDistributionAreVisible() {
    cy.get(POOLS_TOTAL_DISTRIBUTED).each((el) => {
      let number = parseFloat(el.text().replace(/[^\d\.]/g, ''))
      cy.wrap(number).should('be.greaterThan', 0)
    })
  }
  static filterGDAPoolsTableBy(filter: string, value: string, field: string) {
    let selectorPrefixForFilterButtons =
      filter === 'pools' ? 'filter' : 'filter-members'
    let filterButtonToClick =
      filter === 'pools' ? POOLS_FILTER_BUTTON : MEMBERS_FILTER_BUTTON
    this.click(filterButtonToClick)
    this.click(`[data-cy=${selectorPrefixForFilterButtons}-${field}-${value}]`)
    this.isVisible(LOADING_SPINNER)
    this.isNotVisible(LOADING_SPINNER)
  }

  static validateOnlyPoolsWithAddressAreVisible(address: string) {
    cy.get(POOL_IDS).each((id) => {
      cy.wrap(id).should('contain.text', address)
    })
  }
  static filterPoolsTableByAddress(address: string) {
    this.click(POOLS_FILTER_BUTTON)
    this.type(POOL_FILTER_ID_INPUT, address)
  }

  static validateNoResultsForMembersTable() {
    this.isVisible(NO_MEMBERS_RESULTS)
  }
  static validateNoResultsForPoolsTable() {
    this.isVisible(NO_POOLS_RESULTS)
  }

  static validateAdminAccountPoolsTableEntries(network: string) {
    cy.fixture('accountData').then((data) => {
      data[network].gdaAdminAccount.pools.forEach(
        (pool: any, index: number) => {
          cy.get(POOL_IDS).eq(index).should('contain.text', pool.id)
          cy.get(POOL_TOKENS)
            .eq(index)
            .should('contain.text', pool.token.symbol)
          cy.get(POOLS_TOTAL_DISTRIBUTED)
            .eq(index)
            .should(
              'contain.text',
              pool.totalAmountDistributedUntilUpdatedAt / 1e18
            )
          cy.get(POOLS_UNITS).eq(index).should('contain.text', pool.totalUnits)
        }
      )
    })
  }

  static validateMemberAccountMembersTableEntries(network: string) {
    cy.fixture('accountData').then((data) => {
      data[network].gdaMemberAccount.pools.forEach(
        (member: any, index: number) => {
          cy.get(MEMBER_TABLE_ADMINS)
            .eq(index)
            .should('have.text', this.getShortenedAddress(member.pool.admin.id))
          let expectedConnectionText = member.isConnected ? 'Yes' : 'No'
          cy.get(MEMBER_TABLE_CONNECTED)
            .eq(index)
            .should('have.text', expectedConnectionText)
          cy.get(MEMBER_TABLE_TOTAL_CLAIMED)
            .eq(index)
            .should(
              'have.text',
              `${member.pool.token.symbol}${member.totalAmountClaimed / 1e18}`
            )
          cy.get(MEMBER_TABLE_POOL_UNITS)
            .eq(index)
            .should(
              'contain.text',
              `(${calculatePoolPercentage(
                new Decimal(member.pool.totalUnits),
                new Decimal(member.units)
              )
                .toDP(2)
                .toString()}%)`
            )
        }
      )
    })
  }
  
  static validatePoolsTabDoesNotExist(){
    this.doesNotExist("[data-cy=pools-tab]")
  }
}
