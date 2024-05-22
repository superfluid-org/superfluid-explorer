import { useEffect, useState } from 'react'
import type { IToken, ITokenMetrics } from '../../types/Token'
import { TokenService } from '../../services/TokenService'
import { MetricsService } from '../../services/MetricsService'

const TokenMetrics = () => {
  //this may need to be in a state in the future
  const [tokens, setTokens] = useState<IToken[]>([])
  const [metrics, setMetrics] = useState<ITokenMetrics[]>([])

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const tokens = await TokenService.getBaseMainnetSuperTokens()
        setTokens(tokens)

        if (tokens.length > 0) {
          tokens.forEach(async (token) => {
            const metrics = await MetricsService.getBaseMainnetTokenMetrics(
              token.superTokenAddress
            )
            setMetrics((prevMetrics) => [...prevMetrics, metrics])
          })
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchTokens()
  }, [])

  return <div>This is where the table with the metrics will be</div>
}

export default TokenMetrics
