Feature: Index Page test cases

  Scenario: Data displayed in the index page
    Given User has opened the "index" page on "optimism-sepolia"
    Then Index general information is showing correct data for "optimism-sepolia"
    And Index units overview is showing correct data for "optimism-sepolia"
    And Distributions table is showing correct data for "optimism-sepolia"
    And Subscriptions table is showing correct data for "optimism-sepolia"
    And User opens the first subscription details
    And Subscription page container is visible
