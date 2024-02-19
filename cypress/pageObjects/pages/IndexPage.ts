import { BasePage } from '../BasePage'

const INDEX_TOKEN = '[data-cy=index-general-info] [data-cy=token-address]'
const PUBLISHER_ADDRESS =
  '[data-cy=index-general-info] [data-cy=account-address]'
const INDEX_ID = '[data-cy=index-id] span'
const TOTAL_UNITS = '[data-cy=total-units] span'
const TOTAL_UNITS_APPROVED = '[data-cy=total-units-approved] span'
const TOTAL_UNITS_PENDING = '[data-cy=total-units-pending] span'
const TOTAL_AMOUNT_DISTRIBUTED = '[data-cy=total-amount-distributed] span'
const DISTRIBUTION_AMOUNTS = '[data-field=distributionAmount][role=cell]'
const SUBSCRIPTIONS_APPROVED = '[data-field=approved][role=cell]'
const SUBSCRIPTIONS_RECEIVED_AMOUNT =
  '[data-field=totalAmountReceivedUntilUpdatedAt][role=cell]'
const SUBSCRIPTIONS_UNITS = '[data-field=units][role=cell]'
const SUBSCRIPTION_DETAILS_BUTTONS = '[data-field=details][role=cell] button'

export class IndexPage extends BasePage {
  static validateIndexGeneralInformation(network: string) {
    cy.fixture('accountData').then((fixture) => {
      cy.wrap(fixture[network].idaAccount.indexes.publications[0]).then(
        (index: any) => {
          this.containsText(INDEX_TOKEN, index.token)
          this.hasText(PUBLISHER_ADDRESS, index.details.publisher)
          this.hasText(INDEX_ID, index.details.indexId)
        }
      )
    })
  }

  static validateIndexUnitsOverview(network: string) {
    cy.fixture('accountData').then((fixture) => {
      cy.wrap(fixture[network].idaAccount.indexes.publications[0]).then(
        (index: any) => {
          this.hasText(TOTAL_UNITS, index.totalUnits)
          cy.get(TOTAL_UNITS_APPROVED).then((el) => {
            let approvedUnits = parseInt(el.text())
            cy.get(TOTAL_UNITS_PENDING).then((el) => {
              let pendingUnits = parseInt(el.text())
              cy.get(TOTAL_UNITS).should(
                'have.text',
                approvedUnits + pendingUnits
              )
            })
          })
          this.replaceSpacesAndAssertText(
            TOTAL_AMOUNT_DISTRIBUTED,
            index.token + index.totalDistributed
          )
        }
      )
    })
  }

  static validateDistributionsTable(network: string) {
    cy.fixture('accountData').then((fixture) => {
      fixture[
        network
      ].idaAccount.indexes.publications[0].details.distributions.forEach(
        (distribution: { distributionAmount: string }, index: number) => {
          this.replaceSpacesAndAssertText(
            DISTRIBUTION_AMOUNTS,
            distribution.distributionAmount.replaceAll('~', ''),
            index
          )
        }
      )
    })
  }

  static validateSubscriptionsTable(network: string) {
    cy.fixture('accountData').then((fixture) => {
      fixture[
        network
      ].idaAccount.indexes.publications[0].details.subscriptions.forEach(
        (subscription: any, index: number) => {
          cy.get(SUBSCRIPTIONS_APPROVED)
            .eq(index)
            .should('have.text', subscription.approved)
          this.replaceSpacesAndAssertText(
            SUBSCRIPTIONS_UNITS,
            subscription.subscriptionUnits,
            index
          )
          cy.get(SUBSCRIPTIONS_RECEIVED_AMOUNT)
            .eq(index)
            .should('contain.text', subscription.totalAmountReceived)
        }
      )
    })
  }

  static openFirstSubscriptionDetails() {
    cy.get(SUBSCRIPTION_DETAILS_BUTTONS).first().click()
  }
}
