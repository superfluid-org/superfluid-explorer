import { BasePage } from '../BasePage'

const INDEX_SHORT_HASH = '[data-cy=index-subscription-short-hash] a'
const SUBSCRIPTION_TOKEN = '[data-cy=index-subscription-token] a'
const INDEX_PUBLISHER = '[data-cy=subscription-publisher] a'
const INDEX_SUBSCRIBER = '[data-cy=subscription-subscriber] a'
const POOL_UNITS = '[data-cy=subscription-units]'
const APPROVAL = '[data-cy=subscription-approval] span'
const TOTAL_AMOUNT_RECEIVED =
  '[data-cy=subscription-total-amount-received] span'
const DISTRIBUTIONS_AMOUNT_RECEIVED = '[data-field=newIndexValue][role=cell]'
const UNITS_UPDATED = '[data-field=units][role=cell]'

export class IndexSubscriptionPage extends BasePage {
  static validateSubscriptionGeneralInfo(network: string) {
    cy.fixture('accountData').then((fixture) => {
      cy.wrap(
        fixture[network].idaAccount.indexes.publications[0].details
          .subscriptions[0].details
      ).then((subscription: any) => {
        this.hasText(INDEX_SHORT_HASH, subscription.shortIndex)
        this.hasText(SUBSCRIPTION_TOKEN, subscription.token)
        this.hasText(INDEX_PUBLISHER, subscription.publisher)
        this.hasText(INDEX_SUBSCRIBER, subscription.subscriber)
      })
    })
  }

  static validateSubscriptionUnitsInfo(network: string) {
    cy.fixture('accountData').then((fixture) => {
      cy.wrap(
        fixture[network].idaAccount.indexes.publications[0].details
          .subscriptions[0].details
      ).then((subscription: any) => {
        this.containsText(POOL_UNITS, subscription.units)
        this.hasText(APPROVAL, subscription.approved)
        this.containsText(
          TOTAL_AMOUNT_RECEIVED,
          subscription.totalAmountReceived
        )
      })
    })
  }

  static validateSubscriptionDistributions(network: string) {
    cy.fixture('accountData').then((fixture) => {
      fixture[
        network
      ].idaAccount.indexes.publications[0].details.subscriptions[0].details.distributions.forEach(
        (distribution: any, index: number) => {
          cy.get(DISTRIBUTIONS_AMOUNT_RECEIVED)
            .eq(index)
            .should('be.visible')
            .and('contain.text', distribution.amountReceived)
        }
      )
    })
  }

  static validateSubscriptionUnitsUpdated(network: string) {
    cy.fixture('accountData').then((fixture) => {
      fixture[
        network
      ].idaAccount.indexes.publications[0].details.subscriptions[0].details.unitsUpdated.forEach(
        (unitsUpdate: any, index: number) => {
          cy.get(UNITS_UPDATED)
            .eq(index)
            .should('contain.text', unitsUpdate.units)
        }
      )
    })
  }
}
