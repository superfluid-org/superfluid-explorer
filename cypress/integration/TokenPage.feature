Feature: Token page test cases

  Scenario Outline: Data displayed in token pages
    Given User has opened the "listed token" page on "<network>"
    And The token address, symbol , underlying address , network and listing is shown correctly for "<network>"
    #And The account streams are shown correctly for "<network>"
    #And User switches to "indexes" tab
    #And The account publications are shown correctly for "<network>"
    #And User switches to "super tokens" tab
    #And The account balances are shown correctly for "<network>"
    #And User switches to "events" tab
    #Then The account events are shown correctly for "<network>"
    Examples:
      | network          |
      | xdai             |
#      | arbitrum-rinkeby |
#      | avalanche-fuji   |
#      | goerli           |
#      | kovan            |
#      | mumbai           |
#      | optimism-kovan   |
#      | rinkeby          |
#      | ropsten          |
