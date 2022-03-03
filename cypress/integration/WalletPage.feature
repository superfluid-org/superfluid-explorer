Feature: Account page test cases

  Scenario: Data displayed in account page
    Given User has opened the "static balance account" page on "matic"
    And The account address, type and network is shown correctly for "matic"
    And The account streams are shown correctly for "matic"
    And User switches to "indexes" tab
    And The account publications are shown correctly for "matic"
    And User switches to "super tokens" tab
    And The account balances are shown correctly for "matic"
    And User switches to "events" tab
    Then The account events are shown correctly for "matic"

