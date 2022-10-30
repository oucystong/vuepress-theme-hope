export interface PageContent {
  header: string;
  slug: string;
  content: string[];
}

export interface PageIndex {
  title: string;
  contents: PageContent[];
}

export type SearchIndex = PageIndex[];
