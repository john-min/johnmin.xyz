import { defineTool } from "@lovable.dev/mcp-js";
import { links } from "../content";

export default defineTool({
  name: "list_links",
  title: "List links",
  description:
    "List John Min's public profile links (Substack, LinkedIn, X, GitHub).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(links, null, 2) }],
    structuredContent: { links },
  }),
});
