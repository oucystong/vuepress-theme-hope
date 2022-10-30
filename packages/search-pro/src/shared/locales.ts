import type { ConvertLocaleConfig } from "vuepress-shared";

/**
 * Muti language config for `vuepress-plugin-search-pro` plugin
 *
 * `vuepress-plugin-search-pro` 插件的多语言配置
 */
export interface SearchProLocaleData {
  /**
   * Search box placeholder
   *
   * 搜索框占位符文字
   */
  placeholder: string;
}

export type SearchProLocaleConfig = ConvertLocaleConfig<SearchProLocaleData>;
