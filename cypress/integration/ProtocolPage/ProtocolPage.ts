import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {ProtocolPage} from "../../pageObjects/pages/ProtocolPage";

Given("User has opened the protocol page page on {string}", () => {
  ProtocolPage.openProtocolPage()

});

Then("General protocol information is showing correct data for {string}", () => {
  ProtocolPage.validateGovernanceParameters("matic")
  ProtocolPage.validateContractAddresses("matic")
});


Then("User switches network for {string}", () => {
  ProtocolPage.switchNetworks("optimism-mainnet")
});


