import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "../content";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List John Min's projects and experiments, including title, description, tags, status, and live URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(projects, null, 2),
      },
    ],
    structuredContent: { projects },
  }),
});
