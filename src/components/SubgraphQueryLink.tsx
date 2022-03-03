import { IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";
import { Network } from "../redux/networks";
import SubgraphIcon from "./SubgraphIcon";

const SubgraphQueryLink: FC<{
  network: Network;
  query: string;
  variables?: string;
}> = ({ network, query, variables }) => {
  const [queryCompressed] = useState(btoa(query));
  const [variablesCompressed] = useState(
    variables ? btoa(variables) : undefined
  );

  return (
    <Link
      passHref
      href={`/subgraph?_network=${network.slugName}&_query=${queryCompressed}${
        variablesCompressed ? `&_variables=${variablesCompressed}` : ""
      }`}
    >
      <Tooltip title="View on Subgraph Explorer">
        <IconButton>
          <SubgraphIcon />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default SubgraphQueryLink;
