/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Indie Owls Creative`,
    tagline: 'Innovate Your Business with Next Generation Software',
    location: 'Pennsylvania, USA',
    isOpenForWork: true,
    siteUrl: `https://indieowls.com`,
    socials: {
      github: 'https://github.com/IndieOwls',
      linkedin: '',
    },
    services: [
      {
        name: 'Artificial Intelligence',
        tagline: 'Utilize the latest advances in machine learning technology',
        icon: 'PLACEHOLDER_ICON',
        id: 'service-ai',
        link: '/ai',
        order: 0,
        offerDescription: ``,
        whyDescription: ``,
        learnMoreDescription: ``,
        learnMoreLink: ''
      },
      {
        name: 'E-Commerce',
        tagline: 'Find an online home for your business',
        icon: 'PLACEHOLDER_ICON',
        id: 'service-ecommerce',
        link: '/e-commerce',
        order: 0,
        offerDescription: ``,
        whyDescription: ``,
        learnMoreDescription: ``,
        learnMoreLink: ''
      },
      {
        name: 'Data Visualization',
        tagline: 'Analyze your data with easy-to-read charts and graphs',
        icon: 'PLACEHOLDER_ICON',
        id: 'service-datavisualization',
        link: '/data-visualization',
        order: 0,
        offerDescription: ``,
        whyDescription: ``,
        learnMoreDescription: ``,
        learnMoreLink: ''
      },
      {
        name: 'Javascript',
        tagline: 'Leverage the best technologies that the web has to offer',
        icon: 'PLACEHOLDER_ICON',
        id: '',
        link: '/javascript',
        order: 0,
        offerDescription: ``,
        whyDescription: ``,
        learnMoreDescription: ``,
        learnMoreLink: ''
      },
      {
        name: 'Maps & Navigation',
        tagline: "Help users find your store's location",
        icon: 'PLACEHOLDER_ICON',
        id: 'service-maps',
        link: '/maps-and-navigation',
        order: 0,
        offerDescription: ``,
        whyDescription: ``,
        learnMoreDescription: ``,
        learnMoreLink: ''
      },
      {
        name: 'Phone & SMS',
        tagline: 'Communicate with your customers through multiple channels',
        icon: 'PLACEHOLDER_ICON',
        id: 'service-phone',
        link: '/phone-and-sms',
        order: 0,
        offerDescription: ``,
        whyDescription: ``,
        learnMoreDescription: ``,
        learnMoreLink: ''
      },
      {
        name: 'Product Development',
        tagline: 'Bring your ideas to life',
        icon: 'PLACEHOLDER_ICON',
        id: 'service-productdevelopment',
        link: '/product-development',
        order: 0,
        offerDescription: ``,
        whyDescription: ``,
        learnMoreDescription: ``,
        learnMoreLink: ''
      },
      {
        name: 'React',
        tagline: 'Leverage the hottest technologies in web development',
        icon: 'PLACEHOLDER_ICON',
        id: 'offering-react',
        link: '/react',
        order: 0,
        offerDescription: ``,
        whyDescription: ``,
        learnMoreDescription: ``,
        learnMoreLink: ''
      },
      {
        name: 'Third Party APIs',
        tagline: 'Integrate with any service of your choice',
        icon: 'PLACEHOLDER_ICON',
        id: 'service-apis',
        link: '/third-party-apis',
        order: 0,
        offerDescription: ``,
        whyDescription: ``,
        learnMoreDescription: ``,
        learnMoreLink: ''
      },
      {
        name: 'Virtual Reality',
        tagline: 'Cutting-edge visualization for your business',
        icon: 'PLACEHOLDER_ICON',
        id: 'offering-vr',
        link: '/virtual-reality',
        order: 0,
        offerDescription: ``,
        whyDescription: ``,
        learnMoreDescription: ``,
        learnMoreLink: ''
      }
    ],
    profiles: [
      {
        name: 'Denny S. Temple',
        id: 'profile-denny',
        title: 'Founder & Lead Developer',
        description: `10 years of experience developing software in Javascript, Node.js, and React, 
          and recognized by the Scrum Alliance as a Certified Scrum Product Owner (CSPO).  Experienced 
          in developing web, mobile, and enterprise applications.  Has built out automated processes, 
          E2E testing suites, and CMS applications, and has given talks and workshops on CSS, GraphQL, 
          and Atomic Design.`,
        image: '',
        specialties: ['Software Engineering', 'Product Management', 'Agile']
        socials: {
          github: 'https://github.com/dentemple'
          linkedin: 'https://www.linkedin.com/in/dentemple/',
          twitter: 'https://twitter.com/dentemple',
          twitch: 'https://www.twitch.tv/existentialistowl'
        },
        
      }
    ]
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}
