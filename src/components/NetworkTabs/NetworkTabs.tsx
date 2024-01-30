import { TabList } from '@mui/lab'
import { NoSsr, Tab } from '@mui/material'
import isEqual from 'lodash/isEqual'

import { useAvailableNetworks } from '../../contexts/AvailableNetworksContext'
import { track } from '../../hooks/useMatomo'
import {
  defaultStreamQueryOrdering,
  defaultStreamQueryPaging
} from '../../pages/NetworkStreams'
import { useAppSelector } from '../../redux/hooks'
import { sfSubgraph } from '../../redux/store'
import NetworkDisplay from '../NetworkDisplay/NetworkDisplay'

type NetworkTabsProps = {
  activeTab: string
  setActiveTab: (...args: any[]) => void
  prefetch: boolean
}

const NetworkTabs: React.FC<NetworkTabsProps> = ({
  setActiveTab,
  prefetch
}) => {
  const { availableNetworks } = useAvailableNetworks()

  const prefetchStreamsQuery = sfSubgraph.usePrefetch('streams', {
    ifOlderThan: 45
  })

  const displayedTestnetChainIds = useAppSelector(
    (state) =>
      Object.entries(state.appPreferences.displayedTestNets)
        .filter(([_, isDisplayed]) => isDisplayed)
        .map(([chainId]) => Number(chainId)),
    isEqual
  )

  return (
    <NoSsr>
      <TabList
        variant="scrollable"
        scrollButtons="auto"
        data-cy={'landing-page-networks'}
        onChange={track('network-tab-change', (_event, newValue: string) =>
          setActiveTab(newValue)
        )}
      >
        {availableNetworks
          .filter(
            (network) =>
              !network.isTestnet ||
              displayedTestnetChainIds.includes(network.chainId)
          )
          .map((network) => (
            <Tab
              data-cy={`${network.slugName}-landing-button`}
              key={`Tab_${network.slugName}`}
              label={<NetworkDisplay network={network} />}
              value={network.slugName}
              onMouseEnter={() => {
                if (prefetch) {
                  prefetchStreamsQuery({
                    chainId: network.chainId,
                    order: defaultStreamQueryOrdering,
                    pagination: defaultStreamQueryPaging
                  })
                }
              }}
            />
          ))}
      </TabList>
    </NoSsr>
  )
}

export default NetworkTabs
