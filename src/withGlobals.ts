import { useEffect, useGlobals } from "@storybook/preview-api";
import { PartialStoryFn as StoryFunction, Renderer } from "@storybook/types";
import { UseGlobalsReturnType } from "./types/UseGlobalsReturnType";

export const withGlobals = (StoryFn: StoryFunction<Renderer>) => {
  const [{ selectedStylesheetID, stylesheets }]: UseGlobalsReturnType =
    useGlobals();

  const selectedStylesheet = stylesheets.find(
    (s) => s.id === selectedStylesheetID,
  );

  useEffect(() => {
    if (selectedStylesheet) {
      updateStylesheet(selectedStylesheet.url);
    }
  }, [selectedStylesheetID]);

  return StoryFn();
};

function updateStylesheet(url: string) {
  const headEl = document.querySelector("head");
  let stylesheetEl =
    document.querySelector<HTMLLinkElement>("link[data-toggle]");

  if (!stylesheetEl) {
    stylesheetEl = document.createElement("link");
    stylesheetEl.rel = "stylesheet";
    stylesheetEl.dataset.toggle = "true";
    headEl?.appendChild(stylesheetEl);
  }

  stylesheetEl.href = url;
}
