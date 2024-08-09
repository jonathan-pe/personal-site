export const LINKS = {
  TWITCH: 'https://www.twitch.tv/jpe_TV',
  SOUNDCLOUD: 'https://soundcloud.com/jpeofficial',
  LINKEDIN: 'https://www.linkedin.com/in/jonathanqpe/',
  INSTAGRAM: 'https://www.instagram.com/notjpe/',
  GITHUB: 'https://github.com/jonathan-pe',
}

export type Link = keyof typeof LINKS

export type Job = {
  id: string
  companyName: string
  role: string
  startDate: string
  endDate: string
  accomplishments: string[]
}

export type SideProject = {
  id: string
  projectName: string
  url: string
  description: string
  techUsed: string[]
}

export type Skill = {
  id: string
  name: string
  level: number
  category: string
}

export type Education = {
  id: string
  institutionName: string
  certificationReceived: string
  startDate: string
  endDate: string
}

export const RESUME = [
  {
    id: 'apple-teksystems',
    companyName: 'Apple',
    role: 'Senior Frontend Software Engineer',
    startDate: 'February 2023',
    endDate: 'February 2024',
    accomplishments: [
      'Led React development of new features in Apple’s Special Project Group’s internal tooling platform',
      'Created scalable, data-intensive, and responsive React web pages to enhance team productivity',
      'Designed, architected and implemented pixel perfect UIs with Less and other CSS preprocessors',
      'Added robust & reusable components to a shared component library for repeated use across multiple apps',
      'Created new APIs leveraging Hasura and accessing them through GraphQL queries',
      'Developed and maintained Node.js backend REST APIs to support frontend features',
      'Collaborated with a team of engineers to develop and maintain an iterable codebase',
    ],
  },
  {
    id: 'reputation',
    companyName: 'Reputation',
    role: 'Senior Frontend Software Engineer',
    startDate: 'November 2021',
    endDate: 'October 2022',
    accomplishments: [
      'Led React development of new features to the Social platform, increasing customer reach to their respective users',
      'Worked cross-functionally with Product, Management and QA teams to ship robust features quickly and effectively',
      'Created integrations with various Social platforms (TikTok, Twitter, Google Business Profile, Instagram/Facebook, LinkedIn)',
      'Refactored underlying Front-End infrastructure, making Front-End development easier and quicker',
    ],
  },
  {
    id: 'dolbyIO',
    companyName: 'Dolby.io',
    role: 'Full Stack Software Engineer',
    startDate: 'August 2020',
    endDate: 'October 2021',
    accomplishments: [
      'Built new functionality and webpages using React, Redux, CSS-in-JSS (styled-components)',
      'Refactored existing pages to be mobile-friendly and responsive',
      'Created a new microservice to handle 3rd party integrations with our APIs',
    ],
  },
  {
    id: 'STRATIM',
    companyName: 'STRATIM',
    role: 'Full Stack Software Engineer',
    startDate: 'January 2019',
    endDate: 'March 2020',
    accomplishments: [
      "Created new and optimized existing Java REST endpoints for STRATIM's mobile application",
      "Built new features for STRATIM's iOS application, almost doubling its user base",
      "Investigated, implemented, and lead STRATIM's migration from Vue.js and iOS native to React.js & React Native",
      'Automated the iOS release/deployment process with fastlane',
    ],
  },
  {
    id: 'gliffy',
    companyName: 'Gliffy Inc.',
    role: 'Full Stack Software Engineer',
    startDate: 'July 2017',
    endDate: 'January 2019',
    accomplishments: [
      'Partnered with UX/design to create new Ember.js webpages for the Gliffy web app',
      'Created a suite of Node.js microservices, allowing for better scalability and increasing engineering efficiency and output',
    ],
  },
]

export const sideProjects = [
  {
    id: 'personalWebsite',
    projectName: 'Personal Website',
    url: 'https://jonathanpe.com',
    description: 'Personal Website created to practice various skills and display my interests',
    techUsed: ['React', 'tailwind CSS', 'Framer Motion'],
  },
  {
    id: '5oclock',
    projectName: "It's 5 O'Clock Somewhere",
    url: 'https://its5oclocksomewhere.club',
    description: "App that shows where in the world it's 5:00pm and suggests a beverage to consume based on location",
    techUsed: ['React', 'styled-components', 'MaterialUI'],
  },
]

export const SKILLS = [
  {
    id: 'reactjs',
    name: 'React.js',
    level: 90,
    category: 'Frontend',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 90,
    category: 'Frontend',
  },
  {
    id: 'HTML',
    name: 'HTML',
    level: 90,
    category: 'Frontend',
  },
  {
    id: 'CSS',
    name: 'CSS',
    level: 90,
    category: 'Frontend',
  },
  {
    id: 'tailwindCSS',
    name: 'Tailwind CSS',
    level: 70,
    category: 'Frontend',
  },
  {
    id: 'Node.js',
    name: 'Node.js',
    level: 75,
    category: 'Backend',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    level: 75,
    category: 'Backend',
  },
  {
    id: 'java',
    name: 'Java',
    level: 60,
    category: 'Backend',
  },
  {
    id: 'graphQL',
    name: 'GraphQL',
    level: 50,
    category: 'Backend',
  },
]

export const EDUCATION = [
  {
    id: 'calpolySLO',
    institutionName: 'California Polytechnic State University: San Luis Obispo, CA',
    certificationReceived: 'B.S. Computer Science',
    startDate: 'September 2013',
    endDate: 'June 2017',
  },
]
