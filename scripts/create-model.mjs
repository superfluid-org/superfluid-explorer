import { writeFile } from "node:fs/promises";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { model as profileModel } from "@datamodels/identity-profile-basic";
import { ModelManager } from "@glazed/devtools";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";
import { fromString } from "uint8arrays";

if (!process.env.SEED) {
  throw new Error("Missing SEED environment variable");
}

const CERAMIC_URL =
  process.env.CERAMIC_URL || "https://ceramic-clay.3boxlabs.com";

// The seed must be provided as an environment variable
const seed = fromString(process.env.SEED, "base16");
// Create and authenticate the DID
const did = new DID({
  provider: new Ed25519Provider(seed),
  resolver: getResolver(),
});
await did.authenticate();

// Connect to the Ceramic node
const ceramic = new CeramicClient(CERAMIC_URL);
ceramic.did = did;

// Create a manager for the model
const manager = new ModelManager({ ceramic });

// Add basicProfile to the model
manager.addJSONModel(profileModel);

// Create the schemas
const addressbookSchemaID = await manager.createSchema("AddressBook", {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  title: "AddressBook",
  required: ["total_cnt", "contacts"],
  additionalProperties: false,
  properties: {
    total_cnt: {
      type: "integer",
      description: "The total number of contacts",
      default: 0,
    },
    contacts: {
      type: "array",
      default: [],
      items: {
        type: "object",
        required: ["name", "wallets"],
        additionalProperties: false,
        properties: {
          name: {
            type: "string",
            description: "The contact's name",
            default: "",
          },
          wallets: {
            type: "array",
            description:
              "Collection of the contact's wallet addresses and respective networks",
            default: [],
            items: {
              type: "object",
              default: {},
              required: ["walletAddress", "network"],
              additionalProperties: false,
              properties: {
                walletAddress: {
                  type: "string",
                  default: "",
                },
                network: {
                  type: "string",
                  default: "",
                },
              },
            },
          },
          avatar: {
            type: "string",
            description: "Optional URI of user avatar",
            default: "",
          },
          tags: {
            type: "array",
            description: "Optional tags for the contact",
            items: {
              type: "string",
            },
            minItems: 1,
            uniqueItems: true,
          },
          data: {
            type: "object",
            description: "Fields to include optional arbitrary data",
            properties: {},
          },
        },
      },
    },
  },
});

// Create the definition using the created schema ID
await manager.createDefinition("myAddressBook", {
  name: "myAddressBook",
  description: "My Address Book",
  schema: manager.getSchemaURL(addressbookSchemaID),
});

// Write model to JSON file
await writeFile(
  new URL("model.json", import.meta.url),
  JSON.stringify(manager.toJSON())
);
console.log("Encoded model written to scripts/model.json file");
