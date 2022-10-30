import { load } from "cheerio";

import type { Page } from "@vuepress/core";
import type { AnyNode } from "cheerio";
import type {
  PageIndex,
  SearchProCustomFieldOptions,
} from "../shared/index.js";

// These tags are valid HTML tags which can contain content.
const CONTENT_BLOCK_TAGS =
  "header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,li,main,ol,p,ul,caption,table,thead,tbody,th,tr,datalist,fieldset,form,legend,optgroup,option,select,details,dialog,menu,menuitem,summary,blockquote,tfoot";
const CONTENT_INLINE_TAGS =
  "RouterLink,a,b,abbr,bdi,bdo,cite,code,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,del,ins,td,button,label,legend,meter,optgroup,option,output,progress,select";

const $ = load("");

export const generatePageIndex = (
  page: Page,
  customFields: SearchProCustomFieldOptions[] = []
) => {
  const nodes = $.parseHTML(page.contentRendered);
  const result: PageIndex = { title: page.title, contents: [] };
  let currectContent = "";

  const render = (node: AnyNode) => {
    if (node.type === "tag") {
      if (CONTENT_BLOCK_TAGS.includes(node.name)) {
        if (currectContent) {
          // add content
          console.log(currectContent);
          currectContent = "";
        }
        node.childNodes.forEach(render);
      } else if (CONTENT_INLINE_TAGS.includes(node.name))
        node.childNodes.forEach(render);
    } else if (node.type === "text")
      currectContent += node.data.trim() ? ` ${node.data.trim()}` : "";
  };

  nodes.forEach((node) => {
    render(node);
  });

  console.log(nodes);

  return result;
};
