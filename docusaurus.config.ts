import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Thoshini LLC',
  tagline: 'Building maintenance, repair and supply services for government and commercial clients',
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
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
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
      {name: 'keywords', content: 'Thoshini, federal contractor, facility maintenance, building repair, grounds maintenance, building materials, HVAC supplies, hardware supply, UEI JNZVHJKH8FN6, CAGE 24BL6'},
    ],
    navbar: {
      title: 'Thoshini',
      logo: {
        alt: 'Thoshini LLC',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/services', label: 'Services', position: 'left'},
        {to: '/supply', label: 'Supply', position: 'left'},
        {to: '/government', label: 'Government', position: 'left'},
        {to: '/partners', label: 'Partners', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'right', className: 'navbar-cta'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Company',
          items: [
            {label: 'Services', to: '/services'},
            {label: 'Supply', to: '/supply'},
            {label: 'Government', to: '/government'},
            {label: 'Partners', to: '/partners'},
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
      copyright: `© ${new Date().getFullYear()} Thoshini LLC · 1309 Coffeen Avenue, STE 1200, Sheridan, WY 82801 · UEI JNZVHJKH8FN6 · CAGE 24BL6`,
    },
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
