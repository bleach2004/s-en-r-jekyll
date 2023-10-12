import { defineConfig } from "tinacms";
import dotenv from "dotenv";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.CLIENT_ID, // Get this from tina.io
  token: process.env.TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "y",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "y",
    },
  },
  search: {
    tina: {
      indexerToken: process.env.SEARCH_TOKEN,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  schema: {
    collections: [
      {
        name: "product",
        label: "Signing pagina's",
        path: "products/",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
