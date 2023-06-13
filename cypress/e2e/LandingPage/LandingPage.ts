import {Given, Then} from 'cypress-cucumber-preprocessor/steps'
import {LandingPage} from "../../pageObjects/pages/LandingPage";
import {BasePage} from "../../pageObjects/BasePage";
import {CommonElements} from "../../pageObjects/components/CommonElements";

Then(`The latest streams for {string} are shown`, (network) => {
  LandingPage.latestStreamsAreVisible(network)
});

Given(`User has opened the {string} page`, (page) => {
  LandingPage.openPage(page)
});

Then(`The {string} hyperlink is set correctly`, (link) => {
  LandingPage.validateLinkHref(link)
});

Then(`There are no elements containing {string}`, (text) => {
  BasePage.notContains(text)
});

Given(`User clicks on the {string} hyperlink`, (link) => {
  LandingPage.clickHyperlink(link)
});

Then(`The open function was called`, () => {
  BasePage.wasOpenFunctionCalled()
});

Given(`User switches the latest stream network data to {string}`, (network) => {
  LandingPage.switchLatestStreamNetwork(network)
});

Then(`All of the hyperlinks lead to {string} pages`, (network) => {
  LandingPage.validateLatestStreamHyperlinks(network)
});

Given(`All of the streamed values are fixed to {int} decimals`, (num) => {
  LandingPage.validateStreamedValueDecimalPlaces(num)
});

Then(`User closes the settings menu`, () => {
  CommonElements.closeSettingsMenu()
});

Given(`User changes the ether decimal places to {int}`, (num) => {
  CommonElements.changeDecimalPlaces(num)
});

Then(`User opens the settings menu`, () => {
  CommonElements.openSettingsMenu()
});
