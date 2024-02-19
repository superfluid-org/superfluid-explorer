Feature: Token page test cases

  Scenario: Data displayed in token pages
    Given Token statistics queries are saved for "polygon-mainnet"
    And User has opened the "listed token" page on "matic"
    And User opens the settings menu
    And User changes the ether decimal places to 18
    And User closes the settings menu
    And The token address, symbol , underlying address , network and listing is shown correctly for "matic"
    And The token overall data is shown correctly
    And The latest token streams data is loaded
    And User switches to "indexes" tab
    And The latest token index data is loaded
    And User switches to "events" tab
    And The latest token events data is loaded

  Scenario: Filtering cases for streams tab
    Given User has opened the "listed token" page on "matic"
    And User opens the settings menu
    And User changes the ether decimal places to 18
    And User closes the settings menu
    And User filters streams by senders address on "matic"
    Then Streams filtered by senders address are shown correctly for "matic"
    And User filters streams by receivers address on "matic"
    Then Streams filtered by receivers address are shown correctly for "matic"
    And User filters streams by active
    Then Streams filtered by active are shown correctly
    And User filters streams by not active
    Then Streams filtered by not active are shown correctly
    And User filters streams by no results
    And User resets streams filter

  #Will fail because of ~ mr Kaspar
  Scenario: Filtering cases for indexes tab
    Given User has opened the "listed token" page on "matic"
    And User switches to "indexes" tab
    And User filters indexes by index ID
    Then Indexes filtered by index ID are shown correctly
    And User filters indexes by publishers address on "matic"
    Then Indexes filtered by publishers address are shown correctly for "matic"
    And User filters indexes by distributed
    Then Indexes filtered by distributed are shown correctly
    And User filters indexes by not distributed
    Then Indexes filtered by not distributed are shown correctly
    And User filters indexes with no results
    And User resets indexes filter

  Scenario: Filtering cases for events tab
    Given User has opened the "listed token" page on "matic"
    And User switches to "events" tab
    And User filters events by event name for "matic"
    And Events filtered by name are shown correctly for "matic"
    And User filters events by transaction hash for "matic"
    And Events filtered by transaction hash are shown correctly for "matic"
    Then User filters events with no results
    And User resets events filter

  Scenario: Regular token case
    Given User has opened the "regular token" page on "matic"
    And User sees 404 page
