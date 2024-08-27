import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

import { CommonElements } from '../../pageObjects/components/CommonElements'
import { AccountPage } from '../../pageObjects/pages/AccountPage'
import { LandingPage } from '../../pageObjects/pages/LandingPage'

Given(`User has opened the {string} page on {string}`, (page, network) => {
  LandingPage.openDataPage(page, network)
})

Given(
  `The account address, type ,balances and network is shown correctly for {string}`,
  (network) => {
    AccountPage.validateAccountAddressTypeAndNetwork(network)
  }
)

Given(`The account streams are shown correctly for {string}`, (network) => {
  AccountPage.validateStreamsTabEntries(network)
})

Given(`User switches to {string} tab`, (tab) => {
  CommonElements.switchToTab(tab)
})

Given(
  `The account publications are shown correctly for {string}`,
  (network) => {
    AccountPage.validateIndexTabEntries(network)
  }
)

Given(
  `The account super tokens balances are shown correctly for {string}`,
  (network) => {
    AccountPage.validateTokensTabEntries(network)
  }
)

Then(`The account events are shown correctly for {string}`, (network) => {
  AccountPage.validateEventsTabEntries(network)
})

Then(
  `The ida account publications are shown correctly for {string}`,
  (network) => {
    AccountPage.validateIdaAccountPublicationEntries(network)
  }
)
Given(`User opens the publication details`, () => {
  AccountPage.openFirstPublicationDetails()
})
Then(`The index details container is visible`, () => {
  CommonElements.indexPageContainerIsVisible()
})
Then(`User opens the settings menu`, () => {
  CommonElements.openSettingsMenu()
})
Given(`User changes the stream granularity to {string}`, (granularity) => {
  CommonElements.changeGranularity(granularity)
})
Then(`Flow rates on {string} are shown in {string}`, (network, granularity) => {
  AccountPage.validateChangedFlowGranularity(granularity, network)
})
Given(`The {string} help alert is shown`, (alert) => {
  AccountPage.validateHelpAlertAndLink(alert)
})

Then(
  `User filters incoming streams by senders address for {string}`,
  (network) => {
    AccountPage.filterIncomingStreamsBySenderAddress(network)
  }
)
Then(
  `Incoming streams filtered by senders address are shown correctly for {string}`,
  (network) => {
    AccountPage.validateFilteredIncomingStreamsBySenderAddress(network)
  }
)
Then(`User filters incoming streams by active`, () => {
  AccountPage.filterIncomingStreamsByActive()
})
Then(`Incoming streams filtered by active are shown correctly`, () => {
  AccountPage.validateFilteredIncomingStreamsByActive()
})
Then(`User filters incoming streams by not active`, () => {
  AccountPage.filterIncomingStreamsByNotActive()
})
Then(`Incoming streams filtered by not active are shown correctly`, () => {
  AccountPage.validateFilteredIncomingStreamsByNotActive()
})
Then(`User filters incoming streams with no results`, () => {
  AccountPage.filterIncomingStreamsNoResults()
})
Then(`User resets incoming streams filter`, () => {
  AccountPage.resetIncomingStreamsFilter()
})

Then(
  `User filters outgoing streams by receivers address for {string}`,
  (network) => {
    AccountPage.filterOutgoingStreamsByReceiverAddress(network)
  }
)
Then(
  `Outgoing streams filtered by receivers address are shown correctly for {string}`,
  (network) => {
    AccountPage.validateFilteredOutgoingStreamsByReceiverAddress(network)
  }
)
Then(`User filters outgoing streams by active`, () => {
  AccountPage.filterOutgoingStreamsByActive()
})
Then(`Outgoing streams filtered by active are shown correctly`, () => {
  AccountPage.validateFilteredOutgoingStreamsByActive()
})
Then(`User filters outgoing streams by not active`, () => {
  AccountPage.filterOutgoingStreamsByNotActive()
})
Then(`Outgoing streams filtered by not active are shown correctly`, () => {
  AccountPage.validateFilteredOutgoingStreamsByNotActive()
})
Then(`User filters outgoing streams with no results`, () => {
  AccountPage.filterOutgoingStreamsNoResults()
})
Then(`User resets outgoing streams filter`, () => {
  AccountPage.resetOutgoingStreamsFilter()
})

Then(`User filters publications by index id`, () => {
  AccountPage.filterPublicationsByIndexID()
})
Then(`Publications filtered by index id are shown correctly`, () => {
  AccountPage.validateFilteredPublicationsByIndexID()
})
Then(`User filters publications by distributed`, () => {
  AccountPage.filterPublicationsByDistributed()
})
Then(`Publications filtered by distributed are shown correctly`, () => {
  AccountPage.validateFilteredPublicationsByDistributed()
})
Then(`User filters publications by not distributed`, () => {
  AccountPage.filterPublicationsByNotDistributed()
})
Then(`Publications filtered by not distributed are shown correctly`, () => {
  AccountPage.validateFilteredPublicationsByNotDistributed()
})
Then(`User filters publications by issued units`, () => {
  AccountPage.filterPublicationsByIssuedUnits()
})
Then(`Publications filtered by issued units are shown correctly`, () => {
  AccountPage.validateFilteredPublicationsByIssuedUnits()
})
Then(`User filters publications by no issued units`, () => {
  AccountPage.filterPublicationsByNoIssuedUnits()
})
Then(`Publications filtered by no issued units are shown correctly`, () => {
  AccountPage.validateFilteredPublicationsByNoIssuedUnits()
})
Then(`User filters publications with no results`, () => {
  AccountPage.filterPublicationsNoResults()
})
Then(`User resets publications filter`, () => {
  AccountPage.resetPublicationsFilter()
})

Then(`User filters subscriptions by approved`, () => {
  AccountPage.filterSubscriptionsByApproved()
})
Then(`Subscriptions filtered by approved are shown correctly`, () => {
  AccountPage.validateFilteredSubscriptionsByApproved()
})
Then(`User filters subscriptions by not approved`, () => {
  AccountPage.filterSubscriptionsByNotApproved()
})
Then(`Subscriptions filtered by not approved are shown correctly`, () => {
  AccountPage.validateFilteredSubscriptionsByNotApproved()
})
Then(`User filters subscriptions by distributions`, () => {
  AccountPage.filterSubscriptionsByDistributed()
})
Then(`Subscriptions filtered by distributions are shown correctly`, () => {
  AccountPage.validateFilteredSubscriptionsByDistributed()
})
Then(`User filters subscriptions by no distributions`, () => {
  AccountPage.filterSubscriptionsByNotDistributed()
})
Then(`Subscriptions filtered by no distributions are shown correctly`, () => {
  AccountPage.validateFilteredSubscriptionsByNotDistributed()
})
Then(`User filters subscriptions by units`, () => {
  AccountPage.filterSubscriptionsByUnits()
})
Then(`Subscriptions filtered by units are shown correctly`, () => {
  AccountPage.validateFilteredSubscriptionsByUnits()
})
Then(`User filters subscriptions by no units`, () => {
  AccountPage.filterSubscriptionsByNoUnits()
})
Then(`Subscriptions filtered by no units are shown correctly`, () => {
  AccountPage.validateFilteredSubscriptionsByNoUnits()
})
Then(`User filters subscriptions with no results`, () => {
  AccountPage.filterSubscriptionsNoResults()
})
Then(`User resets subscriptions filter`, () => {
  AccountPage.resetSubscriptionsFilter()
})

Then(`User filters super tokens by active`, () => {
  AccountPage.filterSuperTokensByActive()
})
Then(`Super tokens filtered by active are shown correctly`, () => {
  AccountPage.validateFilteredSuperTokensByActive()
})
Then(`User filters super tokens by not active`, () => {
  AccountPage.filterSuperTokensByNotActive()
})
Then(`Super tokens filtered by not active are shown correctly`, () => {
  AccountPage.validateFilteredSuperTokensByNotActive()
})
Then(`User filters super tokens by closed`, () => {
  AccountPage.filterSuperTokensByClosed()
})
Then(`Super tokens filtered by closed are shown correctly`, () => {
  AccountPage.validateFilteredSuperTokensByClosed()
})
Then(`User filters super tokens by not closed`, () => {
  AccountPage.filterSuperTokensByNotClosed()
})
Then(`Super tokens filtered by not closed are shown correctly`, () => {
  AccountPage.validateFilteredSuperTokensByNotClosed()
})
Then(`User filters super tokens by subscriptions with units`, () => {
  AccountPage.filterSuperTokensByUnits()
})
Then(
  `Super tokens filtered by subscriptions with units are shown correctly`,
  () => {
    AccountPage.validateFilteredSuperTokensByUnits()
  }
)
Then(`User filters super tokens by subscriptions with no units`, () => {
  AccountPage.filterSuperTokensByNoUnits()
})
Then(
  `Super tokens filtered by subscriptions with no units are shown correctly`,
  () => {
    AccountPage.validateFilteredSuperTokensByNoUnits()
  }
)
Then(`User filters super tokens with no results`, () => {
  AccountPage.filterSuperTokensNoResults()
})
Then(`User resets super tokens filter`, () => {
  CommonElements.resetFilter()
})

Then(`User filters events by event name for {string}`, (network) => {
  AccountPage.filterEventsByEventName(network)
})
Then(
  `Events filtered by event name are shown correctly for {string}`,
  (network) => {
    AccountPage.validateFilteredEventsByEventName(network)
  }
)
Then(`User filters events by transaction hash for {string}`, (network) => {
  AccountPage.filterEventsByTransactionHash(network)
})
Then(
  `Events filtered by transaction hash are shown correctly for {string}`,
  (network) => {
    AccountPage.validateFilteredEventsByTransactionHash(network)
  }
)
Then(`User filters events with no results`, () => {
  AccountPage.filterEventsNoResults()
})
Then(`User resets events filter`, () => {
  CommonElements.resetFilter()
})
Then('Table contains the same streams as before filtering', () => {
  AccountPage.validateSenderAddressesAfterFiltering()
})
Then(`User clicks on the reset button on the filter`, () => {
  CommonElements.clickFilterResetButton()
})
Then(`User clicks on the close button on the filter`, () => {
  CommonElements.clickFilterCloseButton()
})
Given(`User can see the pools they are admin to in the table`, () => {
  AccountPage.validateAdminAccountPoolsTableEntries('optimism-sepolia')
})
Given(`Pools and Members tables show no results`, () => {
  AccountPage.validateNoResultsForPoolsTable()
  AccountPage.validateNoResultsForMembersTable()
})
Given(`User filters the pools table by {string} address`, (address) => {
  AccountPage.filterPoolsTableByAddress(address)
})
Given(
  `Only the pools with address {string} are shown in the table`,
  (address) => {
    AccountPage.validateOnlyPoolsWithAddressAreVisible(address)
  }
)
Then(`Only pools that have distributed tokens are shown in the table`, () => {
  AccountPage.validateOnlyPoolsWithDistributionAreVisible()
})
Then(`Only pools that have issued units are shown in the table`, () => {
  AccountPage.validateOnlyPoolsWithIssuedUnitsAreVisible()
})
Then(`The pool table filter is not visible`, () => {
  AccountPage.validatePoolTableFilterNotVisible()
})
Then(`User can see the pools they are a member of in the table`, () => {
  AccountPage.validateMemberAccountMembersTableEntries('optimism-sepolia')
})
Then(`User sees only the pools they are connected to`, () => {
  AccountPage.validateOnlyConnectedPoolsAreVisible()
})
Then(`User sees only the pools they have received distributions from`, () => {
  AccountPage.validateOnlyPoolsWithReceivedDistributionsAreVisible()
})
Then(`The member table filter is not visible`, () => {
  AccountPage.validateMembersTableFilterNotVisible()
})
When(
  `User sets the {string} filter to {string} for {string}`,
  (filter: string, value: string, field: string) => {
    AccountPage.filterGDAPoolsTableBy(filter, value, field)
  }
)
When(`User waits for the tables to load`, () => {
  AccountPage.waitForTablesToLoad()
})
Then(`User sees only the pools they have units in`, () => {
  AccountPage.validateOnlyPoolsWithMemberUnitsAreVisible()
})

Given(`User changes the ether decimal places to {int}`, (num) => {
  CommonElements.changeDecimalPlaces(num)
})

Then(`User opens the settings menu`, () => {
  CommonElements.openSettingsMenu()
})

Then(`User closes the settings menu`, () => {
  CommonElements.closeSettingsMenu()
})

Then(
  `Tooltip is visible when user hovers the {string} tooltip icon`,
  (tooltip) => {
    AccountPage.hoverTooltipAndValidateLink(tooltip)
  }
)

Then(`Pools tab is not available to the user`, () => {
  AccountPage.validatePoolsTabDoesNotExist()
})
