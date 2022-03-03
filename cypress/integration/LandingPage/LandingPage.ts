import {Given, Then} from 'cypress-cucumber-preprocessor/steps'
import {LandingPage} from "../../pageObjects/pages/LandingPage";
import {BasePage} from "../../pageObjects/BasePage";

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

