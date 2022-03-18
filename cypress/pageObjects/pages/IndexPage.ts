import {BasePage} from "../BasePage";

const INDEX_TOKEN = "[data-cy=index-general-info] [data-cy=token-address]"
const PUBLISHER_ADDRESS = "[data-cy=index-general-info] [data-cy=account-address]"
const INDEX_ID = "[data-cy=index-id] span"
const TOTAL_UNITS = "[data-cy=total-units] span"
const TOTAL_UNITS_APPROVED = "[data-cy=total-units-approved] span"
const TOTAL_UNITS_PENDING = "[data-cy=total-units-pending] span"
const TOTAL_AMOUNT_DISTRIBUTED = "[data-cy=total-amount-distributed] span"
const DISTRIBUTION_AMOUNTS = "[data-field=distributionAmount][role=cell]"
const SUBSCRIPTIONS_APPROVED = "[data-field=approved][role=cell]"
const SUBSCRIPTIONS_RECEIVED_AMOUNT = "[data-field=totalAmountReceivedUntilUpdatedAt][role=cell]"
const SUBSCRIPTIONS_UNITS = "[data-field=units][role=cell]"
const SUBSCRIPTION_DETAILS_BUTTONS = "[data-field=details][role=cell] button"

export class IndexPage extends BasePage {

  static validateIndexGeneralInformation(network: string) {
    cy.fixture("accountData").then(fixture => {
      cy.wrap(fixture[network].superApp.indexes.publications[0]).then((index: any) => {
        this.hasText(INDEX_TOKEN, index.token)
        this.hasText(PUBLISHER_ADDRESS, index.details.publisher)
        this.hasText(INDEX_ID, index.details.indexId)
      })
    })
  }

  static validateIndexUnitsOverview(network: string) {
    cy.fixture("accountData").then(fixture => {
      cy.wrap(fixture[network].superApp.indexes.publications[0]).then((index: any) => {
        this.hasText(TOTAL_UNITS, index.totalUnits)
        this.hasText(TOTAL_UNITS_APPROVED, index.details.totalUnitsApproved)
        this.hasText(TOTAL_UNITS_PENDING, index.details.totalUnitsPending)
        //Cypress assertions don't work with &nbsp very well , so removing it from the text before asserting
        cy.get(TOTAL_AMOUNT_DISTRIBUTED).invoke("text").invoke("replace", /\u00a0/g, ' ').should("eq", index.totalDistributed)
      })
    })
  }

  static validateDistributionsTable(network: string) {
    cy.fixture("accountData").then(fixture => {
      fixture[network].superApp.indexes.publications[0].details.distributions.forEach((distribution: { distributionAmount: string }, index: number) => {
        //Cypress assertions don't work with &nbsp very well , so removing it from the text before asserting
        cy.get(DISTRIBUTION_AMOUNTS).eq(index).invoke("text").invoke("replace", /\u00a0/g, ' ').should("eq", distribution.distributionAmount)
      })
    })
  }

  static validateSubscriptionsTable(network: string) {
    cy.fixture("accountData").then(fixture => {
      fixture[network].superApp.indexes.publications[0].details.subscriptions.forEach((subscription: any, index: number) => {
        cy.get(SUBSCRIPTIONS_APPROVED).eq(index).should("have.text", subscription.approved)
        //Cypress assertions don't work with &nbsp very well , so removing it from the text before asserting
        cy.get(SUBSCRIPTIONS_UNITS).eq(index).invoke("text").invoke("replace", /\u00a0/g, ' ').should("eq", subscription.subscriptionUnits)
        cy.get(SUBSCRIPTIONS_RECEIVED_AMOUNT).eq(index).should("contain.text", subscription.totalAmountReceived)
      })
    })
  }

  static openFirstSubscriptionDetails() {
    cy.get(SUBSCRIPTION_DETAILS_BUTTONS).first().click()
  }
}
