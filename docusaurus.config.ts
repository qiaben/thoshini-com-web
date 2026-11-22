import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Thoshini LLC',
  tagline: 'Private AI in a box: AI that runs in your office, not in the cloud',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://thoshini.com',
  baseUrl: '/',

  organizationName: 'qiaben',
  projectName: 'thoshini-com-web',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    // Endpoint of the forms worker (see worker/): contact, partner and SMS opt-in
    // with phone verification. Set at build time; when empty, forms fall back to email.
    formsApiUrl: process.env.FORMS_API_URL ?? '',
  },

  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'}},
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    metadata: [
      {name: 'keywords', content: 'Thoshini LLC, Thoshini, AI Box, private AI, local AI, on-premise AI, offline AI assistant, NVIDIA Jetson, document AI, AI for dental offices, AI for small business'},
    ],
    navbar: {
      title: 'Thoshini Electronics',
      logo: {
        alt: 'Thoshini LLC',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'AI Box', position: 'left', activeBaseRegex: '^/$'},
        {to: '/ai-box', label: 'Compare', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {to: '/reserve', label: 'Reserve', position: 'right', className: 'navbar-cta'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Company',
          items: [
            {label: 'AI Box', to: '/'},
            {label: 'Compare models', to: '/ai-box'},
            {label: 'Reserve', to: '/reserve'},
          ],
        },
        {
          title: 'Contact',
          items: [
            {label: 'info@thoshini.com', href: 'mailto:info@thoshini.com'},
            {label: 'Contact form', to: '/contact'},
            {label: 'Text message updates', to: '/sms-consent'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy Policy', to: '/privacy'},
            {label: 'SMS Terms', to: '/sms-terms'},
            {label: 'Terms of Use', to: '/terms'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Thoshini LLC · 1309 Coffeen Avenue, STE 1200, Sheridan, WY 82801 `,
    },
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
