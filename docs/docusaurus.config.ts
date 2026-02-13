import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

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
            content: `<b><a target="_blank" href="https://github.com/sparkfun/SparkFun_DataLogger/releases/tag/v01.05.00-beta1">DataLogger v1.5.0 Beta</a> is out for testing!</b>`,
        },
        // ...

        algolia: {
            // The application ID provided by Algolia
            appId: '43ODL9UA7J',

            // Public API key: it is safe to commit it
            apiKey: '981767a679772e5d03f0f8968a3d7a11',

            indexName: 'SparkFun Documentation Site',

            // Optional: see doc section below
            contextualSearch: true,

            // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            //externalUrlRegex: 'external\\.com|domain\\.com',

            // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            // replaceSearchResultPathname: {
            //     from: '/docs/', // or as RegExp: /\/docs\//
            //     to: '/',
            // },

            // Optional: Algolia search parameters
            searchParameters: {},

            // Optional: path for search page that enabled by default (`false` to disable it)
            searchPagePath: 'search',

            // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
            insights: false,

            // // Optional: whether you want to use the new Ask AI feature (undefined by default)
            // askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

            //... other Algolia params
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
                }
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
                            label: 'GitHub',
                            href: 'https://github.com/sparkfun/SparkFun_DataLogger',
                        },
                        {
                            label: 'YouTube',
                            href: 'https://www.youtube.com/sparkfun',
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/sparkfun',
                        },
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
