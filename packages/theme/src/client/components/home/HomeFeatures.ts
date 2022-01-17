import { usePure } from "@mr-hope/vuepress-shared/lib/client";
import { usePageFrontmatter } from "@vuepress/client";
import { isArray } from "@vuepress/shared";
import { computed, defineComponent, h } from "vue";
import { RouterLink } from "vue-router";

import type { VNode } from "vue";
import type { ProjectHomePageFrontmatter } from "../../../shared";

export default defineComponent({
  name: "HomeFeatures",
  setup() {
    const frontmatter = usePageFrontmatter<ProjectHomePageFrontmatter>();
    const isPure = usePure();

    const features = computed(() => {
      if (isArray(frontmatter.value.features))
        return frontmatter.value.features;

      return [];
    });

    return (): VNode | null =>
      features.value.length
        ? h(
            "div",
            { class: "features" },
            frontmatter.value.features?.map((feature, index) =>
              h(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                feature.link ? RouterLink : "div",
                {
                  class: [
                    "feature",
                    {
                      link: feature.link,
                      [`feature${(index % 9) + 1}`]: !isPure.value,
                    },
                  ],
                  ...(feature.link
                    ? {
                        to: feature.link,
                        role: "navigation",
                      }
                    : {}),
                },
                [h("h2", feature.title), h("p", feature.details)]
              )
            )
          )
        : null;
  },
});