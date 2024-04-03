Feature: Index subscription page test cases

  Scenario: Data displayed in the index subscription page
    Given User has opened the "index subscription" page on "avalanche-fuji"
    Then Index subscription general information is showing correct data for "avalanche-fuji"
    And Index subscription units overview is showing correct data for "avalanche-fuji"
    And Subscription distributions table is showing correct data for "avalanche-fuji"
    And Units updated table is showing correct data for "avalanche-fuji"
