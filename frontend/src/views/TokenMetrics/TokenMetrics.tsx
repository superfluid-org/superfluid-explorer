import { useEffect, useState } from 'react'
import type { IToken, ITokenMetrics } from '../../types/Token'
import { TokenService } from '../../services/TokenService'
import { MetricsService } from '../../services/MetricsService'
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material'

const TokenMetrics = () => {
  //this may need to be in a state in the future
  const [tokens, setTokens] = useState<IToken[]>([])
  const [metrics, setMetrics] = useState<ITokenMetrics[]>([])

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        // Fetch the base tokens
        const baseTokens = await TokenService.getBaseMainnetSuperTokens()
        setTokens(baseTokens)

        // Fetch the token metrics for each base token in parallel
        const metricsPromises = baseTokens.map(async (token) => {
          const metrics = await MetricsService.getBaseMainnetTokenMetrics(
            token.superTokenAddress
          )
          return { ...token, ...metrics }
        })

        const metrics = await Promise.all(metricsPromises)
        setMetrics(metrics)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTokens()
  }, [])

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Listed</TableCell>
              <TableCell>Active Streams</TableCell>
              <TableCell>Holders</TableCell>
              <TableCell>Outflow Rate</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {metrics.map((metric) => (
              <TableRow
                key={metric.superTokenAddress}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {metric.name}
                </TableCell>
                <TableCell>{metric.symbol}</TableCell>
                <TableCell>{metric.isListed ? 'Yes' : 'No'}</TableCell>
                <TableCell>{metric.totalNumberOfActiveStreams}</TableCell>
                <TableCell>{metric.totalNumberOfHolders}</TableCell>
                <TableCell>{metric.totalOutflowRate}</TableCell>
                <TableCell>{metric.superTokenAddress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {metrics.map((metric) => (
        <div key={metric.toString()}></div>
      ))}
    </div>
  )
}

export default TokenMetrics
