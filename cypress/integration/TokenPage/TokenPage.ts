import {Given} from "cypress-cucumber-preprocessor/steps";
import {LandingPage} from "../../pageObjects/pages/LandingPage";
import {CommonElements} from "../../pageObjects/components/CommonElements";
import {TokenPage} from "../../pageObjects/pages/TokenPage";

Given(`User has opened the {string} page on {string}`, (page, network) => {
  LandingPage.openDataPage(page, network)
});

Given(`User switches to {string} tab`, (tab) => {
  CommonElements.switchToTab(tab)
});

Given(`The token address, symbol , underlying address , network and listing is shown correctly for {string}`, (network) => {
  TokenPage.validateTokenData(network)
});

Given(`The latest token streams data is loaded`, () => {
  TokenPage.validateLoadedTokenStreamData()
});

Given(`The latest token index data is loaded`, () => {
  TokenPage.validateLoadedIndexData()
});

Given(`The latest token events data is loaded`, () => {
  TokenPage.validateLoadedEventsData()
});

