import type { Args } from "@storybook/types";
import type { Stylesheet } from "./";

interface MutableArgs extends Args {
  selectedStylesheetID?: string;
}

export type UseGlobalsReturnType = [
  MutableArgs & {
    stylesheets?: Partial<Stylesheet>[];
  },
  (newGlobals: MutableArgs) => void,
];
