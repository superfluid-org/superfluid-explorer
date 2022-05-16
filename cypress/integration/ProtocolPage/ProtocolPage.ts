import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {ProtocolPage} from "../../pageObjects/pages/ProtocolPage";
import {LandingPage} from "../../pageObjects/pages/LandingPage";

Given(`User has opened the {string} page`, (page) => {
  LandingPage.openPage(page)
});

Then("User switches network for {string}", (network) => {
  ProtocolPage.switchLNetwork(network)
})

Then("General protocol information is showing correct data for {string}", (network) => {
  ProtocolPage.validateGovernanceParameters(network)
  ProtocolPage.validateContractAddresses(network)
})

Given("User clicks on the protocol button", () => {
  ProtocolPage.clickProtocolButton()
});
