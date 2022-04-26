import {BasePage} from "../BasePage";

//Temporary Selectors
const DEPOSIT_SIZE = ":nth-child(1) > .MuiBox-root > :nth-child(1) > .MuiTypography-body1"
const OWED_DEPOSIT_SIZE = ":nth-child(1) > .MuiBox-root > :nth-child(2) > .MuiTypography-body1"
const PATRICIAN_PERIOD = ":nth-child(3) > .MuiTypography-body1"
const MINIMUM_EXIT_PERIOD = ":nth-child(3) > .MuiBox-root > :nth-child(1) > .MuiTypography-body1"
const DEFAULT_EXIT_PERIOD = ":nth-child(3) > .MuiBox-root > :nth-child(2) > .MuiTypography-body1"
const RESOLVER = ":nth-child(1) > .MuiListItemText-root > .MuiTypography-body2 > .css-1d9cypr-MuiStack-root"
const CFA_V1 = ":nth-child(3) > .MuiListItemText-root > .MuiTypography-body2 > .css-1d9cypr-MuiStack-root"
const SUPER_TOKEN_FACTORY = ":nth-child(5) > .MuiListItemText-root > .MuiTypography-body2 > .css-1d9cypr-MuiStack-root"
const TOGA = ":nth-child(7) > .MuiListItemText-root > .MuiTypography-body2 > .css-1d9cypr-MuiStack-root"
const HOST = ":nth-child(2) > .MuiListItemText-root > .MuiTypography-body2 > .css-1d9cypr-MuiStack-root"
const IDA_V1 = ":nth-child(4) > .MuiListItemText-root > .MuiTypography-body2 > .css-1d9cypr-MuiStack-root"
const SUPERFLUID_LOADER_V1 = ":nth-child(6) > .MuiListItemText-root > .MuiTypography-body2 > .css-1d9cypr-MuiStack-root"
const OPTIMISM_BUTTON = "[data-cy=optimism-mainnet-landing-button]"

export class ProtocolPage extends BasePage {

  static openProtocolPage() {
    cy.visit('/protocol')
  }

  static validateGovernanceParameters(network: string) {
    cy.fixture("protocolData").then(protocol => {
      this.hasText(DEPOSIT_SIZE, protocol[network].DepositSize)
      this.hasText(OWED_DEPOSIT_SIZE, protocol[network].OwedDepositSize)
      this.hasText(PATRICIAN_PERIOD, protocol[network].PatricianPeriod)
      this.hasText(MINIMUM_EXIT_PERIOD, protocol[network].MinimumExitPeriod)
      this.hasText(DEFAULT_EXIT_PERIOD, protocol[network].DefaultExitPeriod)
    })
  }

  static validateContractAddresses(network: string) {
   cy.fixture("protocolData").then(protocol => {
     this.hasText(RESOLVER, protocol[network].Resolver)
     this.hasText(CFA_V1, protocol[network].CFAv1)
     this.hasText(SUPER_TOKEN_FACTORY, protocol[network].SuperTokenFactory)
     this.hasText(TOGA, protocol[network].TOGA)
     this.hasText(HOST, protocol[network].Host)
     this.hasText(IDA_V1, protocol[network].IDAv1)
     this.hasText(SUPERFLUID_LOADER_V1, protocol[network].SuperfluidLoaderV1)
   })
  }

  static switchNetworks(network: string) {
    cy.fixture("protocolData").then(protocol => {
      this.click(OPTIMISM_BUTTON)
      this.hasText(RESOLVER, protocol[network].Resolver)
    })
  }
}
