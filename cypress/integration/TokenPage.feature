Feature: Token page test cases

  Scenario: Data displayed in token pages
    Given User has opened the "listed token" page on "matic"
    And The token address, symbol , underlying address , network and listing is shown correctly for "matic"
    And The latest token streams data is loaded
    And User switches to "indexes" tab
    And The latest token index data is loaded
    And User switches to "events" tab
    And The latest token events data is loaded

