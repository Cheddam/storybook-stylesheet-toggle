import type { Renderer } from "@storybook/types";
import { withGlobals } from "./withGlobals";
import type { ProjectAnnotationsWithStylesheets } from "./";

const preview: ProjectAnnotationsWithStylesheets<Renderer> = {
  decorators: [withGlobals],
  globals: {
    selectedStylesheetID: "",
    stylesheets: [
      {
        id: "red",
        title: "Red",
        url: "stylesheets/red.css",
      },
      {
        id: "green",
        title: "Green",
        url: "stylesheets/green.css",
      },
      {
        id: "blue",
        title: "Blue",
        url: "stylesheets/blue.css",
      },
    ],
  },
};

export default preview;
