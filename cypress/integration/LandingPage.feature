Feature: Landing page

  Scenario: Landing page recent activity
    Given User has opened the "landing" page
    Then The latest streams for "matic" are shown
    And All of the hyperlinks lead to "matic" pages

  #Cypress does not support multiple origins during the same test case
  #So the href attribute of elements get checked and then the page is opened in the next test case
  Scenario: Landing page terms of use link part one
    Given User has opened the "landing" page
    Then The "terms of use" hyperlink is set correctly
    And The "superfluid protocol" hyperlink is set correctly
    And The "privacy policy" hyperlink is set correctly

  Scenario Outline: Landing page terms of use link part two
    Given User has opened the "<link>" page
    Then There are no elements containing "404"
    And There are no elements containing "not found"
    Examples:
      | link                |
      | terms of use        |
      | superfluid protocol |
      | privacy policy      |


  Scenario Outline: Switching between networks on latest streams section
    Given User has opened the "landing" page
    And User switches the latest stream network data to "<network>"
    Then The latest streams for "<network>" are shown
    And All of the hyperlinks lead to "<network>" pages
    Examples:
      | network          |
      | xdai             |
      | arbitrum-rinkeby |
#      | avalanche-fuji   |
#      | goerli           |
#      | kovan            |
#      | mumbai           |
#      | optimism-kovan   |
#      | rinkeby          |
#      | ropsten          |
