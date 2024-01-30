import { NextPage } from 'next'
import { useContext } from 'react'

import IdContext from '../../../contexts/IdContext'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { PoolMemberPageContent } from './PoolMemberPageContent'

const PoolMemberPage: NextPage = () => {
  const network = useNetworkContext()
  const poolMemberId = useContext(IdContext)

  return <PoolMemberPageContent poolMemberId={poolMemberId} network={network} />
}

export default PoolMemberPage
