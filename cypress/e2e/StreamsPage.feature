Feature: Stream page test cases

  Scenario: Stream page and the data shown in it
    Given User has opened the "ended stream" page on "matic"
    And User opens the settings menu
    And User changes the ether decimal places to 18
    And User closes the settings menu
    Then The streamed token , sender and receiver are shown on "matic"
    And The current stream flow rate and total amount streamed are shown on "matic"
    And Stream period data is shown on "matic"
