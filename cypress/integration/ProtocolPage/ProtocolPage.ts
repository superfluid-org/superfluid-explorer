import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {ProtocolPage} from "../../pageObjects/pages/ProtocolPage";

// @mariam The step accepts an argument, but you are never using it and the openProtocolPage function
// does not accept any arguments.
Given("User has opened the protocol page page on {string}", () => {
  ProtocolPage.openProtocolPage()
});

// @mariam The step accepts an argument, but you are never using it and have matic hardcoded
Then("General protocol information is showing correct data for {string}", () => {
  ProtocolPage.validateGovernanceParameters("matic")
  ProtocolPage.validateContractAddresses("matic")
});

// @mariam The step accepts an argument, but you are never using it and have matic hardcoded
Then("User switches network for {string}", () => {
  ProtocolPage.switchNetworks("optimism-mainnet")
});


