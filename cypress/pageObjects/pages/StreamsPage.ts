import {BasePage} from "../BasePage";

const ACCOUNT_ADDRESSES = "[data-cy=account-address]"
const TOKEN_NAME = "[data-cy=streamed-token] [data-cy=token-address]"
const TOTAL_STREAMED = "[data-cy=flow-rate-list] [data-cy=total-streamed]"
const CURRENT_FLOW_RATE = "[data-cy=current-flow-rate] span span"
const FLOW_RATE_TOKEN_NAME = "[data-cy=flow-rate-list] [data-cy=token-address]"
const STREAM_PERIOD_FLOW_RATES = "[data-cy=flowrate]"
const STREAM_PERIOD_FROM = "[data-field=startedAtTimestamp][role=cell]"
const STREAM_PERIOD_TO = "[data-field=stoppedAtTimestamp][role=cell]"
const STREAM_PERIOD_TOTAL_STREAMED = "[data-cy=stream-period-grid] [data-cy=total-streamed]"

export class StreamsPage extends BasePage {

  static validateTokenSenderReceiver(network: string) {
    cy.fixture("streamData").then(streamData => {
      this.hasText(TOKEN_NAME, streamData[network].token)
      cy.get(ACCOUNT_ADDRESSES).eq(0).should("have.text", streamData[network].sender)
      cy.get(ACCOUNT_ADDRESSES).eq(1).should("have.text", streamData[network].receiver)
    })
  }

  static validateFlowRateAndTotalAmountStreamed(network: string) {
    cy.fixture("streamData").then(streamData => {
      this.hasText(CURRENT_FLOW_RATE, streamData[network].currentFlowRate)
      this.hasText(TOTAL_STREAMED, streamData[network].totalAmountStreamed)
      this.hasText(FLOW_RATE_TOKEN_NAME, streamData[network].streamedTokenSymbol)
    })
  }


  static validateStreamPeriods(network: string) {
    cy.fixture("streamData").then(streamData => {
      streamData[network].streamPeriods.forEach((period: any, index: number) => {
        cy.get(STREAM_PERIOD_FLOW_RATES).eq(index).should("have.text", period.flowRate)
        cy.get(STREAM_PERIOD_TOTAL_STREAMED).eq(index).should("have.text", period.totalStreamed)
      })
    })
  }
}

