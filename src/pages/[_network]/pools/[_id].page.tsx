import { NextPage } from 'next'
import { useContext } from 'react'

import IdContext from '../../../contexts/IdContext'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { PoolPageContent } from './PoolPageContent'

const PoolPage: NextPage = () => {
  const network = useNetworkContext()
  const id = useContext(IdContext)

  return <PoolPageContent id={id} network={network} />
}

export default PoolPage
