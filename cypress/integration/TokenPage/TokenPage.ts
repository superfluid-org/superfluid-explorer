import {Given} from "cypress-cucumber-preprocessor/steps";
import {LandingPage} from "../../pageObjects/pages/LandingPage";
import {CommonElements} from "../../pageObjects/components/CommonElements";

Given(`User has opened the {string} page on {string}`, (page, network) =>    {
  LandingPage.openDataPage(page, network)
});
Given(`User switches to {string} tab`,  (tab) => {
  CommonElements.switchToTab(tab)
});
Given(`The token address, symbol , underlying address , network and listing is shown correctly for {string}`,  () => {

});
