import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import { CommonElements } from '../../pageObjects/components/CommonElements';
import { AccountPage } from '../../pageObjects/pages/AccountPage';
import { LandingPage } from '../../pageObjects/pages/LandingPage';

Given('User has opened the {string} page on {string}', (page: string, network: string) => {
  return LandingPage.openDataPage(page, network);
});

Given('The account address, type ,balances and network is shown correctly for {string}', (network: string) => {
  return AccountPage.validateAccountAddressTypeAndNetwork(network);
});

Given('The account streams are shown correctly for {string}', (network: string) => {
  return AccountPage.validateStreamsTabEntries(network);
});

Given('User switches to {string} tab', (tab: string) => {
  return CommonElements.switchToTab(tab);
});

Given('The account publications are shown correctly for {string}', (network: string) => {
  return AccountPage.validateIndexTabEntries(network);
});

Given('The account super tokens balances are shown correctly for {string}', (network: string) => {
  return AccountPage.validateTokensTabEntries(network);
});

Then('The account events are shown correctly for {string}', (network: string) => {
  return AccountPage.validateEventsTabEntries(network);
});

Then('The ida account publications are shown correctly for {string}', (network: string) => {
  return AccountPage.validateIdaAccountPublicationEntries(network);
});

Given('User opens the publication details', () => {
  return AccountPage.openFirstPublicationDetails();
});

Then('The index details container is visible', () => {
  return CommonElements.indexPageContainerIsVisible();
});

Then('User opens the settings menu', () => {
  return CommonElements.openSettingsMenu();
});

Given('User changes the stream granularity to {string}', (granularity: string) => {
  return CommonElements.changeGranularity(granularity);
});

Then('Flow rates on {string} are shown in {string}', (network: string, granularity: string) => {
  return AccountPage.validateChangedFlowGranularity(granularity, network);
});

Given('The {string} help alert is shown', (alert: string) => {
  return AccountPage.validateHelpAlertAndLink(alert);
});

Then('User filters incoming streams by senders address for {string}', (network: string) => {
  return AccountPage.filterIncomingStreamsBySenderAddress(network);
});

Then('Incoming streams filtered by senders address are shown correctly for {string}', (network: string) => {
  return AccountPage.validateFilteredIncomingStreamsBySenderAddress(network);
});

Then('User filters incoming streams by active', () => {
  return AccountPage.filterIncomingStreamsByActive();
});

Then('Incoming streams filtered by active are shown correctly', () => {
  return AccountPage.validateFilteredIncomingStreamsByActive();
});

Then('User filters incoming streams by not active', () => {
  return AccountPage.filterIncomingStreamsByNotActive();
});

Then('Incoming streams filtered by not active are shown correctly', () => {
  return AccountPage.validateFilteredIncomingStreamsByNotActive();
});

Then('User filters incoming streams with no results', () => {
  return AccountPage.filterIncomingStreamsNoResults();
});

Then('User resets incoming streams filter', () => {
  return AccountPage.resetIncomingStreamsFilter();
});

Then('User filters outgoing streams by receivers address for {string}', (network: string) => {
  return AccountPage.filterOutgoingStreamsByReceiverAddress(network);
});

Then('Outgoing streams filtered by receivers address are shown correctly for {string}', (network: string) => {
  return AccountPage.validateFilteredOutgoingStreamsByReceiverAddress(network);
});

Then('User filters outgoing streams by active', () => {
  return AccountPage.filterOutgoingStreamsByActive();
});

Then('Outgoing streams filtered by active are shown correctly', () => {
  return AccountPage.validateFilteredOutgoingStreamsByActive();
});

Then('User filters outgoing streams by not active', () => {
  return AccountPage.filterOutgoingStreamsByNotActive();
});

Then('Outgoing streams filtered by not active are shown correctly', () => {
  return AccountPage.validateFilteredOutgoingStreamsByNotActive();
});

Then('User filters outgoing streams with no results', () => {
  return AccountPage.filterOutgoingStreamsNoResults();
});

Then('User resets outgoing streams filter', () => {
  return AccountPage.resetOutgoingStreamsFilter();
});

Then('User filters publications by index id', () => {
  return AccountPage.filterPublicationsByIndexID();
});

Then('Publications filtered by index id are shown correctly', () => {
  return AccountPage.validateFilteredPublicationsByIndexID();
});

Then('User filters publications by distributed', () => {
  return AccountPage.filterPublicationsByDistributed();
});

Then('Publications filtered by distributed are shown correctly', () => {
  return AccountPage.validateFilteredPublicationsByDistributed();
});

Then('User filters publications by not distributed', () => {
  return AccountPage.filterPublicationsByNotDistributed();
});

Then('Publications filtered by not distributed are shown correctly', () => {
  return AccountPage.validateFilteredPublicationsByNotDistributed();
});

Then('User filters publications by issued units', () => {
  return AccountPage.filterPublicationsByIssuedUnits();
});

Then('Publications filtered by issued units are shown correctly', () => {
  return AccountPage.validateFilteredPublicationsByIssuedUnits();
});

Then('User filters publications by no issued units', () => {
  return AccountPage.filterPublicationsByNoIssuedUnits();
});

Then('Publications filtered by no issued units are shown correctly', () => {
  return AccountPage.validateFilteredPublicationsByNoIssuedUnits();
});

Then('User filters publications with no results', () => {
  return AccountPage.filterPublicationsNoResults();
});

Then('User resets publications filter', () => {
  return AccountPage.resetPublicationsFilter();
});

Then('User filters subscriptions by approved', () => {
  return AccountPage.filterSubscriptionsByApproved();
});

Then('Subscriptions filtered by approved are shown correctly', () => {
  return AccountPage.validateFilteredSubscriptionsByApproved();
});

Then('User filters subscriptions by not approved', () => {
  return AccountPage.filterSubscriptionsByNotApproved();
});

Then('Subscriptions filtered by not approved are shown correctly', () => {
  return AccountPage.validateFilteredSubscriptionsByNotApproved();
});

Then('User filters subscriptions by distributions', () => {
  return AccountPage.filterSubscriptionsByDistributed();
});

Then('Subscriptions filtered by distributions are shown correctly', () => {
  return AccountPage.validateFilteredSubscriptionsByDistributed();
});

Then('User filters subscriptions by no distributions', () => {
  return AccountPage.filterSubscriptionsByNotDistributed();
});

Then('Subscriptions filtered by no distributions are shown correctly', () => {
  return AccountPage.validateFilteredSubscriptionsByNotDistributed();
});

Then('User filters subscriptions by units', () => {
  return AccountPage.filterSubscriptionsByUnits();
});

Then('Subscriptions filtered by units are shown correctly', () => {
  return AccountPage.validateFilteredSubscriptionsByUnits();
});

Then('User filters subscriptions by no units', () => {
  return AccountPage.filterSubscriptionsByNoUnits();
});

Then('Subscriptions filtered by no units are shown correctly', () => {
  return AccountPage.validateFilteredSubscriptionsByNoUnits();
});

Then('User filters subscriptions with no results', () => {
  return AccountPage.filterSubscriptionsNoResults();
});

Then('User resets subscriptions filter', () => {
  return AccountPage.resetSubscriptionsFilter();
});

Then('User filters super tokens by active', () => {
  return AccountPage.filterSuperTokensByActive();
});

Then('Super tokens filtered by active are shown correctly', () => {
  return AccountPage.validateFilteredSuperTokensByActive();
});

Then('User filters super tokens by not active', () => {
  return AccountPage.filterSuperTokensByNotActive();
});

Then('Super tokens filtered by not active are shown correctly', () => {
  return AccountPage.validateFilteredSuperTokensByNotActive();
});

Then('User filters super tokens by closed', () => {
  return AccountPage.filterSuperTokensByClosed();
});

Then('Super tokens filtered by closed are shown correctly', () => {
  return AccountPage.validateFilteredSuperTokensByClosed();
});

Then('User filters super tokens by not closed', () => {
  return AccountPage.filterSuperTokensByNotClosed();
});

Then('Super tokens filtered by not closed are shown correctly', () => {
  return AccountPage.validateFilteredSuperTokensByNotClosed();
});

Then('User filters super tokens by subscriptions with units', () => {
  return AccountPage.filterSuperTokensByUnits();
});

Then('Super tokens filtered by subscriptions with units are shown correctly', () => {
  return AccountPage.validateFilteredSuperTokensByUnits();
});

Then('User filters super tokens by subscriptions with no units', () => {
  return AccountPage.filterSuperTokensByNoUnits();
});

Then('Super tokens filtered by subscriptions with no units are shown correctly', () => {
  return AccountPage.validateFilteredSuperTokensByNoUnits();
});

Then('User filters super tokens with no results', () => {
  return AccountPage.filterSuperTokensNoResults();
});

Then('User resets super tokens filter', () => {
  return CommonElements.resetFilter();
});

Then('User filters events by event name for {string}', (network: string) => {
  return AccountPage.filterEventsByEventName(network);
});

Then('Events filtered by event name are shown correctly for {string}', (network: string) => {
  return AccountPage.validateFilteredEventsByEventName(network);
});

Then('User filters events by transaction hash for {string}', (network: string) => {
  return AccountPage.filterEventsByTransactionHash(network);
});

Then('Events filtered by transaction hash are shown correctly for {string}', (network: string) => {
  return AccountPage.validateFilteredEventsByTransactionHash(network);
});

Then('User filters events with no results', () => {
  return AccountPage.filterEventsNoResults();
});

Then('User resets events filter', () => {
  return CommonElements.resetFilter();
});

Then('Table contains the same streams as before filtering', () => {
  return AccountPage.validateSenderAddressesAfterFiltering();
});

Then('User clicks on the reset button on the filter', () => {
  return CommonElements.clickFilterResetButton();
});

Then('User clicks on the close button on the filter', () => {
  return CommonElements.clickFilterCloseButton();
});

Given('User can see the pools they are admin to in the table', () => {
  return AccountPage.validateAdminAccountPoolsTableEntries('optimism-sepolia');
});

Given('Pools and Members tables show no results', () => {
  AccountPage.validateNoResultsForPoolsTable();
  return AccountPage.validateNoResultsForMembersTable();
});

Given('User filters the pools table by {string} address', (address: string) => {
  return AccountPage.filterPoolsTableByAddress(address);
});

Given('Only the pools with address {string} are shown in the table', (address: string) => {
  return AccountPage.validateOnlyPoolsWithAddressAreVisible(address);
});

Then('Only pools that have distributed tokens are shown in the table', () => {
  return AccountPage.validateOnlyPoolsWithDistributionAreVisible();
});

Then('Only pools that have issued units are shown in the table', () => {
  return AccountPage.validateOnlyPoolsWithIssuedUnitsAreVisible();
});

Then('The pool table filter is not visible', () => {
  return AccountPage.validatePoolTableFilterNotVisible();
});

Then('User can see the pools they are a member of in the table', () => {
  return AccountPage.validateMemberAccountMembersTableEntries('optimism-sepolia');
});

Then('User sees only the pools they are connected to', () => {
  return AccountPage.validateOnlyConnectedPoolsAreVisible();
});

Then('User sees only the pools they have received distributions from', () => {
  return AccountPage.validateOnlyPoolsWithReceivedDistributionsAreVisible();
});

Then('The member table filter is not visible', () => {
  return AccountPage.validateMembersTableFilterNotVisible();
});

When('User sets the {string} filter to {string} for {string}', (filter: string, value: string, field: string) => {
  return AccountPage.filterGDAPoolsTableBy(filter, value, field);
});

When('User waits for the tables to load', () => {
  return AccountPage.waitForTablesToLoad();
});

Then('User sees only the pools they have units in', () => {
  return AccountPage.validateOnlyPoolsWithMemberUnitsAreVisible();
});

Given('User changes the ether decimal places to {int}', (num: number) => {
  return CommonElements.changeDecimalPlaces(num);
});

Then('User closes the settings menu', () => {
  return CommonElements.closeSettingsMenu();
});

Then('Tooltip is visible when user hovers the {string} tooltip icon', (tooltip: string) => {
  return AccountPage.hoverTooltipAndValidateLink(tooltip);
});

Then('Pools tab is not available to the user', () => {
  return AccountPage.validatePoolsTabDoesNotExist();
});
