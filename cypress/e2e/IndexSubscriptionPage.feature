Feature: Index subscription page test cases

  Scenario: Data displayed in the index subscription page
    Given User has opened the "index subscription" page on "goerli"
    Then Index subscription general information is showing correct data for "goerli"
    And Index subscription units overview is showing correct data for "goerli"
    And Subscription distributions table is showing correct data for "goerli"
    And Units updated table is showing correct data for "goerli"
