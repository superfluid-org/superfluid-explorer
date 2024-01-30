import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { polygon } from '../../redux/networks'

const ProtocolRedirect: NextPage = () => {
  const router = useRouter()
  useEffect(() => void router.replace(`/${polygon.slugName}/protocol`), [])

  return null
}

export default ProtocolRedirect
