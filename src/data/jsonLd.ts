import type { Organization, WithContext } from 'schema-dts';

const jsonLd: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ras Tech',
  description: 'Ras Tech - The Best Tech Company',
  url: 'https://www.ras-tech.com',
  logo: 'https://www.ras-tech.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'test@example.com',
    telephone: '+25199999999',
    contactType: 'Customer Support',
    availableLanguage: 'English',
    // areaServed: 'US',
  },
  sameAs: [
    'https://www.facebook.com/yourcompany',
    'https://www.twitter.com/yourcompany',
    'https://www.linkedin.com/company/yourcompany',
  ],
  serviceArea: {
    '@type': 'Place',
    name: 'Global',
  },
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Website Development',
      description: 'We build custom websites tailored to your business needs.',
      category: 'Web Development',
    },
    {
      '@type': 'Offer',
      name: 'Web Application Development',
      description: 'We develop web applications using the latest technologies.',
      category: 'Web Application Development',
    },
    {
      '@type': 'Offer',
      name: 'Mobile Application Development',
      description: 'We build native and cross-platform mobile applications.',
      category: 'Mobile Application Development',
    },
  ],
};
export default jsonLd;
