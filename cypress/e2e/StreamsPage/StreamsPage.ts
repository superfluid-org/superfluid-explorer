import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {LandingPage} from "../../pageObjects/pages/LandingPage";
import {StreamsPage} from "../../pageObjects/pages/StreamsPage";


Given(`User has opened the {string} page on {string}`, (page, network) => {
  LandingPage.openDataPage(page, network)
});

Then(`The streamed token , sender and receiver are shown on {string}`, (network) => {
  StreamsPage.validateTokenSenderReceiver(network)
});

Then(`The current stream flow rate and total amount streamed are shown on {string}`, (network) => {
  StreamsPage.validateFlowRateAndTotalAmountStreamed(network)
});
Then(`Stream period data is shown on {string}`, (network) => {
  StreamsPage.validateStreamPeriods(network)
});
