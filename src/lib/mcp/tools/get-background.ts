import { defineTool } from "@lovable.dev/mcp-js";
import { background } from "../content";

export default defineTool({
  name: "get_background",
  title: "Get background",
  description:
    "Get John Min's education, professional experience, Dignifi work, and current interests.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(background, null, 2) }],
    structuredContent: background,
  }),
});
