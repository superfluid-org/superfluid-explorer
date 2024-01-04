import { FC, ReactElement } from 'react'

import AppLink from '../../../components/AppLink/AppLink'
import HelpAlert from '../../../components/Info/HelpAlert'
import Map from '../../../components/Map/Map'
import { Network } from '../../../redux/networks'

const AccountMap: FC<{
  network: Network
  accountAddress: string
}> = ({ network, accountAddress }): ReactElement => {
  return (
    <>
      <HelpAlert sx={{ mb: 3 }}>
        Visualise the incoming and outgoing streams that are related to the
        current address.{' '}
        <AppLink
          href="https://docs.superfluid.finance/superfluid/protocol-developers/guides/super-tokens"
          target="_blank"
        >
          Read more
        </AppLink>
      </HelpAlert>

      <Map network={network} accountAddress={accountAddress} />
    </>
  )
}

export default AccountMap
