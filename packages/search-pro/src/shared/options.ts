import type { LocaleConfig, Page } from "@vuepress/core";
import type { SearchProLocaleData } from "./locales.js";

export interface SearchProCustomFieldOptions {
  getter: (page: Page) => string | string[] | null;

  /**
   * Display content
   *
   * @description `$content` will be replaced by the content returned by `getter`
   *
   * 展示的内容
   *
   * @description `$content` 会被 `getter` 返回的内容替换
   */
  formatter: string;
}

export interface SearchProOptions {
  /**
   * Whether index full text
   *
   * 是否开启全文索引
   *
   * @default false
   */
  fullIndex?: boolean;

  /**
   * Custom field for search
   */
  customField: SearchProCustomFieldOptions[];

  /**
   * Locales config
   *
   * @see [default config](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/search-pro/src/node/locales.ts)
   *
   * 多语言选项
   *
   * @see [默认配置](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/search-pro/src/node/locales.ts)
   */
  locales?: LocaleConfig<SearchProLocaleData>;
}
