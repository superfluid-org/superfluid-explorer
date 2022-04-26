import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {SuperTokensPage} from "../../pageObjects/pages/SuperTokensPage";

Given("User has opened the tokens page page on {string}", () => {
  SuperTokensPage.openTokensPage()
})

Then("Super tokens are visible for {string}", () => {
  SuperTokensPage.validateSuperTokens("matic")
})


Then("User switches network for {string}", () => {
  SuperTokensPage.switchNetworks("optimism-mainnet")
})


Then("User filters super tokens by name", () => {
  SuperTokensPage.filterByTokenName("matic")
  SuperTokensPage.resetFilter()
})

Then("User filters super tokens by symbol", () => {
  SuperTokensPage.filterByTokenSymbol("matic")
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







