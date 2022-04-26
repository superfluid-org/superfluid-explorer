Feature: Protocol page test cases

  Scenario: Data displayed in protocol page
    Given User has opened the protocol page page on "matic"
    And General protocol information is showing correct data for "matic"
    Then User switches network for "optimism-mainnet"
