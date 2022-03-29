import {BasePage} from "../BasePage";

const TOKEN_LISTED_STATUS = "[data-cy=token-listed-status] span"
const TOKEN_SYMBOL = "[data-cy=token-symbol] span"
const TOKEN_ADDRESS = "[data-cy=token-address] span"
const TOKEN_FANCY_NAME = "[data-cy=token-fancy-network] span"
const TOKEN_UNDERLYING_ADDRESS = "[data-cy=underlying-token-address] span div"
const STREAMS_SENDER = "[data-cy=sender]"
const STREAMS_RECEIVER = "[data-cy=receiver]"
const STREAMS_FLOW_RATES = "[data-cy=flowrate]"
const INDEX_PUBLISHERS = "[data-cy=publisher]"
const INDEX_ID = "[data-cy=index-id]"
const TOTAL_AMOUNT_DISTRIBUTED = "[data-cy=total-distributed]"
const EVENT_NAMES = "[data-cy=event-name]"
const EVENT_BLOCK_NUMBERS = "[data-cy=event-block-number]"
const EVENT_SHORT_TX_HASH = "[data-cy=transaction-hash]"


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
    this.isVisible(EVENT_BLOCK_NUMBERS)
    this.isVisible(EVENT_SHORT_TX_HASH)
  }
}
