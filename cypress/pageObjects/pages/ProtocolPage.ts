import {BasePage} from "../BasePage";
import protocolContracts from "../../../src/redux/protocolContracts";

const PROTOCOL_BUTTON = 'a[href="/protocol"]'
const NETWORK_RIGHT_ARROW = "[data-testid=KeyboardArrowRightIcon]"
const DEPOSIT_SIZE = "[data-cy=deposit] > .MuiTypography-body1"
const OWED_DEPOSIT_SIZE = "[data-cy=owed-deposit] > .MuiTypography-body1"
const PATRICIAN_PERIOD = "[data-cy=patrician-period] > .MuiTypography-body1"
const MINIMUM_EXIT_PERIOD = "[data-cy=toga-min-exit-period] > .MuiTypography-body1"
const DEFAULT_EXIT_PERIOD = "[data-cy=toga-default-exit-period] > .MuiTypography-body1"
const RESOLVER = "[data-cy=resolver-address] > .MuiTypography-body2"
const CFA_V1 = "[data-cy=CFAv1-address] > .MuiTypography-body2"
const SUPER_TOKEN_FACTORY = "[data-cy=SuperTokenFactory-address] > .MuiTypography-body2"
const TOGA = "[data-cy=TOGA-address] > .MuiTypography-body2"
const HOST = "[data-cy=host-address] > .MuiTypography-body2"
const IDA_V1 = "[data-cy=IDAv1-address] > .MuiTypography-body2"
const SUPERFLUID_LOADER_V1 = "[data-cy=SuperLoaderV1-address] > .MuiTypography-body2"


export class ProtocolPage extends BasePage {

  static openProtocolPage() {
    this.click(PROTOCOL_BUTTON)
  }

  static switchLNetwork(network: string) {
    this.click(NETWORK_RIGHT_ARROW)
    this.click("[data-cy=" + network + "-landing-button]")
    this.hasAttributeWithValue("[data-cy=" + network + "-landing-button]", "aria-selected", "true")
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
    this.hasText(RESOLVER, protocolContracts[network].resolver)
    this.hasText(CFA_V1, protocolContracts[network].CFAv1)
    this.hasText(SUPER_TOKEN_FACTORY, protocolContracts[network].superTokenFactory)
    //this.hasText(TOGA, protocolContracts[network].TOGA)
    this.hasText(HOST, protocolContracts[network].host)
    this.hasText(IDA_V1, protocolContracts[network].IDAv1)
    this.hasText(SUPERFLUID_LOADER_V1, protocolContracts[network].superfluidLoaderv1)
  }
}
