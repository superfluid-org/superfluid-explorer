import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

import { LandingPage } from '../../pageObjects/pages/LandingPage'
import { StreamsPage } from '../../pageObjects/pages/StreamsPage'
import { CommonElements } from '../../pageObjects/components/CommonElements'

Given(`User has opened the {string} page on {string}`, (page, network) => {
  LandingPage.openDataPage(page, network)
})

Then(
  `The streamed token , sender and receiver are shown on {string}`,
  (network) => {
    StreamsPage.validateTokenSenderReceiver(network)
  }
)

Then(
  `The current stream flow rate and total amount streamed are shown on {string}`,
  (network) => {
    StreamsPage.validateFlowRateAndTotalAmountStreamed(network)
  }
)
Then(`Stream period data is shown on {string}`, (network) => {
  StreamsPage.validateStreamPeriods(network)
})

Then(`User opens the settings menu`, () => {
  CommonElements.openSettingsMenu()
})
Given(`User changes the stream granularity to {string}`, (granularity) => {
  CommonElements.changeGranularity(granularity)
})
Then(`User closes the settings menu`, () => {
  CommonElements.closeSettingsMenu()
})

Given(`User changes the ether decimal places to {int}`, (num) => {
  CommonElements.changeDecimalPlaces(num)
})
