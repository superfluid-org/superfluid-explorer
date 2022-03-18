import {Given, Then} from 'cypress-cucumber-preprocessor/steps'

import {CommonElements} from "../../pageObjects/components/CommonElements";
import {LandingPage} from "../../pageObjects/pages/LandingPage";
import {TokenPage} from "../../pageObjects/pages/TokenPage";
import {AccountPage} from "../../pageObjects/pages/AccountPage";
import {BasePage} from "../../pageObjects/BasePage";

Given(`User has opened the {string} page`, (page) => {
  LandingPage.openPage(page)
});

Then(`User opens search dialog`, () => {
  CommonElements.clickHeaderSearchBar()
});

Given(`User searches for static balance account`, () => {
  CommonElements.searchForStaticBalanceAccount()
});

Given(`User opens the {string} account result`, (network) => {
  CommonElements.openNetworkAddressResult(network)
});

Then(`The account page on {string} is opened`, (network) => {
  CommonElements.validateAccountPageLink(network)
});

Given(`User searches for {string}`, (text) => {
  CommonElements.searchFor(text)
});

Given(`User opens the first token result on {string}`, (network) => {
  CommonElements.openFirstTokenResult(network)
});

Then(`The token page on {string} is opened`, (network) => {
  CommonElements.validateTokenPageLink(network)
});

Given(`Token listed status is {string}`, (text) => {
  TokenPage.validateListedTokenStatus(text)
});

Given(`User clicks the address book button`, () => {
  AccountPage.clickAddressBookButton()
});

Given(`User saves the entry as {string}`, (name) => {
  CommonElements.inputAndSaveToAddressBook(name)
});

Given(`Address book button is filled`, () => {
  AccountPage.addressBookButtonIsFilled()
});

Given(`User has opened the {string} page on {string}`, (page, network) => {
  LandingPage.openDataPage(page, network)
});

Then(`Address book entry named {string} is shown`, (name) => {
  CommonElements.addressBookEntryIsShown(name)
});

Then(`Account search result entry named {string} is shown`, (name) => {
  CommonElements.accountSearchResultContainsName(name)
});

Given(`User clicks on the subgraph explorer button`, () => {
  CommonElements.clickSubgraphButton()
});

Then(`Subgraph explorer page is opened`, () => {
  CommonElements.subgraphContainerIsVisible()
});

Given(`User has opened the {string} read more page`, (page) => {
  CommonElements.openReadMePage(page)
});

Then(`There are no elements containing {string}`, (text) => {
  BasePage.notContains(text)
});
