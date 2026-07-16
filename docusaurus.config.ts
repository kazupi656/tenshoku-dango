import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "転職だんごブログ",
  tagline: "自分の人生を生きよう",
  favicon: "img/user-icon.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://tenshoku-dango.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kazupi656", // Usually your GitHub org/user name.
  projectName: "tenshoku-dango", // Usually your repo name.
  onBrokenLinks: "throw",
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          // Serve the blog at the site's root.
          routeBasePath: "/",
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {name: "google-site-verification", content: "Z6uc0KmLd2EWB2mxGEyoPnTsSAwvanOSWXUBI7zHemU"},
    ],
    // Replace with your project's social card
    image: "img/social-card.png",
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "転職だんごブログ",
      logo: {
        alt: "My Site Logo",
        src: "img/user-icon.png",
      },
    },
    footer: {
      style: "light",
      links: [
        {
          label: "このサイトについて",
          to: "/docs/about",
        },
        {
          label: "お問い合わせ",
          to: "/docs/contact",
        },
        {
          label: "プライバシーポリシー",
          to: "/docs/policy",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 転職だんごブログ.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
