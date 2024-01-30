import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import FullPageLoader from '../../components/Layout/FullPageLoader'

const NoSsr = dynamic(() => import('./SubgraphExplorer'), {
  ssr: false,
  loading: () => <FullPageLoader />
})

// NOTE: Don't start loading the Subgraph component on the server.
const SubgraphPage: NextPage = () => {
  return <NoSsr />
}

export default SubgraphPage
