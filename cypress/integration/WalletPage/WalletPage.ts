import {Given,Then} from "cypress-cucumber-preprocessor/steps";
import {LandingPage} from "../../pageObjects/pages/LandingPage";
import {WalletPage} from "../../pageObjects/pages/WalletPage";
import {CommonElements} from "../../pageObjects/components/CommonElements";

Given(`User has opened the {string} page on {string}`, (page, network) =>    {
  LandingPage.openDataPage(page, network)
});

Given(`The account address, type and network is shown correctly for {string}`, (network) => {
  WalletPage.validateWalletAddressTypeAndNetwork(network)
});
Given(`The account streams are shown correctly for {string}`,  () => {

});
Given(`User switches to {string} tab`,  (tab) => {
  CommonElements.switchToTab(tab)
});
Given(`The account publications are shown correctly for {string}`,  () => {

});
Given(`The account balances are shown correctly for {string}`,  () => {

});
Then(`The account events are shown correctly for {string}`, () => {

});
