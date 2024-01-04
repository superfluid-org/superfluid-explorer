import { FC, useMemo } from "react";
import { AppDataGrid } from "../../../components/DataGrid/AppDataGrid";
import { GridColDef } from "@mui/x-data-grid";
import {
  Ordering,
  PagedResult,
  SkipPaging,
} from "@superfluid-finance/sdk-core";
import TimeAgo from "../../../components/TimeAgo/TimeAgo";
import { PoolMemberUnitsUpdatedEvent } from "../../../subgraphs/gda/events";
import { MemberUnitsUpdatedEvent_OrderBy } from "../../../subgraphs/gda/.graphclient";

interface Props {
  queryResult: {
    isFetching: boolean;
    data?: PagedResult<PoolMemberUnitsUpdatedEvent>;
  };
  setPaging: (paging: SkipPaging) => void;
  ordering: Ordering<MemberUnitsUpdatedEvent_OrderBy> | undefined;
  setOrdering: (
    ordering?: Ordering<MemberUnitsUpdatedEvent_OrderBy>
  ) => void;
}

const PoolMemberUnitsUpdatedEventDataGrid: FC<Props> = ({
  queryResult,
  setPaging,
  ordering,
  setOrdering,
}) => {
  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", hide: true, sortable: false, flex: 1 },
      {
        field: "timestamp",
        headerName: "Update Date",
        sortable: true,
        flex: 1,
        renderCell: (params) => <TimeAgo subgraphTime={params.value} />,
      },
      { field: "units", headerName: "Units", sortable: true, flex: 1 },
    ],
    []
  );

  const rows: PoolMemberUnitsUpdatedEvent[] = queryResult.data
    ? queryResult.data.data
    : [];

  return (
    <AppDataGrid
      columns={columns}
      rows={rows}
      queryResult={queryResult}
      setPaging={setPaging}
      ordering={ordering}
      setOrdering={(x) => setOrdering(x as any)}
    />
  );
};

export default PoolMemberUnitsUpdatedEventDataGrid;
