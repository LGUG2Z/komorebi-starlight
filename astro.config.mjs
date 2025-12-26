// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { remarkHeadingId } from "remark-custom-heading-id";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkHeadingId],
  },
  integrations: [
    starlight({
      title: "komorebi",
      favicon: "/favicon.svg",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/LGUG2Z/komorebi",
        },
      ],
      sidebar: [
        {
          label: "About",
          items: [
            { label: "Overview", slug: "about/overview" },
            { label: "Community", slug: "about/community" },
            { label: "Licensing", slug: "about/licensing" },
            { label: "Sponsorship", slug: "about/sponsorship" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Installation", slug: "guides/installation" },
            {
              label: "License Registration",
              slug: "guides/license-registration",
            },
            { label: "Quickstart", slug: "guides/quickstart" },
            { label: "Upgrades", slug: "guides/upgrades" },
            { label: "Uninstallation", slug: "guides/uninstallation" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
