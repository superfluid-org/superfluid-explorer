import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import { BasePage } from '../../pageObjects/BasePage';
import { CommonElements } from '../../pageObjects/components/CommonElements';
import { AccountPage } from '../../pageObjects/pages/AccountPage';
import { LandingPage } from '../../pageObjects/pages/LandingPage';
import { TokenPage } from '../../pageObjects/pages/TokenPage';

/** @param {string} s */
const norm = (s) => String(s).trim();

Given('User has opened the {string} page', (page /** @type {string} */) => {
  return LandingPage.openPage(norm(page));
});

Then('User opens search dialog', () => {
  return CommonElements.clickHeaderSearchBar();
});

Given('User searches for static balance account', () => {
  return CommonElements.searchForStaticBalanceAccount();
});

Given('User searches for transactions account', () => {
  return CommonElements.searchForTransactionAccount();
});

Given('User opens the {string} account result', (network /** @type {string} */) => {
  return CommonElements.openNetworkAddressResult(norm(network));
});

Then('The account page on {string} is opened', (network /** @type {string} */) => {
  return CommonElements.validateAccountPageLink(norm(network));
});

Given('User searches for {string}', (text /** @type {string} */) => {
  return CommonElements.searchFor(norm(text));
});

Given('User opens the first token result on {string}', (network /** @type {string} */) => {
  return CommonElements.openFirstTokenResult(norm(network));
});

Then('The token page on {string} is opened', (network /** @type {string} */) => {
  return CommonElements.validateTokenPageLink(norm(network));
});

Given('Token listed status is {string}', (text /** @type {string} */) => {
  return TokenPage.validateListedTokenStatus(norm(text));
});

Given('User clicks the address book button', () => {
  return AccountPage.clickAddressBookButton();
});

Given('User saves the entry as {string}', (name /** @type {string} */) => {
  return CommonElements.inputAndSaveToAddressBook(norm(name));
});

Given('Address book button is filled', () => {
  return AccountPage.addressBookButtonIsFilled();
});

Given('User has opened the {string} page on {string}', (page /** @type {string} */, network /** @type {string} */) => {
  return LandingPage.openDataPage(norm(page), norm(network));
});

Then('Address book entry named {string} is shown', (name /** @type {string} */) => {
  return CommonElements.addressBookEntryIsShown(norm(name));
});

Then('Account search result entry named {string} is shown', (name /** @type {string} */) => {
  return CommonElements.accountSearchResultContainsName(norm(name));
});

Given('User clicks on the subgraph explorer button', () => {
  return CommonElements.clickSubgraphButton();
});

Then('Subgraph explorer page is opened', () => {
  return CommonElements.subgraphContainerIsVisible();
});

Given('User has opened the {string} read more page', (page /** @type {string} */) => {
  return CommonElements.openReadMePage(norm(page));
});

Then('There are no elements containing {string}', (text /** @type {string} */) => {
  return BasePage.notContains(norm(text));
});

Given('User enables all of the testnets', () => {
  return CommonElements.enableAllTestnets();
});

// regex-форма оставлена как есть; унифицированы кавычки и добавлен return
Given(/^User toggles the test network "([^"]*)" in settings$/, (slugName /** @type {string} */) => {
  CommonElements.openSettingsMenu();
  CommonElements.toggleTestnetBySlug(norm(slugName));
  return CommonElements.closeSettingsMenu();
});

Then(
  'Tooltip is visible when user hovers the {string} tooltip icon',
  (tooltip /** @type {string} */) => {
    return AccountPage.hoverTooltipAndValidateLink(norm(tooltip));
  }
);
