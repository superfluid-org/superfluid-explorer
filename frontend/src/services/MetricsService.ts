import { ITokenMetrics } from '../types/Token'
import { ApiService } from './ApiService'

export const MetricsService = {
  getBaseMainnetTokenMetrics: async (
    address: string
  ): Promise<ITokenMetrics> => {
    const response = await ApiService.getBaseMainnetTokenMetrics(address)
    return response
  }
}
