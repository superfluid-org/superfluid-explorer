Feature: Index subscription page test cases

  Scenario: Data displayed in the index subscription page
    Given User has opened the "index subscription" page on "mumbai"
    Then Index subscription general information is showing correct data for "mumbai"
    And Index subscription units overview is showing correct data for "mumbai"
    And Subscription distributions table is showing correct data for "mumbai"
    And Units updated table is showing correct data for "mumbai"
