import {BasePage} from "../BasePage";

const ACCOUNT_TYPE = "[data-cy=account-type] span"
const BORDER_ADD_TO_ADDRESS_BOOK_BUTTON = "[data-testid=StarBorderIcon]"
const FILLED_ADD_TO_ADDRESS_BOOK_BUTTON = "[data-testid=StarIcon]"
const TOKEN_NAMES = "[data-field=token] a"
const NETWORK_NAME = "[data-cy=network-name] div"
const WALLET_ADDRESS = "[data-cy=address] div"
const INCOMING_BOX = "[data-cy=incoming-box]"
const OUTGOING_BOX = "[data-cy=outgoing-box]"
const OTHER_PARTY_ADDRESS = "[data-cy=wallet-address]"
const FLOW_RATES = "[data-field=currentFlowRate] span"
const TOTAL_STREAMED = "[data-cy=total-streamed]"
const PUBLICATIONS_BOX = "[data-cy=publications-box]"
const SUBSCRIPTIONS_BOX = "[data-cy=subscriptions-box]"
const TOTAL_DISTRIBUTED = "[data-field=totalAmountDistributedUntilUpdatedAt]"
const TOTAL_UNITS = "[data-field=totalUnits]"
const TOKEN_ADDRESSES = "[data-cy=token-address]"
const APPROVED_STATUSES = "[data-field=approved]"
const TOTAL_AMOUNT_RECEIVED = "[data-field=totalAmountReceivedUntilUpdatedAt]"
const SUBSCRIPTION_UNITS = "[data-field=units]"
const ACTIVE_STREAM_COUNT = "[data-field=totalNumberOfActiveStreams][role=cell]"
const CLOSED_STREAM_COUNT = "[data-field=totalNumberOfClosedStreams][role=cell]"
const SUBSCRIPTIONS_WITH_UNITS_COUNT = "[data-field=totalSubscriptionsWithUnits][role=cell]"
const EVENT_NAMES = "[data-field=name][role=cell]"
const EVENT_BLOCK_NUMBER = "[data-field=blockNumber][role=cell]"
const EVENT_SHORT_TX_HASH = "[data-field=transactionHash] a div"


export class WalletPage extends BasePage {

  static clickAddressBookButton() {
    this.click(BORDER_ADD_TO_ADDRESS_BOOK_BUTTON)
  }

  static addressBookButtonIsFilled() {
    this.doesNotExist(BORDER_ADD_TO_ADDRESS_BOOK_BUTTON)
    this.isVisible(FILLED_ADD_TO_ADDRESS_BOOK_BUTTON)
  }

  static validateWalletAddressTypeAndNetwork(network: string) {
    cy.fixture("walletData").then(wallet => {
      this.hasText(ACCOUNT_TYPE, wallet[network].accountType)
      this.hasText(WALLET_ADDRESS, wallet[network].address)
      this.hasText(NETWORK_NAME, wallet[network].networkFancyName)
    })
  }

  static validateStreamsInBox(boxSelector: string, index: number, stream: any) {
    cy.get(boxSelector).children().find(TOKEN_NAMES).eq(index).should("contain.text", stream.token)
    cy.get(boxSelector).children().find(OTHER_PARTY_ADDRESS).eq(index).should("contain.text", stream.receiver)
    cy.get(boxSelector).children().find(FLOW_RATES).eq(index).should("contain.text", stream.flowRate)
    cy.get(boxSelector).children().find(TOTAL_STREAMED).eq(index).should("contain.text", stream.totalStreamed)
  }

  static validateStreamsTabEntries(network: string) {
    cy.fixture("walletData").then(wallet => {
      if ((wallet[network].streams.incoming).length === 0) {
        this.validateNoRowsInBox(INCOMING_BOX)
      } else {
        wallet[network].streams.incoming.forEach((stream: any, index: number) => {
          this.validateStreamsInBox(INCOMING_BOX, index, stream)
        })
      }
      if ((wallet[network].streams.outgoing).length === 0) {
        this.validateNoRowsInBox(OUTGOING_BOX)
      } else {
        wallet[network].streams.outgoing.forEach((stream: any, index: number) => {
          this.validateStreamsInBox(OUTGOING_BOX, index, stream)
        })
      }
    })
  }

  static validateNoRowsInBox(boxSelector: string) {
    cy.get(boxSelector).children().contains("No rows").should("be.visible")
    cy.get(boxSelector).children().find(TOKEN_NAMES).should("not.exist")
  }

  static validateIndexTabEntries(network: string) {
    cy.fixture("walletData").then(wallet => {
      if ((wallet[network].indexes.publications).length === 0) {
        this.validateNoRowsInBox(PUBLICATIONS_BOX)
      } else {
        wallet[network].indexes.publications.forEach((ida: any, index: number) => {
          //Currently not checking wallet with distributions, should actually deploy an IDA for testing purposes on matic too
          //Selectors are already defined at the top, just need to do the logic here and add data to fixtures
        })
      }
      if ((wallet[network].indexes.subscriptions).length === 0) {
        this.validateNoRowsInBox(SUBSCRIPTIONS_BOX)
      } else {
        wallet[network].indexes.subscriptions.forEach((ida: any, index: number) => {
          //Currently not checking wallet with distributions, should actually deploy an IDA for testing purposes on matic too
          //Selectors are already defined at the top, just need to do the logic here and add data to fixtures
        })
      }
    })
  }

  static validateTokensTabEntries(network: string) {
    cy.fixture("walletData").then(wallet => {
      wallet[network].superTokens.forEach((token: any, index: number) => {
        cy.get(TOKEN_ADDRESSES).eq(index).should("contain.text", token.tokenName)
        cy.get(TOTAL_STREAMED).eq(index).should("contain.text", token.balance)
        cy.get(ACTIVE_STREAM_COUNT).eq(index).should("contain.text", token.activeStreamCount)
        cy.get(CLOSED_STREAM_COUNT).eq(index).should("contain.text", token.closedStreamCount)
        cy.get(SUBSCRIPTIONS_WITH_UNITS_COUNT).eq(index).should("contain.text", token.subscriptionWithUnitsCount)
      })
    })
  }

  static validateEventsTabEntries(network: string) {
    cy.fixture("walletData").then(wallet => {
      wallet[network].events.forEach((event: any, index: number) => {
        cy.get(EVENT_NAMES).eq(index).should("contain.text", event.name)
        cy.get(EVENT_BLOCK_NUMBER).eq(index).should("contain.text", event.blockNumber)
        cy.get(EVENT_SHORT_TX_HASH).eq(index).should("contain.text", event.shortTransactionHash)
      })

    })
  }
}
