import {
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC, useRef, useState } from "react";
import { Network } from "../../redux/networks";
import FilterListIcon from "@mui/icons-material/FilterList";
import { sfSubgraph } from "../../redux/store";
import SuperTokenAddress from "../SuperTokenAddress";
import TokenChip from "../TokenChip";
import SuperTokensTable from "../Tables/SuperTokensTable";
import CopyClipboard from "../CopyClipboard";

interface GovernanceTabProps {
  network: Network;
}

const FRAMEWORKS = [
  {
    name: "Resolver",
    address: "0xe0cc76334405ee8b39213e620587d815967af39c",
  },
  {
    name: "Host",
    address: "0x3e14dc1b13c488a8d5d310918780c983bd5982e7",
  },
  {
    name: "CFAv1",
    address: "0x6eee6060f715257b970700bc2656de21dedf074c",
  },
  {
    name: "IDAv1",
    address: "0xb0aabba4b2783a72c52956cdef62d438eca2d7a1",
  },
  {
    name: "SuperTokenFactory",
    address: "0x2c90719f25b10fc5646c82da3240c76fa5bccf34",
  },
  {
    name: "SuperfluidLoader v1",
    address: "0x15f0ca26781c3852f8166ed2ebce5d18265cceb7",
  },
  {
    name: "TOGA",
    address: "0x6aeaee5fd4d05a741723d752d30ee4d72690a8f7",
  },
];

const GovernanceTab: FC<GovernanceTabProps> = ({ network }) => {
  return (
    <>
      <Card>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            p: 2,
            pb: 0,
          }}
        >
          Contract addresses
        </Typography>
        <List sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {FRAMEWORKS.map((framework, i) => (
            <ListItem
              key={framework.address}
              sx={
                i < 2
                  ? { borderTop: "1px solid rgba(255, 255, 255, 0.12)" }
                  : {}
              }
            >
              <ListItemText
                primary={framework.name}
                secondary={
                  <Stack direction="row" alignItems="center">
                    {framework.address}
                    <CopyClipboard copyText={framework.address} />
                  </Stack>
                }
              />
            </ListItem>
          ))}
        </List>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <SuperTokensTable network={network} />
        </CardContent>
      </Card>
    </>
  );
};

export default GovernanceTab;
