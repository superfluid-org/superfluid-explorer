import { Given, When } from 'cypress-cucumber-preprocessor/steps'

import { LandingPage } from '../../pageObjects/pages/LandingPage'
import { PoolMemberPage } from '../../pageObjects/pages/PoolMemberPage'

When(`Information about the pool member is showing up correctly`, () => {
  PoolMemberPage.validatePoolMemberGeneralData('avalanche-fuji')
})
Given(`Pool member flow distributions table shows the correct data`, () => {
  PoolMemberPage.validatePoolMemberFlowDistributionsTable('avalanche-fuji')
})
Given(`Pool member instant distributions table shows the correct data`, () => {
  PoolMemberPage.validatePoolMemberInstantDistributionsTable('avalanche-fuji')
})
Given(`Pool member unit update table shows the correct data`, () => {
  PoolMemberPage.validatePoolMemberUnitUpdateTable('avalanche-fuji')
})
Given(`User has opened the {string} page on {string}`, (page, network) => {
  LandingPage.openDataPage(page, network)
})
