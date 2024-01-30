Feature: Pool page test cases

        Scenario: Tooltips and their links shown in the pool page
                Given User has opened the "GDA pool" page on "avalanche-fuji"
                Then Tooltip is visible when user hovers the "admin" tooltip icon
                Then Tooltip is visible when user hovers the "pool-id" tooltip icon
                Then Tooltip is visible when user hovers the "total-connected-units" tooltip icon
                Then Tooltip is visible when user hovers the "total-disconnected-units" tooltip icon
                Then Tooltip is visible when user hovers the "flows" tooltip icon
                Then Tooltip is visible when user hovers the "distributions" tooltip icon
                Then Tooltip is visible when user hovers the "pool-members" tooltip icon
                Then Tooltip is visible when user hovers the "approved" tooltip icon

        Scenario: Pool general information showing up correctly
                Given User has opened the "GDA pool" page on "avalanche-fuji"
                Then Information about the pool is showing up correctly


        Scenario: Pool flow distributions table showing correct data
                Given User has opened the "GDA pool" page on "avalanche-fuji"
                Then The pool flow distributions table shows the correct data

        Scenario: Pool instant distributions table showing correct data
                Given User has opened the "GDA pool" page on "avalanche-fuji"
                Then The pool instant distributions table shows the correct data

        Scenario: Pool members table showing correct data
                Given User has opened the "GDA pool" page on "avalanche-fuji"
                Then The pool members table shows the correct data