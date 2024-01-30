import { TabContext, TabPanel } from '@mui/lab'
import { Box, Card, CardContent, Container, NoSsr } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import NetworkTabs from '../../../components/NetworkTabs/NetworkTabs'
import { useNetworkContext } from '../../../contexts/NetworkContext'
import { networks } from '../../../redux/networks'
import SuperTokensTable from './[_id]/SuperTokensTable'

const SuperTokens: NextPage = ({}) => {
  const network = useNetworkContext()

  const router = useRouter()
  const onTabChange = (newValue: string) =>
    router.replace({
      query: {
        ...router.query,
        _network: newValue
      }
    })

  return (
    <Container component={Box} sx={{ my: 2, py: 2 }}>
      <TabContext value={network.slugName}>
        <Card>
          <NetworkTabs
            activeTab={network.slugName}
            setActiveTab={onTabChange}
            prefetch={false}
          />
        </Card>

        {networks.map((network) => (
          <TabPanel
            key={network.slugName}
            value={network.slugName}
            sx={{ px: 0 }}
          >
            <Card>
              <CardContent>
                <NoSsr>
                  <SuperTokensTable network={network} />
                </NoSsr>
              </CardContent>
            </Card>
          </TabPanel>
        ))}
      </TabContext>
    </Container>
  )
}

export default SuperTokens
