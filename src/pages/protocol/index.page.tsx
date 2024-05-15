import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { defaultNetwork } from '../../redux/networks'

const ProtocolRedirect: NextPage = () => {
  const router = useRouter()
  useEffect(() => void router.replace(`/${defaultNetwork.slugName}/protocol`), [])

  return null
}

export default ProtocolRedirect
