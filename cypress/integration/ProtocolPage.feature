Feature: Protocol page test cases

  Scenario: Data displayed in protocol page
    # @mariam check the comments by the step definition
    Given User has opened the protocol page page on "matic"
    And General protocol information is showing correct data for "matic"
    # @mariam re-use the step from landing page and re-check if data is shown correctly
    # Also change this network from optimism to one of the testnets as data is different there
    Then User switches network for "optimism-mainnet"
