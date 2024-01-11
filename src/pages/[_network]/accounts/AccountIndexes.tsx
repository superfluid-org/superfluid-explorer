import { FC, ReactElement } from 'react'

import AppLink from '../../../components/AppLink/AppLink'
import InfoHelpAlert from '../../../components/Info/HelpAlert'
import { Network } from '../../../redux/networks'
import AccountIndexPublicationsTable from './AccountIndexPublicationsTable'
import AccountIndexSubscriptionsTable from './AccountIndexSubscriptionsTable'

const AccountIndexes: FC<{
  network: Network
  accountAddress: string
}> = ({ network, accountAddress }): ReactElement => {
  return (
    <>
      <InfoHelpAlert>
        A pool of subscribers, each of which who holds a given number of units
        in the index. An index is created by a publisher who may update the
        index or distribute funds to the index using the Instant Distribution
        Agreement (IDA).{' '}
        <AppLink
          href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/instant-distribution"
          target="_blank"
        >
          Read more
        </AppLink>
      </InfoHelpAlert>

      <AccountIndexPublicationsTable
        network={network}
        accountAddress={accountAddress}
      />

      <AccountIndexSubscriptionsTable
        network={network}
        accountAddress={accountAddress}
      />
    </>
  )
}

export default AccountIndexes
