Feature: Protocol page test cases

  Scenario Outline: Data displayed in "<network>" protocol page
    Given User has opened the "landing" page
    And User clicks on the protocol button
    Then User switches network for "<network>"
    And General protocol information is showing correct data for "<network>"
    Examples:
      | network          |
      | matic            |
      | xdai             |
      | arbitrum-one     |
      | optimism-mainnet |
      | avalanche-c      |
      | avalanche-fuji   |
      | bnb-smart-chain  |
      | mumbai           |
      | celo             |
      | base             |
      | scroll           |

