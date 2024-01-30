import { FC, ReactElement } from 'react'

import AppLink from '../../../components/AppLink/AppLink'
import HelpAlert from '../../../components/Info/HelpAlert'
import { Network } from '../../../redux/networks'
import AccountPoolAdminsTable from './AccountPoolAdminsTable'
import AccountPoolMembersTable from './AccountPoolMembersTable'

const AccountPools: FC<{
  network: Network
  accountAddress: string
}> = ({ network, accountAddress }): ReactElement => {
  return (
    <>
      <HelpAlert data-cy="pools-info-message">
        The GDA introduces a new primitive which enables one-to-many Superfluid
        streaming distributions, becoming the most scalable way to distribute
        recurring funds to a limitless set of recipients in web3. (GDA).{' '}
        <AppLink
          data-cy="gda-read-more-link"
          href="https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/streaming-distributions-coming-soon"
          target="_blank"
        >
          Read more
        </AppLink>
      </HelpAlert>

      <AccountPoolAdminsTable
        network={network}
        accountAddress={accountAddress}
      />

      <AccountPoolMembersTable
        network={network}
        accountAddress={accountAddress}
      />
    </>
  )
}

export default AccountPools
