# Storybook Stylesheet Toggle

A simple addon for Storybook that allows you to define a set of stylesheets that can be toggled between. This may be useful if your project has multiple themes, or if you want to stress test your components in different styling environments.

### Getting started

`yarn add -D storybook-stylesheet-toggle`

Install the addon in `.storybook/main.ts`:

<details>
  <summary>(JS)</summary>

```javascript
/** @type {import("@storybook/react-webpack5").StorybookConfig} */
const config = {
  ...
};
```

</details>

```typescript
import type { StorybookConfig } from "@storybook/your-framework";

const config: StorybookConfig = {
  addons: ["storybook-stylesheet-toggle"],
};
export default config;
```

Add the following configuration to `.storybook/preview.ts`:

<details>
  <summary>(JS)</summary>
  
```javascript
/** @type {import('storybook-stylesheet-toggle').ProjectAnnotationsWithStylesheets} */
const preview = {
  ...
};
```

</details>

```typescript
import type { ProjectAnnotationsWithStylesheets } from "storybook-stylesheet-toggle";
import type { Renderer } from "@storybook/types";

const preview: ProjectAnnotationsWithStylesheets<Renderer> = {
  globals: {
    selectedStylesheetID: 'first',
    stylesheets: [
      {
        id: 'first',
        title: 'First stylesheet',
        url: 'path/to/first-sheet.css',
      },
      {
        id: 'second',
        title: 'Second stylesheet',
        url: 'path/to/second-sheet.css',
      },
    ],
  },
};

export default preview;
```

Boot Storybook, and you should now see a paintbrush menu, allowing you to toggle between the stylesheets you've configured. The first stylesheet will be applied by default.
