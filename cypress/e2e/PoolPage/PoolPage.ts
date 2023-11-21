import { Given } from "cypress-cucumber-preprocessor/steps";
import { PoolPage } from "../../pageObjects/pages/PoolPage";

Given(`Information about the pool is showing up correctly`, () => {
  PoolPage.validatePoolData("avalanche-fuji");
});

Given(`The pool flow distributions table shows the correct data`, () => {
  PoolPage.validateFlowDistributionTable("avalanche-fuji");
});

Given(`The pool instant distributions table shows the correct data`, () => {
  PoolPage.validateInstantDistributionTable("avalanche-fuji");
});

Given(`The pool members table shows the correct data`, () => {
  PoolPage.validateMemberTableData("avalanche-fuji");
});
