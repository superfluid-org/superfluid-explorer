import { NextPage } from 'next'
import { useContext } from 'react'

import IdContext from '../../../contexts/IdContext'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { IndexSubscriptionPageContent } from './IndexSubscriptionPageContent'

const IndexSubscriptionPage: NextPage = () => {
  const network = useNetworkContext()
  const indexSubscriptionId = useContext(IdContext)

  return (
    <IndexSubscriptionPageContent
      indexSubscriptionId={indexSubscriptionId}
      network={network}
    />
  )
}

export default IndexSubscriptionPage
