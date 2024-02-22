import { FC, ReactElement } from 'react'

import AppLink from '../../../../components/AppLink/AppLink'
import HelpAlert from '../../../../components/Info/HelpAlert'
import { Network } from '../../../../redux/networks'
import SuperTokenPoolsTable from './SuperTokenPoolsTable'

interface Props {
  network: Network
  tokenAddress: string
}

const SuperTokenPools: FC<Props> = ({
  network,
  tokenAddress
}): ReactElement => {
  return (
    <>
      <HelpAlert sx={{ mb: 3 }}>
        A pool of members, each of which who holds a given number of units in
        the pool. An pool is created by a admin who may update the pool or
        distribute funds to the pool using the General Distribution Agreement
        (GDA).{' '}
        <AppLink
          href="https://docs.superfluid.finance/docs/category/distributions"
          target="_blank"
        >
          Read more
        </AppLink>
      </HelpAlert>

      <SuperTokenPoolsTable network={network} tokenAddress={tokenAddress} />
    </>
  )
}

export default SuperTokenPools
