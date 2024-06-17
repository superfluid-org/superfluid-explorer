export const GDAV1ForwarderABI = {
  constructor: {
    inputs: [
      { internalType: "contract ISuperfluid", name: "host", type: "address" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  functions: [
    {
      name: "claimAll",
      inputs: [
        { internalType: "contract ISuperfluidPool", name: "pool", type: "address" },
        { internalType: "address", name: "memberAddress", type: "address" },
        { internalType: "bytes", name: "userData", type: "bytes" }
      ],
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      name: "connectPool",
      inputs: [
        { internalType: "contract ISuperfluidPool", name: "pool", type: "address" },
        { internalType: "bytes", name: "userData", type: "bytes" }
      ],
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      name: "createPool",
      inputs: [
        { internalType: "contract ISuperfluidToken", name: "token", type: "address" },
        { internalType: "address", name: "admin", type: "address" },
        {
          internalType: "struct PoolConfig",
          name: "config",
          type: "tuple",
          components: [
            { internalType: "bool", name: "transferabilityForUnitsOwner", type: "bool" },
            { internalType: "bool", name: "distributionFromAnyAddress", type: "bool" }
          ]
        }
      ],
      outputs: [
        { internalType: "bool", name: "success", type: "bool" },
        { internalType: "contract ISuperfluidPool", name: "pool", type: "address" }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      name: "disconnectPool",
      inputs: [
        { internalType: "contract ISuperfluidPool", name: "pool", type: "address" },
        { internalType: "bytes", name: "userData", type: "bytes" }
      ],
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      name: "distribute",
      inputs: [
        { internalType: "contract ISuperfluidToken", name: "token", type: "address" },
        { internalType: "address", name: "from", type: "address" },
        { internalType: "contract ISuperfluidPool", name: "pool", type: "address" },
        { internalType: "uint256", name: "requestedAmount", type: "uint256" },
        { internalType: "bytes", name: "userData", type: "bytes" }
      ],
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      name: "distributeFlow",
      inputs: [
        { internalType: "contract ISuperfluidToken", name: "token", type: "address" },
        { internalType: "address", name: "from", type: "address" },
        { internalType: "contract ISuperfluidPool", name: "pool", type: "address" },
        { internalType: "int96", name: "requestedFlowRate", type: "int96" },
        { internalType: "bytes", name: "userData", type: "bytes" }
      ],
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      name: "estimateDistributionActualAmount",
      inputs: [
        { internalType: "contract ISuperfluidToken", name: "token", type: "address" },
        { internalType: "address", name: "from", type: "address" },
        { internalType: "contract ISuperfluidPool", name: "to", type: "address" },
        { internalType: "uint256", name: "requestedAmount", type: "uint256" }
      ],
      outputs: [{ internalType: "uint256", name: "actualAmount", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      name: "estimateFlowDistributionActualFlowRate",
      inputs: [
        { internalType: "contract ISuperfluidToken", name: "token", type: "address" },
        { internalType: "address", name: "from", type: "address" },
        { internalType: "contract ISuperfluidPool", name: "to", type: "address" },
        { internalType: "int96", name: "requestedFlowRate", type: "int96" }
      ],
      outputs: [
        { internalType: "int96", name: "actualFlowRate", type: "int96" },
        { internalType: "int96", name: "totalDistributionFlowRate", type: "int96" }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      name: "getFlowDistributionFlowRate",
      inputs: [
        { internalType: "contract ISuperfluidToken", name: "token", type: "address" },
        { internalType: "address", name: "from", type: "address" },
        { internalType: "contract ISuperfluidPool", name: "to", type: "address" }
      ],
      outputs: [{ internalType: "int96", name: "", type: "int96" }],
      stateMutability: "view",
      type: "function"
    },
    {
      name: "getNetFlow",
      inputs: [
        { internalType: "contract ISuperfluidToken", name: "token", type: "address" },
        { internalType: "address", name: "account", type: "address" }
      ],
      outputs: [{ internalType: "int96", name: "", type: "int96" }],
      stateMutability: "view",
      type: "function"
    },
    {
      name: "getPoolAdjustmentFlowInfo",
      inputs: [
        { internalType: "contract ISuperfluidPool", name: "pool", type: "address" }
      ],
      outputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "bytes32", name: "", type: "bytes32" },
        { internalType: "int96", name: "", type: "int96" }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      name: "getPoolAdjustmentFlowRate",
      inputs: [
        { internalType: "address", name: "pool", type: "address" }
      ],
      outputs: [{ internalType: "int96", name: "", type: "int96" }],
      stateMutability: "view",
      type: "function"
    },
    {
      name: "isMemberConnected",
      inputs: [
        { internalType: "contract ISuperfluidPool", name: "pool", type: "address" },
        { internalType: "address", name: "member", type: "address" }
      ],
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
    },
    {
      name: "isPool",
      inputs: [
        { internalType: "contract ISuperfluidToken", name: "token", type: "address" },
        { internalType: "address", name: "account", type: "address" }
      ],
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
    },
    {
      name: "updateMemberUnits",
      inputs: [
        { internalType: "contract ISuperfluidPool", name: "pool", type: "address" },
        { internalType: "address", name: "memberAddress", type: "address" },
        { internalType: "uint128", name: "newUnits", type: "uint128" },
        { internalType: "bytes", name: "userData", type: "bytes" }
      ],
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function"
    }
  ]
}
