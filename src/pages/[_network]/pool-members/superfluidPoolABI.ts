export const superfluidPoolABI = [
  {
    inputs: [
      {
        internalType: 'contract GeneralDistributionAgreementV1',
        name: 'gda',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'OUT_OF_GAS',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SUPERFLUID_POOL_INVALID_TIME',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SUPERFLUID_POOL_NOT_GDA',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SUPERFLUID_POOL_NOT_POOL_ADMIN_OR_GDA',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SUPERFLUID_POOL_NO_POOL_MEMBERS',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SUPERFLUID_POOL_NO_ZERO_ADDRESS',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SUPERFLUID_POOL_TRANSFER_UNITS_NOT_ALLOWED',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract ISuperfluidToken',
        name: 'token',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'member',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'claimedAmount',
        type: 'int256'
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'totalClaimed',
        type: 'int256'
      }
    ],
    name: 'DistributionClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8'
      }
    ],
    name: 'Initialized',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract ISuperfluidToken',
        name: 'token',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'member',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'oldUnits',
        type: 'uint128'
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'newUnits',
        type: 'uint128'
      }
    ],
    name: 'MemberUnitsUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [],
    name: 'GDA',
    outputs: [
      {
        internalType: 'contract GeneralDistributionAgreementV1',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address'
      }
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'memberAddr',
        type: 'address'
      }
    ],
    name: 'claimAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'claimAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256'
      }
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'distributionFromAnyAddress',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'memberAddr',
        type: 'address'
      },
      {
        internalType: 'uint32',
        name: 'time',
        type: 'uint32'
      }
    ],
    name: 'getClaimable',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'memberAddr',
        type: 'address'
      }
    ],
    name: 'getClaimableNow',
    outputs: [
      {
        internalType: 'int256',
        name: 'claimableBalance',
        type: 'int256'
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'time',
        type: 'uint32'
      }
    ],
    name: 'getDisconnectedBalance',
    outputs: [
      {
        internalType: 'int256',
        name: 'balance',
        type: 'int256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'memberAddr',
        type: 'address'
      }
    ],
    name: 'getMemberFlowRate',
    outputs: [
      {
        internalType: 'int96',
        name: '',
        type: 'int96'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'memberAddr',
        type: 'address'
      }
    ],
    name: 'getTotalAmountReceivedByMember',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTotalConnectedFlowRate',
    outputs: [
      {
        internalType: 'int96',
        name: '',
        type: 'int96'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTotalConnectedUnits',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTotalDisconnectedFlowRate',
    outputs: [
      {
        internalType: 'int96',
        name: 'flowRate',
        type: 'int96'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTotalDisconnectedUnits',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTotalFlowRate',
    outputs: [
      {
        internalType: 'int96',
        name: '',
        type: 'int96'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTotalUnits',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'memberAddr',
        type: 'address'
      }
    ],
    name: 'getUnits',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256'
      }
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address'
      },
      {
        internalType: 'contract ISuperfluidToken',
        name: 'superToken_',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: 'transferabilityForUnitsOwner_',
        type: 'bool'
      },
      {
        internalType: 'bool',
        name: 'distributionFromAnyAddress_',
        type: 'bool'
      }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'memberAddr',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: 'doConnect',
        type: 'bool'
      },
      {
        internalType: 'uint32',
        name: 'time',
        type: 'uint32'
      }
    ],
    name: 'operatorConnectMember',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'Unit',
            name: 'total_units',
            type: 'int128'
          },
          {
            components: [
              {
                internalType: 'Time',
                name: '_settled_at',
                type: 'uint32'
              },
              {
                internalType: 'FlowRate',
                name: '_flow_rate',
                type: 'int128'
              },
              {
                internalType: 'Value',
                name: '_settled_value',
                type: 'int256'
              }
            ],
            internalType: 'struct BasicParticle',
            name: '_wrapped_particle',
            type: 'tuple'
          }
        ],
        internalType: 'struct PDPoolIndex',
        name: 'index',
        type: 'tuple'
      }
    ],
    name: 'operatorSetIndex',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'poolOperatorGetIndex',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'totalUnits',
            type: 'uint128'
          },
          {
            internalType: 'uint32',
            name: 'wrappedSettledAt',
            type: 'uint32'
          },
          {
            internalType: 'int96',
            name: 'wrappedFlowRate',
            type: 'int96'
          },
          {
            internalType: 'int256',
            name: 'wrappedSettledValue',
            type: 'int256'
          }
        ],
        internalType: 'struct SuperfluidPool.PoolIndexData',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [],
    name: 'superToken',
    outputs: [
      {
        internalType: 'contract ISuperfluidToken',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'transferabilityForUnitsOwner',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'memberAddr',
        type: 'address'
      },
      {
        internalType: 'uint128',
        name: 'newUnits',
        type: 'uint128'
      }
    ],
    name: 'updateMemberUnits',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const
