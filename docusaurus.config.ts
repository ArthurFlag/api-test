import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { ScalarOptions } from "@scalar/docusaurus";
import type * as Redocusaurus from "redocusaurus";

const currentMonth = new Date().getMonth();
const isJune = currentMonth === 5;

const config: Config = {
  // Testing faster build
  future: {
    experimental_faster: true,
  },
  title: "Aiven docs",
  tagline: "Your trusted data & AI platform",
  favicon: "images/favicon.ico",
  url: "https://aiven.io/",
  baseUrl: "/docs/",
  organizationName: "Aiven",
  projectName: "docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "throw",
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/aiven/aiven-docs/blob/main",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: [
            "./src/css/fonts.css",
            "./src/css/colors.css",
            "./src/css/navbar.css",
            "./src/css/admonitions.css",
            "./src/css/custom.css",
          ],
        },
      } satisfies Preset.Options,
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // You can also pass it a OpenAPI spec URL
          {
            spec: "static/oas/openapi-bundled.yaml",
            route: "/redoc/",
          },
          {
            spec: "static/oas/openapi-src.json",
            route: "/redocfull/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  plugins: [
    "./src/plugins/svg-fix/index.ts",
    "docusaurus-plugin-image-zoom",
    [
      "@scalar/docusaurus",
      {
        id: "api2",
        label: "API (partial - Scalar)",
        route: "/docs/api2",
        showNavLink: true, // optional, default is true
        configuration: {
          spec: {
            url: "oas/openapi-bundled.yaml",
          },
          hideModels: true,
        },
      } as ScalarOptions,
    ],
    [
      "@scalar/docusaurus",
      {
        id: "api",
        label: "API (whole - Scalar)",
        route: "/docs/api",
        showNavLink: true, // optional, default is true
        configuration: {
          spec: {
            url: "oas/openapi-src.json",
          },
          hideModels: true,
        },
      } as ScalarOptions,
    ],
  ],
  themeConfig: {
    image: "images/site-preview.png",
    navbar: {
      title: "aiven",
      logo: {
        alt: "Aiven docs",
        src: isJune ? "images/logo-pride.svg" : "images/logo.svg",
        srcDark: isJune ? "images/logoDark-pride.svg" : "images/logoDark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "main",
          position: "left",
          label: "Docs",
        },
        {
          type: "doc",
          position: "left",
          docId: "platform/howto/support",
          label: "Support",
        },
        {
          label: "API (partial - Redoc)",
          position: "left",
          to: "/docs/redoc/",
        },
        {
          label: "API (whole - Redoc)",
          position: "left",
          to: "/docs/redocfull/",
        },
        {
          label: "Changelog",
          href: "https://aiven.io/changelog",
          position: "right",
        },
        {
          href: "https://github.com/aiven/aiven-docs",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://console.aiven.io/login",
          label: "Log in",
          position: "right",
          className: "navbar-button navbar-button-secondary",
        },
        {
          href: "https://console.aiven.io/signup",
          label: "Start for free",
          position: "right",
          className: "navbar-button navbar-button-primary",
        },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    // algolia: {
    //   appId: "TVLG5RQH07",
    //   apiKey: "1beac99b8c1f460aca8bfa515a6dda6f",
    //   indexName: "aiven",
    //   contextualSearch: true,
    //   searchPagePath: "search",
    // },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Services",
              href: "/docs/products/services",
            },
            {
              label: "Dev tools",
              href: "/docs/tools",
            },
            {
              label: "Docs repository",
              href: "https://github.com/aiven/aiven-docs",
            },
            {
              label: "Changelog",
              href: "https://aiven.io/changelog",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Support",
              href: "/docs/platform/howto/support",
            },
            {
              label: "Community forum",
              href: "https://aiven.io/community/forum/",
            },

            {
              label: "Company website",
              href: "https://aiven.io/",
            },
            {
              label: "Blog",
              href: "https://aiven.io/blog",
            },
            {
              label: "Developer center",
              href: "https://aiven.io/developer",
            },
            {
              label: "Email the docs team",
              href: "mailto:docs@aiven.io",
            },
          ],
        },
        {
          title: "Terms & Policies",
          items: [
            {
              label: "Terms of Service",
              href: "https://aiven.io/terms",
            },
            {
              label: "SLA",
              href: "https://aiven.io/sla",
            },
            {
              label: "Privacy Policy",
              href: "https://aiven.io/privacy",
            },
          ],
        },
        {
          title: "Let's connect",
          items: [
            {
              label: "Book a demo",
              href: "https://aiven.io/book-demo",
            },
            {
              label: "Contact us",
              href: "https://aiven.io/contact",
            },
            {
              label: "Careers",
              href: "https://aiven.io/careers",
            },
            {
              label: "Subscribe to newsletter",
              href: "https://aiven.io/newsletter",
            },
            {
              label: "Events calendar",
              href: "https://aiven.io/events",
            },
          ],
        },
      ],
      copyright: `Apache, Apache Kafka, Kafka, Apache Flink, Flink, Apache Cassandra, and Cassandra are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries. ClickHouse is a registered trademark of ClickHouse, Inc. https://clickhouse.com. M3, M3 Aggregator, OpenSearch, AlloyDB Omni, PostgreSQL, MySQL, InfluxDB, Grafana, Dragonfly, Valkey, Thanos, Terraform, and Kubernetes are trademarks and property of their respective owners. *Redis is a registered trademark of Redis Ltd. and the Redis box logo is a mark of Redis Ltd. Any rights therein are reserved to Redis Ltd. Any use by Aiven is for referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Redis and Aiven. All product and service names used in this website are for identification purposes only and do not imply endorsement.`,
    },
    prism: {
      theme: prismThemes.nightOwl,
      darkTheme: prismThemes.dracula,
      defaultLanguage: "bash",
      additionalLanguages: ["bash", "json", "php", "hcl"],
    },
    mermaid: {
      options: {
        maxTextSize: 1000,
      },
    },
    markdown: {
      format: "mdx",
      mermaid: true,
      mdx1Compat: {
        comments: false,
        admonitions: false,
        headingIds: false,
      },
    },
    zoom: {
      selector: ".markdown > img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
