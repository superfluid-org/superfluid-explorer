import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {CommonElements} from "../../pageObjects/components/CommonElements";
import {IndexSubscriptionPage} from "../../pageObjects/pages/IndexSubscriptionPage";

Given(`User switches to {string} tab`, (tab) => {
  CommonElements.switchToTab(tab)
});

Then(`Index subscription general information is showing correct data for {string}`, (network) => {
  IndexSubscriptionPage.validateSubscriptionGeneralInfo(network)
});
Then(`Index subscription units overview is showing correct data for {string}`, (network) => {
  IndexSubscriptionPage.validateSubscriptionUnitsInfo(network)

});
Then(`Subscription distributions table is showing correct data for {string}`, (network) => {
  IndexSubscriptionPage.validateSubscriptionDistributions(network)

});
Then(`Units updated table is showing correct data for {string}`, (network) => {
  IndexSubscriptionPage.validateSubscriptionUnitsUpdated(network)

});
