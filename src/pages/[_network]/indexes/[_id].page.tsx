import { NextPage } from 'next'
import { useContext } from 'react'

import IdContext from '../../../contexts/IdContext'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { IndexPageContent } from './IndexPageContent'

const IndexPage: NextPage = () => {
  const network = useNetworkContext()
  const indexId = useContext(IdContext)

  return <IndexPageContent indexId={indexId} network={network} />
}

export default IndexPage
