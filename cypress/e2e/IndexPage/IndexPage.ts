import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

import { CommonElements } from '../../pageObjects/components/CommonElements'
import { IndexPage } from '../../pageObjects/pages/IndexPage'
import { LandingPage } from '../../pageObjects/pages/LandingPage'

Given(`User has opened the {string} page on {string}`, (page, network) => {
  LandingPage.openDataPage(page, network)
})

Then(
  `Index general information is showing correct data for {string}`,
  (network) => {
    IndexPage.validateIndexGeneralInformation(network)
  }
)

Then(`Index units overview is showing correct data for {string}`, (network) => {
  IndexPage.validateIndexUnitsOverview(network)
})

Then(`Distributions table is showing correct data for {string}`, (network) => {
  IndexPage.validateDistributionsTable(network)
})

Then(`Subscriptions table is showing correct data for {string}`, (network) => {
  IndexPage.validateSubscriptionsTable(network)
})
Then(`User opens the first subscription details`, () => {
  IndexPage.openFirstSubscriptionDetails()
})
Then(`Subscription page container is visible`, () => {
  CommonElements.subscriptionContainerVisible()
})
