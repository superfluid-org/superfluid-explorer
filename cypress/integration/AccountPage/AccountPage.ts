import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {LandingPage} from "../../pageObjects/pages/LandingPage";
import {AccountPage} from "../../pageObjects/pages/AccountPage";
import {CommonElements} from "../../pageObjects/components/CommonElements";

Given(`User has opened the {string} page on {string}`, (page, network) => {
  LandingPage.openDataPage(page, network)
});

Given(`The account address, type and network is shown correctly for {string}`, (network) => {
  AccountPage.validateAccountAddressTypeAndNetwork(network)
});

Given(`The account streams are shown correctly for {string}`, (network) => {
  AccountPage.validateStreamsTabEntries(network)
});

Given(`User switches to {string} tab`, (tab) => {
  CommonElements.switchToTab(tab)
});

Given(`The account publications are shown correctly for {string}`, (network) => {
  AccountPage.validateIndexTabEntries(network)
});

Given(`The account balances are shown correctly for {string}`, (network) => {
  AccountPage.validateTokensTabEntries(network)
});

Then(`The account events are shown correctly for {string}`, (network) => {
  AccountPage.validateEventsTabEntries(network)
});

Then(`The super app publications are shown correctly for {string}`, (network) => {
  AccountPage.validateSuperAppPublicationEntries(network)
});
Given(`User opens the publication details`, () => {
  AccountPage.openFirstPublicationDetails()
});
Then(`The index details container is visible`, () => {
  CommonElements.indexPageContainerIsVisible()
});
Then(`User opens the settings menu`, () => {
  CommonElements.openSettingsMenu()
});
Given(`User changes the stream granularity to {string}`, (granularity) => {
  CommonElements.changeGranularity(granularity)
});
Then(`Flow rates on {string} are shown in {string}`, (network, granularity) => {
  AccountPage.validateChangedFlowGranularity(granularity, network)
});
Given(`The {string} help alert is shown`, (alert) => {
  AccountPage.validateHelpAlertAndLink(alert)
});
Given(`Tooltip is visible when user hovers the {string} tooltip icon`, (tooltip) => {
  AccountPage.hoverTooltipAndValidateLink(tooltip)
});
