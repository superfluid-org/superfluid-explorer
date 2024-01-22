import { FC, ReactElement } from 'react'

import AppLink from '../../../../components/AppLink/AppLink'
import HelpAlert from '../../../../components/Info/HelpAlert'
import { Network } from '../../../../redux/networks'
import SuperTokenStreamsTable from './SuperTokenStreamsTable'

interface Props {
  network: Network
  tokenAddress: string
}

const SuperTokenStreams: FC<Props> = ({
  network,
  tokenAddress
}): ReactElement => {
  return (
    <>
      <HelpAlert sx={{ mb: 3 }}>
        Stream represents super token flow between a sender and a receiver.
        Sender accounts can create, update, and delete streams, while receiver
        accounts can delete streams. However, a pair of addresses may only have
        one stream open per token (but this stream may be updated at any time by
        the sender).{' '}
        <AppLink
          data-cy={'streams-help-alert-link'}
          href="https://docs.superfluid.finance/superfluid/protocol-developers/interactive-tutorials/money-streaming-1"
          target="_blank"
        >
          Read more
        </AppLink>
      </HelpAlert>

      <SuperTokenStreamsTable network={network} tokenAddress={tokenAddress} />
    </>
  )
}

export default SuperTokenStreams
