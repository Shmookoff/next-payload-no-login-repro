import { mongooseAdapter } from "@payloadcms/db-mongodb";
import path from "path";
import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";

export default buildConfig({
  collections: [
    // Your collections here
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  admin: { bundler: webpackBundler() },
  db: mongooseAdapter({ url: process.env.MONGODB_URI! }),
  editor: slateEditor({}),
});
