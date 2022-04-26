Feature: Token page test cases

  Scenario: Data displayed in tokens page
    Given User has opened the tokens page page on "matic"
    And Super tokens are visible for "matic"
    Then User filters super tokens by name
    Then User filters super tokens by symbol
    Then User filters super tokens by listed
    Then User filters super tokens by not listed
    Then User switches network for "optimism-mainnet"


