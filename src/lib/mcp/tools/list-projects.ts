import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "../content";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List John Min's published projects and case studies. Currently under construction, so this may return an empty list.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text:
          projects.length === 0
            ? "No projects published yet — the projects section is under construction."
            : JSON.stringify(projects, null, 2),
      },
    ],
    structuredContent: { projects },
  }),
});
