import { Skeleton, TableCell, TableRow } from '@mui/material'
import { PoolMember } from '@superfluid-finance/sdk-core'
import { FC } from 'react'

import { AccountAddressFormatted } from '../../../components/Address/AccountAddressFormatted'
import FlowingBalanceWithToken from '../../../components/Amount/FlowingBalanceWithToken'
import DetailsButton from '../../../components/Details/DetailsButton'
import { PoolPercentage } from '../../../components/PoolPercentage/PoolPercentage'
import TimeAgo from '../../../components/TimeAgo/TimeAgo'
import { Network } from '../../../redux/networks'
import { PoolMemberDetailsDialog } from '../pool-members/PoolMemberDetails'
import { PoolMemberTotalAmountReceived } from '../pool-members/PoolMemberTotalAmountReceived'
import { PoolQuery } from '../pools/PoolQuery'

type AccountPoolMemberRow = {
  network: Network
  member: PoolMember
}

export const AccountPoolMemberRow: FC<AccountPoolMemberRow> = ({
  network,
  member
}) => {
  return (
    <PoolQuery chainId={network.chainId} id={member.pool}>
      {({ currentData: pool }) => (
        <TableRow hover>
          <TableCell data-cy={'pool-id'} className="address">
            <AccountAddressFormatted
              network={network}
              address={member.pool}
              ellipsis={6}
            />
          </TableCell>

          <TableCell data-cy={'amount-received'}>
            {pool ? (
              <PoolMemberTotalAmountReceived
                chainId={network.chainId}
                memberAddress={member.account}
                poolAddress={pool.id}
              >
                {({
                  memberCurrentTotalAmountReceived,
                  timestamp,
                  memberFlowRate
                }) => (
                  <FlowingBalanceWithToken
                    balance={memberCurrentTotalAmountReceived}
                    balanceTimestamp={timestamp}
                    flowRate={memberFlowRate}
                    TokenChipProps={{
                      network: network,
                      tokenAddress: member.token
                    }}
                  />
                )}
              </PoolMemberTotalAmountReceived>
            ) : (
              <Skeleton sx={{ width: '100px' }} />
            )}
          </TableCell>
          <TableCell data-cy={'connected-status'}>
            {member.isConnected ? 'Yes' : 'No'}
          </TableCell>
          <TableCell data-cy={'member-units'}>
            {pool ? (
              <PoolPercentage
                totalUnits={pool.totalUnits}
                individualUnits={member.units}
              />
            ) : (
              <Skeleton sx={{ width: '50px' }} />
            )}
          </TableCell>

          <TableCell>
            <TimeAgo subgraphTime={member.updatedAtTimestamp} />
          </TableCell>

          <TableCell align="right">
            <PoolMemberDetailsDialog
              network={network}
              poolMemberId={member.id.toString()}
            >
              {(onClick) => <DetailsButton onClick={onClick} />}
            </PoolMemberDetailsDialog>
          </TableCell>
        </TableRow>
      )}
    </PoolQuery>
  )
}
