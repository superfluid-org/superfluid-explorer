import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { PoolMemberPage } from "../../pageObjects/pages/PoolMemberPage";

When(`Information about the pool member is showing up correctly`, () => {
  PoolMemberPage.validatePoolMemberGeneralData("avalanche-fuji");
});
Given(`Pool member flow distributions table shows the correct data`, () => {
  PoolMemberPage.validatePoolMemberFlowDistributionsTable("avalanche-fuji");
});
Given(`Pool member instant distributions table shows the correct data`, () => {
  PoolMemberPage.validatePoolMemberInstantDistributionsTable("avalanche-fuji");
});
Given(`Pool member unit update table shows the correct data`, () => {
  PoolMemberPage.validatePoolMemberUnitUpdateTable("avalanche-fuji");
});
