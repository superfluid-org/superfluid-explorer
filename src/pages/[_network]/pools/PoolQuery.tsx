import { FC, PropsWithChildren } from 'react'

import { sfGdaSubgraph } from '../../../redux/store'
import { PoolQuery as PoolQueryArg } from '../../../subgraphs/gda/endpoints/entityArgs'

type Props = PoolQueryArg & {
  children: (
    queryResult: ReturnType<typeof sfGdaSubgraph.usePoolQuery>
  ) => PropsWithChildren['children']
}

export const PoolQuery: FC<Props> = ({ children, ...arg }) => {
  const poolQueryResult = sfGdaSubgraph.usePoolQuery(arg)
  return children(poolQueryResult)
}
