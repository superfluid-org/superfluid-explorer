import Decimal from 'decimal.js'
import { ethers } from 'ethers'

import { calculatePoolPercentage } from '../../../src/hooks/usePoolPercentage'
import { timeAgo } from '../../../src/utils/dateTime'
import { BasePage } from '../BasePage'

const POOL_ADDRESS = '[data-cy=pool-subscribers-short-hash]'
const POOL_TOKEN = '[data-cy=pool-subscribers-token]'
const POOL_ADMIN = '[data-cy=subscribers-admin]'
const POOL_MEMBER = '[data-cy=subscription-member]'
const POOL_UNITS = '[data-cy=subscription-units]'
const POOL_APPROVAL_STATUS = '[data-cy=subscription-approval]'
const POOL_TOTAL_AMOUNT_CLAIMED = '[data-cy=subscription-total-amount-claimed]'
const POOL_LAST_UPDATED_AT = '[data-cy=last-updated-at]'
const POOL_CREATED_AT = '[data-cy=created-at]'
const FLOW_DISTRIBUTION_TABLE_OPERATOR =
  '[data-cy=flow-distributions-grid] .MuiDataGrid-cell[data-field=operator]'
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
const UNITS_TABLE_DATE =
  '[data-cy=units-updated-grid] .MuiDataGrid-cell[data-field=timestamp]'
const UNITS_TABLE_UNITS =
  '[data-cy=units-updated-grid] .MuiDataGrid-cell[data-field=units]'

export class PoolMemberPage extends BasePage {
  static validatePoolMemberGeneralData(network: string) {
    cy.fixture('gdaData').then((data) => {
      console.log(data[network].poolMembers)
      this.containsText(
        POOL_TOKEN,
        data[network].poolMembers[0].pool.token.symbol
      )
      this.containsText(
        POOL_ADMIN,
        ethers.utils.getAddress(data[network].poolMembers[0].pool.admin.id)
      )
      this.containsText(POOL_ADDRESS, data[network].poolMembers[0].pool.id)
      this.containsText(
        POOL_MEMBER,
        ethers.utils.getAddress(data[network].poolMembers[0].id.split('-')[2])
      )
      this.containsText(
        POOL_UNITS,
        `${calculatePoolPercentage(
          new Decimal(data[network].poolMembers[0].pool.totalUnits),
          new Decimal(data[network].poolMembers[0].units)
        )
          .toDP(2)
          .toString()}%`
      )
      const createdAtDate = new Date(
        data[network].poolMembers[0].createdAtTimestamp * 1000
      )
      this.containsText(POOL_CREATED_AT, timeAgo(createdAtDate.getTime()))
      const lastUpdatedAtDate = new Date(
        data[network].poolMembers[0].updatedAtTimestamp * 1000
      )

      this.containsText(
        POOL_LAST_UPDATED_AT,
        timeAgo(lastUpdatedAtDate.getTime())
      )
      this.containsText(
        POOL_APPROVAL_STATUS,
        data[network].poolMembers[0].isConnected ? 'Yes' : 'No'
      )
      //FIX the data shown in console is wrong atm
      this.containsText(
        POOL_TOTAL_AMOUNT_CLAIMED,
        data[network].poolMembers[0].totalAmountClaimed / 1e18
      )
    })
  }

  static validatePoolMemberInstantDistributionsTable(network: string) {
    cy.fixture('gdaData').then((data) => {
      data[network].poolMemberInstantDistributionTable.forEach(
        (entry: any, index: number) => {
          cy.get(INSTANT_DISTRIBUTION_TABLE_DATE)
            .eq(index)
            .should('have.text', entry.date)
          cy.get(INSTANT_DISTRIBUTION_TABLE_AMOUNT)
            .eq(index)
            .should('have.text', entry.amount)
        }
      )
    })
  }

  static validatePoolMemberUnitUpdateTable(network: string) {
    cy.fixture('gdaData').then((data) => {
      data[network].poolMemberUnitUpdateTable.forEach(
        (entry: any, index: number) => {
          cy.get(UNITS_TABLE_DATE).eq(index).should('have.text', entry.date)
          cy.get(UNITS_TABLE_UNITS).eq(index).should('have.text', entry.amount)
        }
      )
    })
  }

  static validatePoolMemberFlowDistributionsTable(network: string) {
    cy.fixture('gdaData').then((data) => {
      data[network].memberFlowDistributionTable.forEach(
        (entry: any, index: number) => {
          cy.get(FLOW_DISTRIBUTION_TABLE_OPERATOR)
            .eq(index)
            .should('have.text', entry.date)
          cy.get(FLOW_DISTRIBUTION_TABLE_FLOW_RECIPIENT)
            .eq(index)
            .should('have.text', entry.amount)
          cy.get(FLOW_DISTRIBUTION_TABLE_DISTRIBUTION_DATE)
            .eq(index)
            .should('have.text', entry.date)
          cy.get(FLOW_DISTRIBUTION_TABLE_ADJUSTMENT_FLOW_RATE)
            .eq(index)
            .should('have.text', entry.amount)
        }
      )
    })
  }
}
