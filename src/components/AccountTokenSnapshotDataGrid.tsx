import {FC, useMemo} from "react";
import {AppDataGrid} from "./AppDataGrid";
import {GridColDef} from "@mui/x-data-grid";
import {
  AccountTokenSnapshot, AccountTokenSnapshot_OrderBy,
  Ordering,
  PagedResult,
  SkipPaging
} from "@superfluid-finance/sdk-core";
import FlowingBalance from "./FlowingBalance";
import SuperTokenAddress from "./SuperTokenAddress";
import {Network} from "../redux/networks";

interface Props {
  network: Network,
  queryResult: {
    isFetching: boolean
    data?: PagedResult<AccountTokenSnapshot>
  }
  setPaging: (paging: SkipPaging) => void;
  ordering: Ordering<AccountTokenSnapshot_OrderBy> | undefined;
  setOrdering: (ordering?: Ordering<AccountTokenSnapshot_OrderBy>) => void;
}



const AccountTokenSnapshotDataGrid: FC<Props> = ({network, queryResult, setPaging, ordering, setOrdering}) => {
  const columns: GridColDef[] = useMemo(() => [
    {field: 'id', hide: true, sortable: false, flex: 1},
    {field: 'token', headerName: "Token", sortable: true, flex: 1, renderCell: (params) => (<SuperTokenAddress network={network} address={params.value} />)},
    {
      field: 'balance',
      headerName: "Balance",
      sortable: false,
      flex: 1,
      renderCell: (params) => {
        const accountTokenSnapshot = params.row as AccountTokenSnapshot;
        return (<FlowingBalance
          {...{
            balance: accountTokenSnapshot.balanceUntilUpdatedAt,
            balanceTimestamp: accountTokenSnapshot.updatedAtTimestamp,
            flowRate: accountTokenSnapshot.totalNetFlowRate
          }}
        />)
      }
    },
    {
      field: 'totalNumberOfActiveStreams',
      headerName: "Active Stream Count",
      sortable: true,
      flex: 1
    },
    {
      field: 'totalNumberOfClosedStreams',
      headerName: "Closed Stream Count",
      sortable: true,
      flex: 1
    },
    {
      field: 'totalSubscriptionsWithUnits',
      headerName: "Subscription With Units Count",
      sortable: true,
      flex: 1
    },
  ], [network]);

  const rows: AccountTokenSnapshot[] = queryResult.data?.data ?? [];

  return (<AppDataGrid columns={columns} rows={rows} queryResult={queryResult} setPaging={setPaging} ordering={ordering}
                       setOrdering={x => setOrdering(x as any)}/>);
}

export default AccountTokenSnapshotDataGrid;
