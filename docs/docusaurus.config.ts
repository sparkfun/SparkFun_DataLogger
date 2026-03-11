import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// our search keys
const appKey = process.env.ALGOLIA_APP_KEY;
const appID = process.env.ALGOLIA_APPID;
const indexName = process.env.ALGOLIA_INDEX_NAME;
const assistantId = process.env.ALGOLIA_ASK_AI_ASSISTANT_ID;

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'DataLoggerIoT Documentation',
    tagline: 'Log data with the SparkFun DataLogger IoT',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },
    // Set the production url of your site here
    url: 'https://docs.sparkfun.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/SparkFun_DataLogger/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'sparkfun', // Usually your GitHub org/user name.
    projectName: 'SparkFun_DataLogger', // Usually your repo name.

    onBrokenLinks: 'throw',
    trailingSlash: false,

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [
        '@docsearch/docusaurus-adapter',
    ],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    routeBasePath: '/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],
    // fix a css issue for docsearch - see https://github.com/facebook/docusaurus/issues/11746
    future: {
        v4: true,
        experimental_faster: {
            lightningCssMinimizer: true,
        },
    },
    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        announcementBar: {
            id: `announcementBar-v1.5.0.beta1`, // Increment on new announcement
            textColor: '#fff',
            backgroundColor: '#25444a',
            content: `<b><a target="_blank" href="https://github.com/sparkfun/SparkFun_DataLogger/releases/tag/v01.05.00-beta2">DataLogger v1.5.0 Beta 2</a> is out for testing!</b>`,
        },
        // ...

        docsearch: {
            // The application ID provided by Algolia
            appId: appID,
            apiKey: appKey,
            indexName: indexName,

            // Optional: see doc section below
            contextualSearch: false,

            // Optional: path for search page that enabled by default (`false` to disable it)
            searchPagePath: 'search',

            // only search in the SparkFun DataLogger documentation - restrict on the section facet
            searchParameters: {
                facetFilters: ['section:SparkFun_DataLogger'],
            },

            // note - using a "markdown" index that is separate from the main documentation index.
            // this is recommended by docsearch
            askAi: {
                indexName: "SparkFun_Documenation_Site_MarkDown",
                assistantId: assistantId,
                apiKey: appKey,
                appId: appID,
                // March 2026 - the side panel isn't working -- need to revisit.
                sidePanel: true,
                searchParameters: {
                    facetFilters: ['section:SparkFun_DataLogger'],
                },

            },

        },

        navbar: {
            title: 'DataLogger IoT Documentation',
            logo: {
                alt: 'SparkFun Logo',
                src: 'img/sfe_flame.png',
            },
            items: [
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'tutorialSidebar',
                //     position: 'left',
                //     label: 'Documentation',
                // },
                {
                    href: 'https://github.com/sparkfun/SparkFun_DataLogger',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
                {
                    href: 'https://www.sparkfun.com',
                    position: 'right',
                    className: 'header-sparkfun-link',
                    'aria-label': 'SparkFun website'
                },
                {
                    href: 'https://community.sparkfun.com',
                    position: 'right',
                    className: 'header-forums-link',
                    'aria-label': 'SparkFun Community Forums',
                },
            ],
        },
        footer: {
            logo: {
                alt: 'SparkFun Electronics',
                src: 'img/sfe_flame.png',
                href: 'https://www.sparkfun.com/'
            },
            links: [
                {
                    title: 'DataLogger IoT Boards',
                    items: [
                        {
                            label: 'DataLoggerIoT',
                            href: 'https://www.sparkfun.com/sparkfun-datalogger-iot.html'
                        },
                        {
                            label: 'DataLoggerIoT 9DoF',
                            href: 'https://www.sparkfun.com/sparkfun-datalogger-iot-9dof.html'
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            html: `<table style="border:none; border-collapse:collapse;">
  <tr border="none">
    <td style="border:none; padding:0;">
      <a href="https://www.youtube.com/sparkfun" target="_blank" rel="noreferrer noopener" aria-label="SparkFun on YouTube">
        <img src="img/social-youtube.svg" class="social-image" alt="SparkFun on YouTube" width="32" height="32" />
      </a>
    </td>
    <td style="border:none; padding:0;">
      <a href="https://www.github.com/sparkfun" target="_blank" rel="noreferrer noopener" aria-label="SparkFun on GitHub">
        <img src="img/social-github.svg" class="social-image" alt="SparkFun on GitHub" width="32" height="32" />
      </a>
    </td>
    <td style="border:none; padding:0;">
      <a href="https://www.instagram.com/sparkfun/" target="_blank" rel="noreferrer noopener" aria-label="SparkFun on Instagram">
        <img src="img/social-instagram.svg" class="social-image" alt="SparkFun on Instagram" width="32" height="32" />
      </a>
    </td>
    <td style="border:none; padding:0;">
      <a href="https://twitter.com/sparkfun" target="_blank" rel="noreferrer noopener" aria-label="SparkFun on Twitter">
        <img src="img/social-twitter.svg" class="social-image" alt="SparkFun on Twitter" width="32" height="32" />
      </a>
    </td>
  </tr>
</table>`
                        }
                    ],
                },
                {
                    title: 'SparkFun',
                    items: [
                        {
                            label: 'Community Forum',
                            href: 'https://community.sparkfun.com/',
                        },
                        {
                            label: 'SparkFun.com',
                            href: 'https://www.sparkfun.com/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} SparkFun Electronics`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
