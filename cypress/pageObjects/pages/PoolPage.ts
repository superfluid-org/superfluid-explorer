import Decimal from 'decimal.js'
import { ethers } from 'ethers'

import { calculatePoolPercentage } from '../../../src/hooks/usePoolPercentage'
import { timeAgo } from '../../../src/utils/dateTime'
import { BasePage } from '../BasePage'

const POOL_TOKEN = '[data-cy=token-address]'
const POOL_GENERAL_INFO = '[data-cy=pool-general-info]'
const POOL_ADMIN = '[data-cy=account-address]'
const POOL_ADDRESS = '[data-cy=pool-id]'
const POOL_TOTAL_UNITS = '[data-cy=total-units]'
const POOL_TOTAL_CONNECTED_UNITS = '[data-cy=total-connected-units]'
const POOL_TOTAL_DISCONNECTED_UNITS = '[data-cy=total-disconnected-units]'
const POOL_TOTAL_AMOUNT_DISTRIBUTED = '[data-cy=total-amount-distributed]'
const POOL_TOTAL_INSTANT_DISTRIBUTED = '[data-cy=total-instantly-distributed]'
const MEMBERS_TABLE_CREATED_AT =
  '[data-cy=members-grid] .MuiDataGrid-cell[data-field=updatedAtTimestamp]'
const MEMBERS_TABLE_APPROVED =
  '[data-cy=members-grid] .MuiDataGrid-cell[data-field=approved]'
const MEMBERS_TABLE_TOTAL_AMOUNT_CLAIMED =
  '[data-cy=members-grid] [data-cy=total-streamed]'
const MEMBERS_TABLE_MEMBER_UNITS =
  '[data-cy=members-grid] .MuiDataGrid-cell[data-field=units]'
const MEMBERS_TABLE_DETAILS_BUTTONS =
  '[data-cy=members-grid] .MuiDataGrid-cell[data-field=details]'
const FLOW_DISTRIBUTION_TABLE_OPERATOR =
  '[data-cy=flow-distributions-grid] [data-cy=distributor-address]'
const FLOW_DISTRIBUTION_TABLE_FLOW_RECIPIENT =
  '[data-cy=flow-distributions-grid] .MuiDataGrid-cell[data-field=adjustmentFlowRecipient]'
const FLOW_DISTRIBUTION_TABLE_DISTRIBUTION_DATE =
  '[data-cy=flow-distributions-grid] .MuiDataGrid-cell[data-field=timestamp]'
const FLOW_DISTRIBUTION_TABLE_ADJUSTMENT_FLOW_RATE =
  '[data-cy=flow-distributions-grid] .MuiDataGrid-cell[data-field=adjustmentFlowRate]'
const INSTANT_DISTRIBUTION_TABLE_DATE =
  '[data-cy=instant-distributions-grid] .MuiDataGrid-cell[data-field=timestamp]'
const INSTANT_DISTRIBUTION_TABLE_AMOUNT =
  '[data-cy=instant-distributions-grid] .MuiDataGrid-cell[data-field=distributionAmount]'
const POOL_LAST_UPDATED_AT = '[data-cy=last-updated-at]'
const POOL_CREATED_AT = '[data-cy=created-at]'

export class PoolPage extends BasePage {
  static validatePoolData(network: string) {
    cy.fixture('gdaData').then((data) => {
      this.containsText(POOL_TOKEN, data[network].poolWithData.token.symbol)
      this.hasText(
        POOL_ADMIN,
        ethers.utils.getAddress(data[network].poolWithData.admin.id)
      )
      this.containsText(
        POOL_ADDRESS,
        ethers.utils.getAddress(data[network].poolWithData.id)
      )
      this.containsText(POOL_TOTAL_UNITS, data[network].poolWithData.totalUnits)
      this.containsText(
        POOL_TOTAL_CONNECTED_UNITS,
        data[network].poolWithData.totalConnectedUnits
      )
      this.containsText(
        POOL_TOTAL_DISCONNECTED_UNITS,
        data[network].poolWithData.totalDisconnectedUnits
      )
      this.containsText(
        POOL_TOTAL_AMOUNT_DISTRIBUTED,
        data[network].poolWithData.totalAmountDistributedUntilUpdatedAt / 1e18
      )
      this.containsText(
        POOL_TOTAL_INSTANT_DISTRIBUTED,
        data[network].poolWithData
          .totalAmountInstantlyDistributedUntilUpdatedAt / 1e18
      )
      const createdAtDate = new Date(
        data[network].poolWithData.createdAtTimestamp * 1000
      )
      this.containsText(POOL_CREATED_AT, timeAgo(createdAtDate.getTime()))
      const lastUpdatedAtDate = new Date(
        data[network].poolWithData.updatedAtTimestamp * 1000
      )

      this.containsText(
        POOL_LAST_UPDATED_AT,
        timeAgo(lastUpdatedAtDate.getTime())
      )
    })
  }

  static validateInstantDistributionTable(network: string) {
    cy.fixture('gdaData').then((data) => {
      data[
        network
      ].instantDistributionTable.instantDistributionUpdatedEvents.forEach(
        (entry: any, index: number) => {
          const eventDate = new Date(entry.timestamp * 1000)
          cy.get(INSTANT_DISTRIBUTION_TABLE_DATE)
            .eq(index)
            .should('have.text', timeAgo(eventDate.getTime()))
          //FIX Once distribution amounts calculation makes sense
          //   cy.get(INSTANT_DISTRIBUTION_TABLE_AMOUNT)
          //     .eq(index)
          //     .should("have.text", `fDAIx${entry.amount}`);
        }
      )
    })
  }

  static validateMemberTableData(network: string) {
    cy.fixture('gdaData').then((data) => {
      data[network].poolMembers.forEach((entry: any, index: number) => {
        const eventDate = new Date(entry.createdAtTimestamp * 1000)
        cy.get(MEMBERS_TABLE_CREATED_AT)
          .eq(index)
          .should('have.text', timeAgo(eventDate.getTime()))
        cy.get(MEMBERS_TABLE_APPROVED)
          .eq(index)
          .should('have.text', entry.isConnected ? 'Yes' : 'No')
        cy.get(MEMBERS_TABLE_TOTAL_AMOUNT_CLAIMED)
          .eq(index)
          .should('have.text', entry.totalAmountClaimed / 1e18)
        this.replaceSpacesAndAssertText(
          MEMBERS_TABLE_MEMBER_UNITS,
          `${calculatePoolPercentage(
            new Decimal(entry.pool.totalUnits),
            new Decimal(entry.units)
          )
            .toDP(2)
            .toString()}%`,
          index
        )
        cy.get(MEMBERS_TABLE_MEMBER_UNITS)
          .eq(index)
          .should(
            'have.text',
            `${calculatePoolPercentage(
              new Decimal(entry.pool.totalUnits),
              new Decimal(entry.units)
            )
              .toDP(2)
              .toString()}%`
          )
      })
    })
  }

  static validateFlowDistributionTable(network: string) {
    cy.fixture('gdaData').then((data) => {
      data[network].flowDistributionTable.forEach(
        (entry: any, index: number) => {
          cy.get(FLOW_DISTRIBUTION_TABLE_OPERATOR)
            .eq(index)
            .should('have.text', ethers.utils.getAddress(entry.operator))
          cy.get(FLOW_DISTRIBUTION_TABLE_FLOW_RECIPIENT)
            .eq(index)
            .should(
              'have.text',
              ethers.utils.getAddress(entry.adjustmentFlowRecipient)
            )
          const eventDate = new Date(entry.timestamp * 1000)
          cy.get(FLOW_DISTRIBUTION_TABLE_DISTRIBUTION_DATE)
            .eq(index)
            .should('have.text', timeAgo(eventDate.getTime()))
          this.replaceSpacesAndAssertText(
            FLOW_DISTRIBUTION_TABLE_ADJUSTMENT_FLOW_RATE,
            `${entry.adjustmentFlowRate} fDAIx`,
            index
          )
        }
      )
    })
  }
}
