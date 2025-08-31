import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import { CommonElements } from '../../pageObjects/components/CommonElements';
import { IndexSubscriptionPage } from '../../pageObjects/pages/IndexSubscriptionPage';
import { LandingPage } from '../../pageObjects/pages/LandingPage';

/** Switch to a specific tab by its visible name. */
Given('User switches to {string} tab', (tab) => CommonElements.switchToTab(tab));

Then(
  'Index subscription general information is showing correct data for {string}',
  (network) => IndexSubscriptionPage.validateSubscriptionGeneralInfo(network)
);

Then(
  'Index subscription units overview is showing correct data for {string}',
  (network) => IndexSubscriptionPage.validateSubscriptionUnitsInfo(network)
);

Then(
  'Subscription distributions table is showing correct data for {string}',
  (network) => IndexSubscriptionPage.validateSubscriptionDistributions(network)
);

Then(
  'Units updated table is showing correct data for {string}',
  (network) => IndexSubscriptionPage.validateSubscriptionUnitsUpdated(network)
);

/** Open a data page for a specific network. */
Given(
  'User has opened the {string} page on {string}',
  (page, network) => LandingPage.openDataPage(page, network)
);
