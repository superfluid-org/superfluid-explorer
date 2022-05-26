import {BasePage} from "../BasePage";
import Decimal from "decimal.js";

const ACCOUNT_TYPE = "[data-cy=account-type] span"
const BORDER_ADD_TO_ADDRESS_BOOK_BUTTON = "[data-testid=StarBorderIcon]"
const FILLED_ADD_TO_ADDRESS_BOOK_BUTTON = "[data-testid=StarIcon]"
const NETWORK_NAME = "[data-cy=network-name] div"
const ACCOUNT_ADDRESS = "[data-cy=address]"
const OTHER_PARTY_ADDRESS = "[data-cy=account-address]"
const FLOW_RATES = "[data-field=currentFlowRate] span"
const TOTAL_STREAMED = "[data-cy=total-streamed]"
const PUBLICATIONS_BOX = "[data-cy=publications-box]"
const TOTAL_DISTRIBUTED = "[data-field=totalAmountDistributedUntilUpdatedAt]"
const TOTAL_UNITS = "[data-field=totalUnits]"
const TOKEN_ADDRESSES = "[data-cy=token-address]"
const PUBLICATION_TOKEN = "[data-field=token][role=cell] > *"
const PUBLICATION_TOTAL_DISTRIBUTED = "[data-cy=publications-total-distributed]"
const PUBLICATION_TOTAL_UNITS = "[data-cy=publications-units]"
const PUBLICATION_DETAILS_BUTTONS = "[data-cy=publications-details-buttons]"
const APPROVED_STATUSES = "[data-field=approved]"
const SUBSCRIPTION_UNITS = "[data-field=units]"
const ACTIVE_STREAM_COUNT = "[data-cy=active-streams]"
const CLOSED_STREAM_COUNT = "[data-cy=closed-streams]"
const SUBSCRIPTIONS_WITH_UNITS_COUNT = "[data-cy=subscriptions-with-units]"
const EVENT_NAMES = "[data-cy=event-name]"
const EVENT_BLOCK_NUMBER = "[data-cy=event-block-number]"
const EVENT_SHORT_TX_HASH = "[data-cy=transaction-hash]"
const INCOMING_TOKEN_NAMES = "[data-cy=incoming-total-streamed] [data-cy=token-link] span"
const OUTGOING_TOKEN_NAMES = "[data-cy=outgoing-total-streamed] [data-cy=token-link] span"
const SENDER_ADDRESS = "[data-cy=incoming-sender]"
const RECEIVER_ADDRESS = "[data-cy=outgoing-receiver]"
const INCOMING_FLOW_RATES = "[data-cy=incoming-flow-rate]"
const OUTGOING_FLOW_RATES = "[data-cy=outgoing-flow-rate]"
const INCOMING_TOTAL_STREAMED = "[data-cy=incoming-total-streamed] [data-cy=total-streamed]"
const OUTGOING_TOTAL_STREAMED = "[data-cy=outgoing-total-streamed] [data-cy=total-streamed]"
const INCOMING_NO_RESULTS = "[data-cy=incoming-no-results]"
const OUTGOING_NO_RESULTS = "[data-cy=outgoing-no-results]"
const PUBLICATIONS_NO_RESULTS = "[data-cy=publications-no-results]"
const SUBSCRIPTIONS_NO_RESULTS = "[data-cy=subscriptions-no-results]"
const PUBLICATION_TOKEN_NAMES = "[data-cy=publications-total-distributed] [data-cy=token-link] span"
const SUBSCRIPTION_TOKEN_NAMES = "[data-cy=subscriptions-total-distributed] [data-cy=token-link] span"


export class AccountPage extends BasePage {

  static clickAddressBookButton() {
    this.click(BORDER_ADD_TO_ADDRESS_BOOK_BUTTON)
  }

  static addressBookButtonIsFilled() {
    this.doesNotExist(BORDER_ADD_TO_ADDRESS_BOOK_BUTTON)
    this.isVisible(FILLED_ADD_TO_ADDRESS_BOOK_BUTTON)
  }

  static validateAccountAddressTypeAndNetwork(network: string) {
    cy.fixture("accountData").then(account => {
      this.hasText(ACCOUNT_TYPE, account[network].accountType)
      this.hasText(ACCOUNT_ADDRESS, this.getShortenedAddress(account[network].address))
      this.hasText(NETWORK_NAME, account[network].networkFancyName)
    })
  }

  static validateStreamsIncomingStreams(index: number, stream: any) {
    cy.get(INCOMING_TOKEN_NAMES).eq(index).should("contain.text", stream.token)
    cy.get(SENDER_ADDRESS).eq(index).should("contain.text", this.getShortenedAddress(stream.receiver))
    cy.get(INCOMING_FLOW_RATES).eq(index).should("contain.text", stream.flowRate)
    cy.get(INCOMING_TOTAL_STREAMED).eq(index).should("contain.text", stream.totalStreamed)
  }

  static validateStreamsOutgoingStreams(index: number, stream: any) {
    cy.get(OUTGOING_TOKEN_NAMES).eq(index).should("contain.text", stream.token)
    cy.get(RECEIVER_ADDRESS).eq(index).should("contain.text", this.getShortenedAddress(stream.receiver))
    cy.get(OUTGOING_FLOW_RATES).eq(index).should("contain.text", stream.flowRate)
    cy.get(OUTGOING_TOTAL_STREAMED).eq(index).should("contain.text", stream.totalStreamed)
  }

  static validateStreamsTabEntries(network: string) {
    cy.fixture("accountData").then(account => {
      if ((account[network].streams.incoming).length === 0) {
        this.validateNoIncomingStreams()
      } else {
        account[network].streams.incoming.forEach((stream: any, index: number) => {
          this.validateStreamsIncomingStreams(index, stream)
        })
      }
      if ((account[network].streams.outgoing).length === 0) {
        this.validateNoOutgoingStreams()
      } else {
        account[network].streams.outgoing.forEach((stream: any, index: number) => {
          this.validateStreamsOutgoingStreams(index, stream)
        })
      }
    })
  }

  static validateNoIncomingStreams() {
    cy.get(INCOMING_NO_RESULTS).should("be.visible")
    cy.get(INCOMING_TOKEN_NAMES).should("not.exist")
  }

  static validateNoOutgoingStreams() {
    cy.get(OUTGOING_NO_RESULTS).should("be.visible")
    cy.get(OUTGOING_TOKEN_NAMES).should("not.exist")
  }

  static validateNoPublications() {
    cy.get(PUBLICATIONS_NO_RESULTS).should("be.visible")
    cy.get(PUBLICATION_TOKEN_NAMES).should("not.exist")
  }

  static validateNoSubscriptions() {
    cy.get(SUBSCRIPTIONS_NO_RESULTS).should("be.visible")
    cy.get(SUBSCRIPTION_TOKEN_NAMES).should("not.exist")
  }

  static validateIndexTabEntries(network: string) {
    cy.fixture("accountData").then(account => {
      if ((account[network].indexes.publications).length === 0) {
        this.validateNoPublications()
      } else {
        account[network].indexes.publications.forEach((ida: any, index: number) => {
          //Currently not checking account with distributions, should actually deploy an IDA for testing purposes on matic too
          //Selectors are already defined at the top, just need to do the logic here and add data to fixtures
        })
      }
      if ((account[network].indexes.subscriptions).length === 0) {
        this.validateNoSubscriptions()
      } else {
        account[network].indexes.subscriptions.forEach((ida: any, index: number) => {
          //Currently not checking account with distributions, should actually deploy an IDA for testing purposes on matic too
          //Selectors are already defined at the top, just need to do the logic here and add data to fixtures
        })
      }
    })
  }

  static validateSuperAppPublicationEntries(network: string) {
    cy.fixture("accountData").then(account => {
      if ((account[network].superApp.indexes.publications).length === 0) {
        this.validateNoPublications()
      } else {
        account[network].superApp.indexes.publications.forEach((publication: any, index: number) => {
          cy.get(PUBLICATION_TOKEN_NAMES).eq(index).should("contain.text", publication.token)
          this.replaceSpacesAndAssertText(PUBLICATION_TOTAL_DISTRIBUTED, publication.token + publication.totalDistributed, index)
          cy.get(PUBLICATION_TOTAL_UNITS).eq(index).should("contain.text", publication.totalUnits)
        })
      }
    })
  }

  static openFirstPublicationDetails() {
    cy.get(PUBLICATION_DETAILS_BUTTONS).eq(0).click()
  }

  static validateTokensTabEntries(network: string) {
    cy.fixture("accountData").then(account => {
      account[network].superTokens.forEach((token: any, index: number) => {
        cy.get(TOKEN_ADDRESSES).eq(index).should("contain.text", token.tokenName)
        cy.get(TOTAL_STREAMED).eq(index).should("contain.text", token.balance)
        cy.get(ACTIVE_STREAM_COUNT).eq(index).should("contain.text", token.activeStreamCount)
        cy.get(CLOSED_STREAM_COUNT).eq(index).should("contain.text", token.closedStreamCount)
        cy.get(SUBSCRIPTIONS_WITH_UNITS_COUNT).eq(index).should("contain.text", token.subscriptionWithUnitsCount)
      })
    })
  }

  static validateEventsTabEntries(network: string) {
    cy.fixture("accountData").then(account => {
      account[network].events.forEach((event: any, index: number) => {
        cy.get(EVENT_NAMES).eq(index).should("contain.text", event.name)
        cy.get(EVENT_BLOCK_NUMBER).eq(index).should("contain.text", event.blockNumber)
        cy.get(EVENT_SHORT_TX_HASH).eq(index).should("contain.text", event.shortTransactionHash)
      })
    })
  }

  static validateChangedFlowGranularity(granularity: string, network: string) {
    let granularityMultiplier: number
    switch (granularity) {
      case "second":
        granularityMultiplier = 1
        break;
      case "minute":
        granularityMultiplier = 60
        break;
      case "hour":
        granularityMultiplier = 3600
        break;
      case "day":
        granularityMultiplier = 86400
        break;
      case "week":
        granularityMultiplier = 604800
        break;
      case "month":
        granularityMultiplier = 2592000
        break;
    }

    cy.fixture("accountData").then(fixture => {
      fixture[network].ongoingStreamAccount.streams.incoming.forEach((stream: { flowRate: string }, index: number) => {
        cy.get(INCOMING_FLOW_RATES).eq(index).then(el => {
          let expectedFlowAmount = ((parseFloat(stream.flowRate) * granularityMultiplier)).toFixed(18).toString()
          let flowWithoutZeros = new Decimal(expectedFlowAmount).toDP(18).toFixed()
          let expectedString = flowWithoutZeros + "/" + granularity
          cy.wrap(el.text()).should("eq", expectedString)
        })
      })
    })
  }

  static validateHelpAlertAndLink(alert: string) {
    cy.fixture("toolTipStringsAndLinks").then(fixture => {
      this.hasText("[data-cy=" + alert + "-help-alert]", fixture[alert + "-help-alert"])
      this.hasAttributeWithValue("[data-cy=" + alert + "-help-alert-link]", "href", fixture[alert + "-help-alert-link"])
    })
  }

  static hoverTooltipAndValidateLink(tooltip: string) {
    cy.fixture("toolTipStringsAndLinks").then(fixture => {
      cy.get("[data-cy=" + tooltip + "-tooltip]").trigger("mouseover").then(el => {
        cy.wrap(el).should("have.attr", "aria-labelledby").then(attr => {
          this.hasText(`[id="${attr}"]`, fixture[tooltip + "-tooltip"])
          this.hasAttributeWithValue("[data-cy=" + tooltip + "-tooltip-link]", "href", fixture[tooltip + "-tooltip-link"])
        })
      })
    })
  }
}
