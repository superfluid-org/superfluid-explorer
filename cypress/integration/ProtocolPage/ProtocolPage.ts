import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { LandingPage } from "../../pageObjects/pages/LandingPage";
import { ProtocolPage } from "../../pageObjects/pages/ProtocolPage";

Given(`User has opened the {string} page`, (page) => {
  LandingPage.openPage(page);
});

Then("User switches network for {string}", (network) => {
  ProtocolPage.switchNetwork(network);
});

Then(
  "General protocol information is showing correct data for {string}",
  (network) => {
    ProtocolPage.validateGovernanceParameters(network);
    ProtocolPage.validateContractAddresses(network);
  }
);

Given("User clicks on the protocol button", () => {
  ProtocolPage.clickProtocolButton();
});
