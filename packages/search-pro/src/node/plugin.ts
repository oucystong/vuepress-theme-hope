import { getDirname, path } from "@vuepress/utils";
import { watch } from "chokidar";
import { prepareSearchIndex } from "./prepare.js";

import type { Plugin } from "@vuepress/core";
import type { SearchProOptions } from "../shared/index.js";

const __dirname = getDirname(import.meta.url);

export const searchProPlugin: (options: SearchProOptions) => Plugin = (
  options
) => {
  return {
    name: "vuepress-plugin-search-pro",

    define: {
      __SEARCH_PRO_OPTIONS__: options,
    },

    clientConfigFile: path.resolve(__dirname, "../client.js"),

    onPrepared: (app): Promise<void> => prepareSearchIndex(app),

    onWatched: (app, watchers): void => {
      const searchIndexWatcher = watch("internal/pageData/*", {
        cwd: app.dir.temp(),
        ignoreInitial: true,
      });

      searchIndexWatcher.on("add", () => prepareSearchIndex(app));
      searchIndexWatcher.on("change", () => prepareSearchIndex(app));
      searchIndexWatcher.on("unlink", () => prepareSearchIndex(app));

      watchers.push(searchIndexWatcher);
    },
  };
};
