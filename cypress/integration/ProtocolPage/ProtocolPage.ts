import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { LandingPage } from "../../pageObjects/pages/LandingPage";
import { ProtocolPage } from "../../pageObjects/pages/ProtocolPage";

Given(`User has opened the {string} page`, (page) => {
  LandingPage.openPage(page);
});

Then("User switches network for {string}", (network) => {
  ProtocolPage.switchLNetwork(network);
});

Then(
  "General protocol information is showing correct data for {string}",
  (network) => {
    ProtocolPage.validateGovernanceParameters(network);
    ProtocolPage.validateContractAddresses(network);
  }
);

Then("User turns on {string} network", (network) => {
  ProtocolPage.turnOnTestnet(network);
});

Given("User clicks on the protocol button", () => {
  ProtocolPage.clickProtocolButton();
});
