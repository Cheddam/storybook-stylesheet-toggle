import React, { useCallback } from "react";
import { useGlobals } from "@storybook/manager-api";
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";
import { TOOL_ID } from "./constants";
import type { UseGlobalsReturnType } from "./types/UseGlobalsReturnType";
import type { Stylesheet } from "./";

export const Tool = () => {
  const [
    { selectedStylesheetID, stylesheets = [] },
    updateGlobals,
  ]: UseGlobalsReturnType = useGlobals();

  const updateSelectedStylesheet = useCallback(
    (selectedStylesheetID: string) => updateGlobals({ selectedStylesheetID }),
    [],
  );

  if (stylesheets.length && !selectedStylesheetID) {
    updateSelectedStylesheet(stylesheets.find((s) => !!s.id).id);
  }

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={stylesheets
            .filter((s): s is Stylesheet => !!s.id)
            .map((s) => ({
              ...s,
              onClick: () => {
                updateSelectedStylesheet(s.id);
                onHide();
              },
              active: s.id === selectedStylesheetID,
            }))}
        />
      )}
      closeOnOutsideClick
    >
      <IconButton key={TOOL_ID} title="Toggle stylesheet">
        <Icons icon="paintbrush" />
      </IconButton>
    </WithTooltip>
  );
};
