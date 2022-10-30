import type { App, Page, PageHeader } from "@vuepress/core";
import type { PageContent, PageIndex } from "../shared/index.js";
import { Parser } from "htmlparser2";

const HMR_CODE = `
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchProIndex)
    __VUE_HMR_RUNTIME__.updateSearchProIndex(searchIndex)
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchProIndex(searchIndex);
  })
}
`;

const getPageContent = (page: Page): PageContent[] => {
  const indexs: PageContent[] = [];

  const slugs = new Map<string, string>();

  const extractHeader = (headers: PageHeader[]) => {
    headers.forEach(({ children, slug, title }) => {
      slugs.set(slug, title);

      extractHeader(children);
    });
  };

  extractHeader(page.headers);

  let ignoreElement = 0;
  let withinHeader = 0;

  let scope: PageContent = {
    header: "",
    slug: "",
    content: "",
  };
  indexs.push(scope);

  const parser = new Parser({
    ontext(text) {
      if (ignoreElement) return;

      const prop = withinHeader ? "header" : "content";
      scope[prop] += text;
    },

    onopentag(name, attribute) {
      if (
        ignoreElement ||
        name === "script" ||
        name === "style" ||
        (name === "div" && attribute["class"] === "line-numbers")
      ) {
        ignoreElement += 1;

        return;
      }

      if (withinHeader) {
        withinHeader += 1;

        return;
      }

      if (!/^h\d$/u.test(name)) return;

      const { id } = attribute;
      const title = slugs.get(id);

      if (title) {
        scope = {
          header: title,
          slug: id,
          content: "",
        };
        indexs.push(scope);
        ignoreElement += 1;
      } else {
        scope = {
          header: "",
          slug: id,
          content: "",
        };
        indexs.push(scope);
        withinHeader += 1;
      }
    },
    onclosetag() {
      if (ignoreElement) ignoreElement -= 1;
      else if (withinHeader) withinHeader -= 1;
    },
  });

  parser.parseComplete(page.contentRendered);

  return indexs
    .map((index) => {
      index.header = index.header
        .replace(/\s{2,}/g, " ")
        .replace(/^#/g, "")
        .trim();
      index.content = index.content.replace(/\s{2,}/g, " ").trim();

      return index;
    })
    .filter((p) => p.content || p.header);
};

// TODO: add custom field
export const prepareSearchIndex = async ({
  env,
  pages,
  writeTemp,
}: App): Promise<void> => {
  const searchIndex = pages.map(
    (page): PageIndex => ({
      path: page.path,
      title: page.title,
      contents: getPageContent(page),
    })
  );

  // search index file content
  let content = `
export const searchIndex = ${JSON.stringify(searchIndex, null, 2)}
`;

  // inject HMR code
  if (env.isDev) content += HMR_CODE;

  await writeTemp("internal/search-pro/index.js", content);
};
