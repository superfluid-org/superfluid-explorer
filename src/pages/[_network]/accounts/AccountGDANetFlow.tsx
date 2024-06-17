import { useReadContract } from "wagmi"
import { GDAV1ForwarderABI } from "./GDAV1Forwarder"
import { Address } from 'viem'

export const useTotalAmountReceivedFromPoolMember = (
    chainId: number,
    memberAddress?: string | Address,
    poolAddress?: string | Address
  ) => {
    const { data, dataUpdatedAt } = useReadContracts({
      contracts: [
        {
          chainId: chainId,
          address: poolAddress as Address,
          abi: GDAV1ForwarderABI,
          functionName: 'getNetFlow',
          args: [memberAddress as Address]
        }
      ],
      query: {
        enabled: Boolean(memberAddress && poolAddress)
      }
    })
  
    const [getTotalAmountReceivedByMember, getMemberFlowRate] = data ?? []
  
    return useMemo(() => {
      if (
        getTotalAmountReceivedByMember?.status === 'success' &&
        getMemberFlowRate?.status === 'success'
      ) {
        return {
          timestamp: Math.round(dataUpdatedAt / 1000),
          memberCurrentTotalAmountReceived: BigNumber.from(
            getTotalAmountReceivedByMember.result.toString()
          ),
          memberFlowRate: BigNumber.from(getMemberFlowRate.result.toString())
        }
      } else {
        return null
      }
    }, [getTotalAmountReceivedByMember, getMemberFlowRate])
  }
  