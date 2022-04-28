Feature: Network governance token page test cases

  # @mariam Split up the data showing up and filtering cases
  Scenario: Data displayed in network governance tokens page
    # @mariam It doesn't change anything from the execution side , but try to use Then to check the result
    # @mariam Not as a AND
    # @mariam Re-use the step from landing page switching networks , also a typo here
    Given User has opened the tokens page page on "matic"
    And Super tokens are visible for "matic"
    # @mariam Make the step accept network name as a parameter , and remove the hardcoded matic from the functions in it
    Then User filters super tokens by name
    # @mariam Make the step accept network name as a parameter , and remove the hardcoded matic from the functions in it
    Then User filters super tokens by symbol
    Then User filters super tokens by listed
    Then User filters super tokens by not listed
    Then User switches network for "optimism-mainnet"


