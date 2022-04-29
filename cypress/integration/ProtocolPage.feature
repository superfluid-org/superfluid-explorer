Feature: Protocol page test cases

  Scenario: Data displayed in protocol page
    Given User opens "protocol" page
    Then User switches network for "goerli"
    And General protocol information is showing correct data for "goerli"
