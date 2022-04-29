import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {SuperTokensPage} from "../../pageObjects/pages/SuperTokensPage";
import {LandingPage} from "../../pageObjects/pages/LandingPage";

Given("User opens {string} page", (page) => {
  LandingPage.openPage(page)
})

Then("User switches network for {string} and validates data", (network) => {
  SuperTokensPage.switchLNetworkAndValidateTokens(network)
})

Then("User filters super tokens by name for {string}", (network) => {
  SuperTokensPage.filterByTokenName(network)
  SuperTokensPage.resetFilter()
})

Then("User filters super tokens by symbol for {string}", (network) => {
  SuperTokensPage.filterByTokenSymbol(network)
  SuperTokensPage.resetFilter()
})

Then("User filters super tokens by listed", () => {
  SuperTokensPage.filterByListed()
  SuperTokensPage.resetFilter()
})

Then("User filters super tokens by not listed", () => {
  SuperTokensPage.filterByNotListed()
  SuperTokensPage.resetFilter()
})







