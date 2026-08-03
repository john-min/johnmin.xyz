import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../content";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get John Min's name, location, and short site tagline from johnmin.xyz.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
    structuredContent: profile,
  }),
});
