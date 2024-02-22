import SettingsIcon from '@mui/icons-material/SettingsOutlined'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material'
import { ErrorBoundary } from '@sentry/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { polygon } from '../../redux/networks'
import AppLink from '../AppLink/AppLink'
import SearchBar from '../Search/SearchBar'
import SearchDialog from '../Search/SearchDialog'
import SettingsDrawer from './SettingsDrawer'

export const SfAppBar = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const router = useRouter()
  const { _network = polygon.slugName } = router.query

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <AppLink href="/" sx={{ display: 'flex' }}>
            <Image
              data-cy={'superfluid-logo'}
              src="/superfluid-logo.svg"
              width={150}
              height={36}
              layout="fixed"
              alt="Superfluid logo"
            />
          </AppLink>

          <Container
            component={Box}
            maxWidth="md"
            sx={{
              display: searchOpen ? 'none' : 'inline'
            }}
          >
            <SearchBar>
              <Box
                sx={{
                  cursor: 'pointer',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 10
                }}
                onClick={() => setSearchOpen(true)}
              ></Box>
            </SearchBar>
          </Container>

          <SearchDialog open={searchOpen} close={() => setSearchOpen(false)} />

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={6}
          >
            <Stack direction="row" alignItems="center" spacing={4}>
              <AppLink
                data-cy="token-page-button"
                href={`/${_network}/supertokens`}
                sx={{ textDecoration: 'none' }}
              >
                <Typography
                  variant="button"
                  sx={{
                    fontWeight: 500,
                    fontSize: '16px',
                    color: 'white',
                    textTransform: 'none'
                  }}
                >
                  Tokens
                </Typography>
              </AppLink>
              <AppLink
                data-cy={'protocol-button'}
                href={`/${_network}/protocol`}
                sx={{ textDecoration: 'none' }}
              >
                <Typography
                  variant="button"
                  sx={{
                    fontWeight: 500,
                    fontSize: '16px',
                    color: 'white',
                    textTransform: 'none'
                  }}
                >
                  Protocol
                </Typography>
              </AppLink>
              <AppLink
                id="subgraph-button"
                href="/subgraph"
                sx={{ textDecoration: 'none' }}
              >
                <Typography
                  variant="button"
                  sx={{
                    fontWeight: 500,
                    fontSize: '16px',
                    color: 'white',
                    textTransform: 'none'
                  }}
                >
                  Subgraph
                </Typography>
              </AppLink>
            </Stack>
            <Tooltip title="Settings" enterDelay={100}>
              <IconButton
                sx={{ ml: 1 }}
                color="inherit"
                onClick={() => setSettingsOpen(true)}
                data-cy="settings-cog"
                data-cy-state={settingsOpen ? 'open' : 'closed'}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
      <ErrorBoundary
        fallback={() => <span />}
        onError={() => {
          alert(
            "The settings drawer crashed. :( The error is in the browser's developer console. Reloading the page or clearing your local storage could resolve the issue. Don't hesitate to let us know of this situation!"
          )
        }}
      >
        <SettingsDrawer
          onClose={() => setSettingsOpen(false)}
          open={settingsOpen}
        />
      </ErrorBoundary>
    </>
  )
}

export default SfAppBar
