Feature: Account page test cases

  Scenario: Data displayed in account page
    Given User has opened the "static balance account" page on "matic"
    And The account address, type ,balances and network is shown correctly for "matic"
    And The account streams are shown correctly for "matic"
    And User switches to "indexes" tab
    And The account publications are shown correctly for "matic"
    And User switches to "super tokens" tab
    And The account super tokens balances are shown correctly for "matic"
    And User switches to "events" tab
    Then The account events are shown correctly for "matic"

  Scenario: Account with published indexes and the data shown in the index tab publications section
    Given User has opened the "super app" page on "goerli"
    And User switches to "indexes" tab
    And The super app publications are shown correctly for "goerli"
    And User opens the publication details
    Then The index details container is visible

  Scenario: Changing stream granularity
    Given User has opened the "ongoing streams account" page on "matic"
    And User opens the settings menu
    And User changes the stream granularity to "Second"
    Then Flow rates on "matic" are shown in "second"
    And User changes the stream granularity to "Minute"
    Then Flow rates on "matic" are shown in "minute"
    And User changes the stream granularity to "Hour"
    Then Flow rates on "matic" are shown in "hour"
    And User changes the stream granularity to "Day"
    Then Flow rates on "matic" are shown in "day"
    And User changes the stream granularity to "Week"
    Then Flow rates on "matic" are shown in "week"
    And User changes the stream granularity to "30 Day"
    Then Flow rates on "matic" are shown in "month"

  Scenario: Hovering on account page tooltips and help alert links
    Given User has opened the "static balance account" page on "matic"
    And The "streams" help alert is shown
    And User switches to "indexes" tab
    Then Tooltip is visible when user hovers the "subscriptions" tooltip icon

  Scenario: Filtering incoming stream cases for streams tab
    Given User has opened the "balance account for filtering" page on "goerli"
    Then  User filters incoming streams by senders address for "goerli"
    Then Incoming streams filtered by senders address are shown correctly for "goerli"
    And User filters incoming streams by active
    Then Incoming streams filtered by active are shown correctly
    And User filters incoming streams by not active
    Then Incoming streams filtered by not active are shown correctly
    And User filters incoming streams with no results
    And User resets incoming streams filter
    Then Table contains the same streams as before filtering

  Scenario: Filtering outgoing stream cases for streams tab
    Given User has opened the "balance account for filtering" page on "goerli"
    And User filters outgoing streams by receivers address for "goerli"
    Then Outgoing streams filtered by receivers address are shown correctly for "goerli"
    And User filters outgoing streams by active
    Then Outgoing streams filtered by active are shown correctly
    And User filters outgoing streams by not active
    Then Outgoing streams filtered by not active are shown correctly
    And User filters outgoing streams with no results
    And User resets outgoing streams filter

  Scenario: Filtering publication cases for indexes tab
    Given User has opened the "super app" page on "goerli"
    And User switches to "indexes" tab
    And User filters publications by index id
    Then Publications filtered by index id are shown correctly
    And User filters publications by distributed
    Then Publications filtered by distributed are shown correctly
    And User filters publications by not distributed
    And User filters publications by issued units
    Then Publications filtered by issued units are shown correctly
    And User filters publications by no issued units
    And User filters publications with no results
    And User resets publications filter

  Scenario: Filtering subscriptions cases for indexes tab
    Given User has opened the "balance account for filtering" page on "matic"
    And User switches to "indexes" tab
    Then User filters subscriptions by approved
    Then Subscriptions filtered by approved are shown correctly
    Then User filters subscriptions by not approved
    Then Subscriptions filtered by not approved are shown correctly
    Then User filters subscriptions by distributions
    Then User filters subscriptions by no distributions
    Then Subscriptions filtered by no distributions are shown correctly
    Then User filters subscriptions by units
    Then User filters subscriptions by no units
    Then Subscriptions filtered by no units are shown correctly
    And User filters subscriptions with no results
    And User resets subscriptions filter

  Scenario: Filtering cases for super tokens tab
    Given User has opened the "second balance account for filtering" page on "goerli"
    And User switches to "super tokens" tab
    And User filters super tokens by active
    Then Super tokens filtered by active are shown correctly
    And User filters super tokens by not active
    Then Super tokens filtered by not active are shown correctly
    And User filters super tokens by closed
    Then Super tokens filtered by closed are shown correctly
    And User filters super tokens by not closed
    Then Super tokens filtered by not closed are shown correctly
    And User filters super tokens by subscriptions with units
    Then Super tokens filtered by subscriptions with units are shown correctly
    And User filters super tokens by subscriptions with no units
    Then Super tokens filtered by subscriptions with no units are shown correctly
    And User filters super tokens with no results
    And User resets super tokens filter

  Scenario: Filtering cases for events tab
    Given User has opened the "balance account for filtering" page on "matic"
    And User switches to "events" tab
    And User filters events by event name for "matic"
    Then Events filtered by event name are shown correctly for "matic"
    And User filters events by transaction hash for "matic"
    Then Events filtered by transaction hash are shown correctly for "matic"
    And User filters events with no results
    And User resets events filter




