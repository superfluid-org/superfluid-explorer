import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {TokenGovernancePage} from "../../pageObjects/pages/TokenGovernancePage";
import {LandingPage} from "../../pageObjects/pages/LandingPage";

Given(`User has opened the {string} page`, (page) => {
  LandingPage.openPage(page)
});

Then("User switches network for {string} and validates data", (network) => {
  TokenGovernancePage.switchNetworkAndValidateTokens(network)
})

Then("User filters super tokens by name for {string}", (network) => {
  TokenGovernancePage.filterByTokenName(network)
  TokenGovernancePage.resetFilter()
})

Then("User filters super tokens by symbol for {string}", (network) => {
  TokenGovernancePage.filterByTestTokenSymbolOn(network)
  TokenGovernancePage.resetFilter()
})

Then("User filters super tokens by listed", () => {
  TokenGovernancePage.filterByListed()
  TokenGovernancePage.resetFilter()
})

Then("User filters super tokens by not listed", () => {
  TokenGovernancePage.filterByNotListed()
  TokenGovernancePage.resetFilter()
})

Given("User clicks on the tokens button", () => {
  LandingPage.openTokenGovernancePage()
});
