import { PoolQuery as PoolQueryArg } from '@superfluid-finance/sdk-redux'
import { FC, PropsWithChildren } from 'react'

import { sfGdaSubgraph } from '../../../redux/store'

type Props = PoolQueryArg & {
  children: (
    queryResult: ReturnType<typeof sfGdaSubgraph.usePoolQuery>
  ) => PropsWithChildren['children']
}

export const PoolQuery: FC<Props> = ({ children, ...arg }) => {
  const poolQueryResult = sfGdaSubgraph.usePoolQuery(arg)
  return children(poolQueryResult)
}
