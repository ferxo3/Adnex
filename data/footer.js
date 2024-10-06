import { Behance, Facebook, Github, LinkedIn } from './svgImages'
export const FooterData = {
  logo: '/images/logo.svg',
  logoDark: '/images/logo-light.svg',
  footerText: 'Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.',
  copyright: `${new Date().getFullYear()} Aplio. All Rights Reserved`,
  email: 'info@example.com',
  phone: '+3 230 705 5448',
  expolre: [
    {
      id: 1,
      name: 'About',
      link: '/about',
    },
    {
      id: 2,
      name: 'Services',
      link: '/services',
    },
    {
      id: 5,
      name: 'Pricing',
      link: '/price',
    },
    {
      id: 6,
      name: "Faq's",
      link: '/faq',
    },
  ],
  resources: [
    {
      id: 3,
      name: 'Integration',
      link: '/integration',
    },
    {
      id: 4,
      name: 'Blog',
      link: '/blog',
    },
  ],

  socialLinks: [
    {
      id: 2,
      name: <Github />,
      link: '#',
    },
    {
      id: 3,
      name: <LinkedIn />,
      link: '#',
    },
    {
      id: 4,
      name: <Behance />,
      link: '#',
    },
  ],
}
