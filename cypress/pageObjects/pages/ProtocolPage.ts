import protocolContracts from "../../../src/redux/protocolContracts";
import { BasePage } from "../BasePage";

const PROTOCOL_BUTTON = '[data-cy="protocol-button"]';
const NETWORK_RIGHT_ARROW = "[data-testid=KeyboardArrowRightIcon]";
const DEPOSIT_SIZE = "[data-cy=deposit] > span";
const OWED_DEPOSIT_SIZE = "[data-cy=owed-deposit] > span";
const PATRICIAN_PERIOD = "[data-cy=patrician-period] > span";
const MINIMUM_EXIT_PERIOD = "[data-cy=toga-min-exit-period] > span";
const DEFAULT_EXIT_PERIOD = "[data-cy=toga-default-exit-period] > span";
const RESOLVER = "[data-cy=resolver-address] p";
const CFA_V1 = "[data-cy=CFAv1-address] p";
const SUPER_TOKEN_FACTORY = "[data-cy=SuperTokenFactory-address] p";
const TOGA = "[data-cy=TOGA-address] p";
const HOST = "[data-cy=host-address] p";
const IDA_V1 = "[data-cy=IDAv1-address] p";
const SUPERFLUID_LOADER_V1 = "[data-cy=SuperLoaderV1-address] p";

export class ProtocolPage extends BasePage {
  static switchNetwork(network: string) {
    this.click("[data-cy=" + network + "-landing-button]");
    this.hasAttributeWithValue(
      "[data-cy=" + network + "-landing-button]",
      "aria-selected",
      "true"
    );
  }

  static validateGovernanceParameters(network: string) {
    cy.fixture("protocolData").then((protocol) => {
      this.hasText(DEPOSIT_SIZE, protocol[network].DepositSize);
      this.hasText(OWED_DEPOSIT_SIZE, protocol[network].OwedDepositSize);
      this.hasText(PATRICIAN_PERIOD, protocol[network].PatricianPeriod);
      this.hasText(MINIMUM_EXIT_PERIOD, protocol[network].MinimumExitPeriod);
      this.hasText(DEFAULT_EXIT_PERIOD, protocol[network].DefaultExitPeriod);
    });
  }

  static validateContractAddresses(network: string) {
    this.hasText(RESOLVER, protocolContracts[network].resolver);
    this.hasText(CFA_V1, protocolContracts[network].CFAv1);
    this.hasText(
      SUPER_TOKEN_FACTORY,
      protocolContracts[network].superTokenFactory
    );
    if (protocolContracts[network].TOGA != undefined) {
      this.hasText(TOGA, protocolContracts[network].TOGA);
    }
    this.hasText(HOST, protocolContracts[network].host);
    this.hasText(IDA_V1, protocolContracts[network].IDAv1);
    this.hasText(
      SUPERFLUID_LOADER_V1,
      protocolContracts[network].superfluidLoaderv1
    );
  }

  static clickProtocolButton() {
    this.click(PROTOCOL_BUTTON);
  }
}
