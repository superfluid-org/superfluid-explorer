import React from "react";
import { Network } from "../redux/networks";

const NetworkContext = React.createContext<Network>(null!);

export default NetworkContext;