import {BasePage} from "../BasePage";

const TOKEN_LISTED_STATUS = "[data-cy=token-listed-status] span"
const TOKEN_SYMBOL = "[data-cy=token-symbol] span"
const TOKEN_ADDRESS = "[data-cy=token-address] span"
const TOKEN_FANCY_NAME = "[data-cy=token-fancy-network] span"
const TOKEN_UNDERLYING_ADDRESS = "[data-cy=underlying-token-address] span div"
const STREAMS_SENDER = "[data-field=sender]"
const STREAMS_RECEIVER = "[data-field=receiver]"
const STREAMS_FLOW_RATES = "[data-cy=flowrate]"
const INDEX_PUBLISHERS = "[data-field=publisher] a"
const INDEX_ID = "[data-field=indexId]"
const TOTAL_AMOUNT_DISTRIBUTED = "[data-field=totalAmountDistributedUntilUpdatedAt]"
const EVENT_NAMES = "[data-field=name][role=cell]"
const EVENT_BLOCKNUMBERS = "[data-field=blockNumber][role=cell]"
const EVENT_SHORT_TX_HASH = "[data-field=transactionHash] a div"


export class TokenPage extends BasePage {

  static validateListedTokenStatus(text: string) {
    this.containsText(TOKEN_LISTED_STATUS, text)
  }

  static validateTokenData(network: string) {
    cy.fixture("tokenData").then(token => {
      this.containsText(TOKEN_SYMBOL, token[network].symbol)
      this.containsText(TOKEN_ADDRESS, token[network].address)
      this.containsText(TOKEN_FANCY_NAME, token[network].networkFancyName)
      this.containsText(TOKEN_UNDERLYING_ADDRESS, token[network].underlyingTokenAddress)
    })
  }

  static validateLoadedTokenStreamData() {
    this.isVisible(STREAMS_SENDER)
    this.isVisible(STREAMS_RECEIVER)
    this.isVisible(STREAMS_FLOW_RATES)
  }

  static validateLoadedIndexData() {
    this.isVisible(INDEX_PUBLISHERS)
    this.isVisible(INDEX_ID)
    this.isVisible(TOTAL_AMOUNT_DISTRIBUTED)
  }

  static validateLoadedEventsData() {
    this.isVisible(EVENT_NAMES)
    this.isVisible(EVENT_BLOCKNUMBERS)
    this.isVisible(EVENT_SHORT_TX_HASH)
  }
}
