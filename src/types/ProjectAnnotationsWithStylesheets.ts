import type { Renderer, ProjectAnnotations, Globals } from "@storybook/types";
import type { Stylesheet } from "./";

export interface ProjectAnnotationsWithStylesheets<TRenderer extends Renderer>
  extends ProjectAnnotations<TRenderer> {
  globals: Globals & {
    stylesheets: Stylesheet[];
    selectedStylesheetID: string;
  };
}
