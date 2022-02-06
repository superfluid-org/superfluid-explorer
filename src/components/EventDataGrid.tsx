import {FC} from "react";
import {AppDataGrid} from "./AppDataGrid";
import {GridColDef} from "@mui/x-data-grid";
import {AllEvents, Ordering, PagedResult, SkipPaging} from "@superfluid-finance/sdk-core";
import {Event_OrderBy} from "@superfluid-finance/sdk-core/dist/module/subgraph/schema.generated";
import {Network} from "../redux/networks";
import {timeAgo} from "../utils/dateTime";
import {TransactionHash} from "./TransactionHash";
import TimeAgo from "./TimeAgo";

interface Props {
  network: Network,
  queryResult: {
    isFetching: boolean
    data?: PagedResult<AllEvents>
  }
  setPaging: (paging: SkipPaging) => void;
  ordering: Ordering<Event_OrderBy> | undefined;
  setOrdering: (ordering?: Ordering<Event_OrderBy>) => void;
}

const EventDataGrid: FC<Props> = ({network, queryResult, setPaging, ordering, setOrdering}) => {
  const columns: GridColDef[] = [
    {field: 'id', hide: true, sortable: false, flex: 1},
    {field: 'name', headerName: "Name", sortable: false, flex: 1},
    {
      field: 'timestamp',
      headerName: "Timestamp",
      sortable: false,
      flex: 1,
      renderCell: (params) => <TimeAgo subgraphTime={params.value} />
    },
    {field: 'blockNumber', headerName: "Block Number", sortable: false, flex: 1},
    {
      field: 'transactionHash',
      headerName: "Transaction Hash",
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <TransactionHash network={network} transactionHash={params.value}/>)
    }
  ];
  const rows: AllEvents[] = queryResult.data ? queryResult.data.data : [];

  return (<AppDataGrid columns={columns} rows={rows} queryResult={queryResult} setPaging={setPaging} ordering={ordering}
                       setOrdering={x => setOrdering(x as any)}/>);
}

export default EventDataGrid;
