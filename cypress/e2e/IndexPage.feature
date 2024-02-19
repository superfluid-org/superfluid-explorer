Feature: Index Page test cases

  #Will fail because of ~ mr Kaspar
  Scenario: Data displayed in the index page
    Given User has opened the "index" page on "mumbai"
    Then Index general information is showing correct data for "mumbai"
    And Index units overview is showing correct data for "mumbai"
    And Distributions table is showing correct data for "mumbai"
    And Subscriptions table is showing correct data for "mumbai"
    And User opens the first subscription details
    And Subscription page container is visible
