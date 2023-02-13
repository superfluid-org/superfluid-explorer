import { IndexUpdatedEvent } from "@superfluid-finance/sdk-core";
import React from "react";

const DistributionContext = React.createContext<IndexUpdatedEvent>(null!);

export default DistributionContext;
