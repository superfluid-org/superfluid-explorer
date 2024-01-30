import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

import { AccountPage } from '../../pageObjects/pages/AccountPage'
import { LandingPage } from '../../pageObjects/pages/LandingPage'
import { PoolPage } from '../../pageObjects/pages/PoolPage'

Given(`Information about the pool is showing up correctly`, () => {
  PoolPage.validatePoolData('avalanche-fuji')
})

Given(`The pool flow distributions table shows the correct data`, () => {
  PoolPage.validateFlowDistributionTable('avalanche-fuji')
})

Given(`The pool instant distributions table shows the correct data`, () => {
  PoolPage.validateInstantDistributionTable('avalanche-fuji')
})

Given(`The pool members table shows the correct data`, () => {
  PoolPage.validateMemberTableData('avalanche-fuji')
})

Given(`User has opened the {string} page on {string}`, (page, network) => {
  LandingPage.openDataPage(page, network)
})

Then(
  `Tooltip is visible when user hovers the {string} tooltip icon`,
  (tooltip) => {
    AccountPage.hoverTooltipAndValidateLink(tooltip)
  }
)
