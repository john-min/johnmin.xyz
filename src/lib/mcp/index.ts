import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import getBackgroundTool from "./tools/get-background";
import listLinksTool from "./tools/list-links";
import listProjectsTool from "./tools/list-projects";

export default defineMcp({
  name: "johnmin-xyz",
  title: "johnmin.xyz",
  version: "0.1.0",
  instructions:
    "Public tools for johnmin.xyz, the personal site of John Min. Use `get_profile` for name, location, and tagline; `get_background` for education, experience, and current interests; `list_links` for public profile links; `list_projects` for published work.",
  tools: [getProfileTool, getBackgroundTool, listLinksTool, listProjectsTool],
});
