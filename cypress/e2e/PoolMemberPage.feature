Feature: Pool member page test cases

        Scenario: Tooltips and their links shown in the pool member page tests
                Given User has opened the "pool member" page on "avalanche-fuji"
                Then Tooltip is visible when user hovers the "admin" tooltip icon
                Then Tooltip is visible when user hovers the "approval" tooltip icon
                Then Tooltip is visible when user hovers the "units" tooltip icon
                Then Tooltip is visible when user hovers the "flow-distributions" tooltip icon


        Scenario: Pool member general information showing up correctly
                Given User has opened the "pool member" page on "avalanche-fuji"
                Then Information about the pool member is showing up correctly


        Scenario: Pool member flow distributions table showing correct data
                Given User has opened the "pool member" page on "avalanche-fuji"
                Then Pool member flow distributions table shows the correct data

        Scenario: Pool member units update table showing correct data
                Given User has opened the "pool member" page on "avalanche-fuji"
                Then Pool member unit update table shows the correct data

        # Maybe one day , but not today , shall we see instant distributions per pool member
        # Scenario: Pool member instant distributions table showing correct data
        #         Given User has opened the "pool member" page on "avalanche-fuji"
        #         Then Pool member instant distributions table shows the correct data