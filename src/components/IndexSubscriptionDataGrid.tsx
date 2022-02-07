import {FC, useMemo} from "react";
import {AppDataGrid} from "./AppDataGrid";
import {GridColDef} from "@mui/x-data-grid";
import {
  IndexSubscription,
  IndexSubscription_OrderBy,
  Ordering,
  PagedResult,
  SkipPaging
} from "@superfluid-finance/sdk-core";
import {IndexSubscriptionDetailsDialog} from "./IndexSubscriptionDetails";
import AccountAddress from "./AccountAddress";
import SuperTokenAddress from "./SuperTokenAddress";
import {Network} from "../redux/networks";
import { ethers } from "ethers";

interface Props {
  network: Network,
  queryResult: {
    isFetching: boolean
    data?: PagedResult<IndexSubscription>
  }
  setPaging: (paging: SkipPaging) => void;
  ordering: Ordering<IndexSubscription_OrderBy> | undefined;
  setOrdering: (ordering?: Ordering<IndexSubscription_OrderBy>) => void;
}

const IndexSubscriptionDataGrid: FC<Props> = ({network, queryResult, setPaging, ordering, setOrdering}) => {
  const columns: GridColDef[] = useMemo(() => [
    {field: 'id', hide: true},
    {field: 'token', headerName: "Token", flex: 1, renderCell: (params) => (<SuperTokenAddress network={network} address={params.value} />)},
    {field: 'publisher', headerName: "Publisher", flex: 1, renderCell: (params) => (<AccountAddress network={network} address={params.value} />)},
    {field: 'approved', headerName: "Approved", flex: 1},
    {field: 'units', headerName: "Total Index Units", flex: 1},
    // Kind of not worth showing this...
    // {field: 'totalAmountReceivedUntilUpdatedAt', headerName: "Total Amount Received", flex: 1,         renderCell: (params) =>
    // (
    //   <>
    //     {ethers.utils.formatEther(params.value)}&nbsp;
    //     <SuperTokenAddress
    //       network={network}
    //       address={params.row.token}
    //       format={(token) => token.symbol}
    //       formatLoading={() => ""}
    //     />
    //   </>
    // )},
    {field: 'units', headerName: "Subscription Units", flex: 1},
    {
      field: 'details', headerName: "Details", flex: 1, sortable: false, renderCell: (cellParams) => (
        <IndexSubscriptionDetailsDialog network={network} indexSubscriptionId={cellParams.id.toString()}/>
      )
    }
  ], [network]);

  const rows: IndexSubscription[] = queryResult.data ? queryResult.data.data : [];

  return (<AppDataGrid columns={columns} rows={rows} queryResult={queryResult} setPaging={setPaging} ordering={ordering}
                       setOrdering={x => setOrdering(x as any)}/>);
}

export default IndexSubscriptionDataGrid;
