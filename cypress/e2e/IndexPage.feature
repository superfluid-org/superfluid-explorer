Feature: Index Page test cases

  Scenario: Data displayed in the index page
    Given User has opened the "index" page on "avalanche-fuji"
    Then Index general information is showing correct data for "avalanche-fuji"
    And Index units overview is showing correct data for "avalanche-fuji"
    And Distributions table is showing correct data for "avalanche-fuji"
    And Subscriptions table is showing correct data for "avalanche-fuji"
    And User opens the first subscription details
    And Subscription page container is visible
