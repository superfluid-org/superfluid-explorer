import { Button, IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";
import { Network } from "../redux/networks";
import SubgraphIcon from "./SubgraphIcon";

const SubgraphQueryLink: FC<{
  network: Network;
  query: string;
  variables?: string;
}> = ({ network, query, variables }) => {
  const queryCompressed = btoa(query);
  const variablesCompressed = variables ? btoa(variables) : undefined;

  return (
    <Link
      passHref
      href={`/subgraph?_network=${network.slugName}&_query=${queryCompressed}${
        variablesCompressed ? `&_variables=${variablesCompressed}` : ""
      }`}
    >
      <Tooltip title="View on Subgraph Explorer">
        <Button size="small" variant="outlined" startIcon={<SubgraphIcon />}>
          Subgraph
        </Button>
      </Tooltip>
    </Link>
  );
};

export default SubgraphQueryLink;
