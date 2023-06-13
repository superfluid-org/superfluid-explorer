Feature: Index Page test cases

  Scenario: Data displayed in the index page
    Given User has opened the "index" page on "goerli"
    Then Index general information is showing correct data for "goerli"
    And Index units overview is showing correct data for "goerli"
    And Distributions table is showing correct data for "goerli"
    And Subscriptions table is showing correct data for "goerli"
    And User opens the first subscription details
    And Subscription page container is visible
