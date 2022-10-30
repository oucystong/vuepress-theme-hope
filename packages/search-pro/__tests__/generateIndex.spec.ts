import { Page } from "@vuepress/core";
import { expect, it } from "vitest";
import { generatePageIndex } from "../src/node/generateIndex";

const page = {
  title: "Guide",
  contentRendered: `\
<div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>If you met a bug while using, you can open an issue <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a></p>
</div>
<h2 id="theme-features✨" tabindex="-1"><a class="header-anchor" href="#theme-features✨" aria-hidden="true">#</a> Theme Features✨</h2>
<p>The theme largely inherits the config of <code v-pre>@vuepress/theme-default</code>, while adds a lot of functions and layout optimization on it.</p>
<!-- more -->
<h3 id="markdown-enhance" tabindex="-1"><a class="header-anchor" href="#markdown-enhance" aria-hidden="true">#</a> Markdown Enhance</h3>
<p>Added more syntax to Markdown, enriching documentation and blog writing:</p>
<ul>
<li><RouterLink to="/guide/markdown/container.html">Custom Container</RouterLink></li>
<li><RouterLink to="/guide/markdown/tabs.html">Tabs</RouterLink></li>
<li><RouterLink to="/guide/markdown/code-tabs.html">Code Tabs</RouterLink></li>
<li><RouterLink to="/guide/markdown/footnote.html">Footnote</RouterLink></li>
<li><RouterLink to="/guide/markdown/tasklist.html">Task list</RouterLink></li>
<li><RouterLink to="/guide/markdown/image.html">Image Enahancement</RouterLink></li>
<li><RouterLink to="/guide/markdown/align.html">Custom alignment</RouterLink></li>
<li><RouterLink to="/guide/markdown/attrs.html">Custom Attributes</RouterLink></li>
<li><RouterLink to="/guide/markdown/sup-sub.html">Subscript and Supercript</RouterLink></li>
<li><RouterLink to="/guide/markdown/mark.html">Mark</RouterLink></li>
<li><RouterLink to="/guide/markdown/chart.html">Chart</RouterLink></li>
<li><RouterLink to="/guide/markdown/echarts.html">ECharts</RouterLink></li>
<li><RouterLink to="/guide/markdown/flowchart.html">FlowChart</RouterLink></li>
<li><RouterLink to="/guide/markdown/tex.html">Tex Support</RouterLink></li>
<li><RouterLink to="/guide/markdown/mermaid.html">Mermaid Diagram</RouterLink></li>
<li><RouterLink to="/guide/markdown/include.html">File include</RouterLink></li>
<li><RouterLink to="/guide/markdown/demo.html">Code demo</RouterLink></li>
<li><RouterLink to="/guide/markdown/presentation.html">Presentation</RouterLink></li>
<li><RouterLink to="/guide/markdown/stylize.html">Stylize</RouterLink></li>
<li><RouterLink to="/guide/markdown/playground.html">Playground</RouterLink></li>
<li><RouterLink to="/guide/markdown/vue-playground.html">Vue Playground</RouterLink></li>
<li><RouterLink to="/guide/markdown/components.html">Components out of box</RouterLink></li>
<li><RouterLink to="/guide/interface/code-theme.html">Customize Themes</RouterLink></li>
</ul>
<h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h3>
<p>New in Page:</p>
<ul>
<li>
<p><RouterLink to="/guide/layout/breadcrumb.html">Path navigation</RouterLink></p>
</li>
<li>
<p>Add <RouterLink to="/guide/layout/page.html#heading-list">TOC anchor</RouterLink> on the right side under the desktop width</p>
</li>
<li>
<p><RouterLink to="/guide/layout/footer.html">Custom footer</RouterLink></p>
</li>
</ul>
<p>Layout Optimization:</p>
<ul>
<li>
<p>Completely refactored mobile layout</p>
</li>
<li>
<p>Page navigation and page meta style improvements</p>
</li>
<li>
<p><RouterLink to="/guide/layout/home.html">Default homepage optimization</RouterLink>:</p>
<ul>
<li>Features can have icons, links, and have a new outlook</li>
<li>Widescreen layout optimization</li>
</ul>
</li>
</ul>
<h3 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h3>
<ul>
<li>
<p><RouterLink to="/guide/interface/icon.html">Icon support</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/layout/navbar.html">Navbar</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/layout/sidebar.html">Sidebar</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/interface/theme-color.html">Theme colors</RouterLink>: allowing you to switch dynamically during browsing</p>
</li>
<li>
<p><RouterLink to="/guide/interface/darkmode.html">Dark mode</RouterLink>: allowing you to switch manually or apply automatically according to device settings</p>
</li>
<li>
<p><RouterLink to="/guide/interface/others.html#fullscreen-button">Full Screen Button</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/interface/others.html#back-to-top-button">Back to top button</RouterLink></p>
</li>
</ul>
<h3 id="page-enhance" tabindex="-1"><a class="header-anchor" href="#page-enhance" aria-hidden="true">#</a> Page Enhance</h3>
<ul>
<li>
<p><RouterLink to="/guide/feature/copy-code.html">One-click copy code</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/feature/photo-swipe.html">Picture preview feature</RouterLink>: supports zooming, dragging, sliding browsing, sharing and downloading</p>
</li>
<li>
<p><RouterLink to="/guide/feature/comment.html">Comment Service</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/feature/page-info.html">Page info</RouterLink></p>
<ul>
<li>Reading Counts</li>
<li>Author and writing date</li>
<li>Automatically generated word count and estimated reading time</li>
<li>Tags and Categorys</li>
</ul>
</li>
<li>
<p><RouterLink to="/guide/feature/copyright.html">Copyright</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/feature/encrypt.html">Encryption</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/feature/search.html">Search Support</RouterLink></p>
</li>
</ul>
<h3 id="blog" tabindex="-1"><a class="header-anchor" href="#blog" aria-hidden="true">#</a> Blog</h3>
<ul>
<li>
<p><RouterLink to="/guide/blog/intro.html">Article list with sticky support, and summary autogeneration</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/blog/category-and-tags.html">Cateory and tag list</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/blog/timeline.html">Timeline</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/blog/article.html">Star article</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/blog/home.html">New blog homepage layout</RouterLink></p>
</li>
</ul>
<h3 id="advanced-features" tabindex="-1"><a class="header-anchor" href="#advanced-features" aria-hidden="true">#</a> Advanced Features</h3>
<ul>
<li>
<p><RouterLink to="/guide/advanced/pwa.html">PWA support</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/advanced/feed.html">Feed generation</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/advanced/seo.html">SEO enhancement</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/advanced/sitemap.html">Sitemap generation</RouterLink></p>
</li>
</ul>
<h2 id="build-in-plugins🧩" tabindex="-1"><a class="header-anchor" href="#build-in-plugins🧩" aria-hidden="true">#</a> Build-in Plugins🧩</h2>
<p>The theme includes the following plugins, you can use them in other themes or directly.</p>
<ul>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/blog/" target="_blank" rel="noopener noreferrer">vuepress-plugin-blog2<ExternalLinkIcon/></a>: Blog plugin for VuePress2</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/comment/" target="_blank" rel="noopener noreferrer">vuepress-plugin-comment2<ExternalLinkIcon/></a>: Comment and pageviews</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/components/" target="_blank" rel="noopener noreferrer">vuepress-plugin-components<ExternalLinkIcon/></a>: Provide some out of box plugins</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/copy-code/" target="_blank" rel="noopener noreferrer">vuepress-plugin-copy-code2<ExternalLinkIcon/></a>: Provide copy button for code blocks</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/copyright/" target="_blank" rel="noopener noreferrer">vuepress-plugin-copyright2<ExternalLinkIcon/></a>: Append copyright information when copying or diable copy and selection.</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/feed/" target="_blank" rel="noopener noreferrer">vuepress-plugin-feed2<ExternalLinkIcon/></a>: Feed support</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/md-enhance/" target="_blank" rel="noopener noreferrer">vuepress-plugin-md-enhance<ExternalLinkIcon/></a>: Provide more Markdown syntax</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/photo-swipe/" target="_blank" rel="noopener noreferrer">vuepress-plugin-photo-swipe<ExternalLinkIcon/></a>: Make the site’s picture support click zoom</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/pwa/" target="_blank" rel="noopener noreferrer">vuepress-plugin-pwa2<ExternalLinkIcon/></a>: Enhanced PWA support</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/reading-time/" target="_blank" rel="noopener noreferrer">vuepress-plugin-reading-time2<ExternalLinkIcon/></a>: Expect reading time and words count</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/redirect/" target="_blank" rel="noopener noreferrer">vuepress-plugin-redirect<ExternalLinkIcon/></a>: Redirect pages</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/sass-palette/" target="_blank" rel="noopener noreferrer">vuepress-plugin-sass-palette<ExternalLinkIcon/></a>: Sass style plugin for all plugins and themes</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/seo/" target="_blank" rel="noopener noreferrer">vuepress-plugin-seo2<ExternalLinkIcon/></a>: SEO Enhancement Plugin</p>
</li>
<li>
<p><a href="https://vuepress-theme-hope.github.io/v2/sitemap/" target="_blank" rel="noopener noreferrer">vuepress-plugin-sitemap2<ExternalLinkIcon/></a>: Sitemap plugin</p>
</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>Here are some other plugins that are not enabled by default by the theme, you can enable them according to your own needs.</p>
<ul>
<li><a href="https://vuepress-theme-hope.github.io/v2/lightgallery/" target="_blank" rel="noopener noreferrer">vuepress-plugin-lightgallery<ExternalLinkIcon/></a>: Photo preview plugin based on lightgallery</li>
</ul>
</div>
</div>
`,
};

it("Should generate index", () => {
  generatePageIndex(page as unknown as Page, []);
});
