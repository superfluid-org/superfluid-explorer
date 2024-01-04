import { NextPage } from 'next'
import { useContext } from 'react'

import IdContext from '../../../contexts/IdContext'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { StreamPageContent } from './StreamPageContent'

const StreamPage: NextPage = () => {
  const network = useNetworkContext()
  const streamId = useContext(IdContext)

  return <StreamPageContent streamId={streamId} network={network} />
}

export default StreamPage
