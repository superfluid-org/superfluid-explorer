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

  Scenario: Account with published indexes and the data shown in the index tab publications section
    Given User has opened the "super app" page on "goerli"
    And User switches to "indexes" tab
    And The super app publications are shown correctly for "goerli"
    And User opens the publication details
    Then The index details container is visible

  Scenario: Changing stream granularity
    Given User has opened the "ongoing streams account" page on "matic"
    And User opens the settings menu
    And User changes the stream granularity to "Second"
    Then Flow rates on "matic" are shown in "second"
    And User changes the stream granularity to "Minute"
    Then Flow rates on "matic" are shown in "minute"
    And User changes the stream granularity to "Hour"
    Then Flow rates on "matic" are shown in "hour"
    And User changes the stream granularity to "Day"
    Then Flow rates on "matic" are shown in "day"
    And User changes the stream granularity to "Week"
    Then Flow rates on "matic" are shown in "week"
    And User changes the stream granularity to "30 Day"
    Then Flow rates on "matic" are shown in "month"

  Scenario: Hovering on account page tooltips and help alert links
    Given User has opened the "static balance account" page on "matic"
    And The "streams" help alert is shown
    And User switches to "indexes" tab
    Then Tooltip is visible when user hovers the "subscriptions" tooltip icon

