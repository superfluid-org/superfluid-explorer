import { FC, ReactElement } from 'react'

import { Network } from '../../redux/networks'
import AppLink from '../AppLink/AppLink'
import InfoHelpAlert from '../Info/HelpAlert'
import EventTable from './EventTable'

interface Props {
  network: Network
  address: string
}

const EventTableWithInfo: FC<Props> = ({ network, address }): ReactElement => {
  return (
    <>
      <InfoHelpAlert sx={{ mb: 3 }}>
        A timeline of events emitted by contracts that are related to the
        current address.{' '}
        <AppLink
          href="https://docs.superfluid.finance/superfluid/protocol-developers/subgraph#event-entities"
          target="_blank"
        >
          Read more
        </AppLink>
      </InfoHelpAlert>
      <EventTable network={network} accountAddress={address} />
    </>
  )
}

export default EventTableWithInfo
