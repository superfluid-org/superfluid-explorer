import {Given, Then} from "cypress-cucumber-preprocessor/steps";
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


Then(`User filters streams by senders address on {string}`, (network) => {
  TokenPage.filterStreamsBySenderAddress(network)
});
Then(`Streams filtered by senders address are shown correctly for {string}`, (network) => {
  TokenPage.validateFilteredStreamsBySenderAddress(network)
});
Then(`User filters streams by receivers address on {string}`, (network) => {
  TokenPage.filterStreamsByReceiverAddress(network)
});
Then(`Streams filtered by receivers address are shown correctly for {string}`, (network) => {
  TokenPage.validateFilteredStreamsByReceiverAddress(network)
});
Then(`User filters streams by active`, () => {
  TokenPage.filterStreamsByActive()
});
Then(`Streams filtered by active are shown correctly`, () => {
  TokenPage.validateFilteredStreamsByActive()
});
Then(`User filters streams by not active`, () => {
  TokenPage.filterStreamsByNotActive()
});
Then(`Streams filtered by not active are shown correctly`, () => {
  TokenPage.validateFilteredStreamsByNotActive()
});

Then(`User filters streams by no results`, () => {
  TokenPage.filterStreamsNoResults()
});

Then(`User resets streams filter`, () => {
  CommonElements.resetFilter()
});


Then(`User filters indexes by index ID`, () => {
  TokenPage.filterIndexesByIndexID()
});
Then(`Indexes filtered by index ID are shown correctly`, () => {
  TokenPage.validateFilteredIndexesByIndexID()
});

Then(`User filters indexes by publishers address on {string}`, (network) => {
  TokenPage.filterIndexesByPublisherAddress(network)
});
Then(`Indexes filtered by publishers address are shown correctly for {string}`, (network) => {
  TokenPage.validateFilteredIndexesByPublisherAddress(network)
});
Then(`User filters indexes by distributed`, () => {
  TokenPage.filterIndexesByDistributed()
});
Then(`Indexes filtered by distributed are shown correctly`, () => {
  TokenPage.validateIndexesByDistributed()
});
Then(`User filters indexes by not distributed`, () => {
  TokenPage.filterIndexesByNotDistributed()
});
Then(`Indexes filtered by not distributed are shown correctly`, () => {
  TokenPage.validateIndexesByNotDistributed()
});
Then(`User filters indexes with no results`, () => {
  TokenPage.filterIndexesNoResults()
});
Then(`User resets indexes filter`, () => {
  CommonElements.resetFilter()
});

Then(`User filters events by event name for {string}`, (network) => {
  TokenPage.filterEventsByEventName(network)
});
Then(`Events filtered by name are shown correctly for {string}`, (network) => {
  TokenPage.validateFilteredEventsByEventName(network)
});
Then(`User filters events by transaction hash for {string}`, (network) => {
  TokenPage.filterEventsByTransactionHash(network)
});
Then(`Events filtered by transaction hash are shown correctly for {string}`, (network) => {
  TokenPage.validateFilteredEventsByTransactionHash(network)
});
Then(`User filters events with no results`, () => {
  TokenPage.filterEventsNoResults()
});
Then(`User resets events filter`, () => {
  CommonElements.resetFilter()
});

Then(`User sees 404 page`, () => {
  TokenPage.errorPageOnRegularToken()
});

Given("The token overall data is shown correctly", () => {
  TokenPage.validateOverallTokenData()
});
Given("Token statistics queries are saved for {string}", (network) => {
  TokenPage.saveTokenStatisticsQueriesOn(network)
});
