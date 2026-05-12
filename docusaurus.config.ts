import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Thoshini Electronics',
  tagline: 'Fabless semiconductor design from Coimbatore.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    faster: true,
  },

  url: 'https://thoshini.com',
  baseUrl: '/',

  organizationName: 'qiaben',
  projectName: 'thoshini-com-web',

  onBrokenLinks: 'throw',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/insights',
          blogTitle: 'Thoshini insights',
          blogDescription: 'Notes on chip design, verification, and building a fabless company from Coimbatore.',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Thoshini insights',
            description: 'Notes on chip design, verification, and the fabless model.',
            copyright: `Copyright © ${new Date().getFullYear()} Thoshini Electronics Pvt Ltd.`,
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      {name: 'keywords', content: 'fabless semiconductor, VLSI, chip design, Coimbatore, India, RTL, verification, analog layout, DFT, physical design'},
    ],
    navbar: {
      title: 'Thoshini',
      logo: {
        alt: 'Thoshini Electronics',
        src: 'img/logo-navbar.png',
      },
      items: [
        {to: '/what-we-build', label: 'What we build', position: 'left'},
        {to: '/capabilities', label: 'Capabilities', position: 'left'},
        {to: '/company', label: 'Company', position: 'left'},
        {to: '/insights', label: 'Insights', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {to: '/schedule', label: 'Book a call', position: 'right', className: 'navbar-cta'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Company',
          items: [
            {label: 'About Thoshini', to: '/company'},
            {label: 'Capabilities', to: '/capabilities'},
            {label: 'What we build', to: '/what-we-build'},
            {label: 'Insights', to: '/insights'},
          ],
        },
        {
          title: 'Talk to us',
          items: [
            {label: 'Contact', to: '/contact'},
            {label: 'Book a call', to: '/schedule'},
            {label: 'info@thoshini.com', href: 'mailto:info@thoshini.com'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy', to: '/privacy'},
            {label: 'Terms', to: '/terms'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Thoshini Electronics Pvt Ltd · 1/39, Veerappanur, Coimbatore, Tamil Nadu 641105, India · info@thoshini.com`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
