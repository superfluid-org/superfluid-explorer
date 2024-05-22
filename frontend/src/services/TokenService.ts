import { IToken } from '../types/Token'
import { ApiService } from './ApiService'

export const TokenService = {
  getBaseMainnetSuperTokens: async (): Promise<IToken[]> => {
    const response = await ApiService.getBaseMainnetSuperTokens()
    return response
  }
}
