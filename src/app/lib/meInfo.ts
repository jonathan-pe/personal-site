import { AppleIcon, DolbyIcon, GliffyIcon, MetaIcon, ReputationIcon, STRATIMIcon } from '@/images/CompanyIcons'
import { Education, Job, SideProject, Skill } from './types'

export const LINKS = {
  TWITCH: 'https://www.twitch.tv/jpe_TV',
  SOUNDCLOUD: 'https://soundcloud.com/jpeofficial',
  LINKEDIN: 'https://www.linkedin.com/in/jonathanqpe/',
  INSTAGRAM: 'https://www.instagram.com/notjpe/',
  GITHUB: 'https://github.com/jonathan-pe',
}

export const RESUME: Array<Job> = [
  {
    id: 'meta-teksystems',
    companyName: 'Meta',
    role: 'Senior Frontend Software Engineer',
    startDate: 'July 2024',
    endDate: 'Present',
    icon: MetaIcon,
    accomplishments: [
      "React development of new projects for Meta's Infrastructure & Data Center's team, leading to increased understanding and visibility over key performance metrics",
      'Architected and created scalable, responsive React web pages, allowing for a more robust and iterable code base and enhancing the developer experience',
      "Created robust and reusable components for Meta's component library, creating consistency across the team's applications",
      'Collaborated with a team of engineers to develop and maintain an iterable codebase',
    ],
    techUsed: ['React', 'ant-design', 'LESS/SCSS', 'Node.js', 'GraphQL'],
  },
  {
    id: 'apple-teksystems',
    companyName: 'Apple',
    role: 'Senior Frontend Software Engineer',
    startDate: 'Feb 2023',
    endDate: 'Feb 2024',
    icon: AppleIcon,
    accomplishments: [
      'Led React development of new features in Apple’s Special Project Group’s internal tooling platform',
      'Created scalable, data-intensive, and responsive React web pages to enhance team productivity',
      'Designed, architected and implemented pixel perfect UIs with Less and other CSS preprocessors',
      'Added robust & reusable components to a shared component library for repeated use across multiple apps',
      'Created new APIs leveraging Hasura and accessing them through GraphQL queries',
      'Developed and maintained Node.js backend REST APIs to support frontend features',
      'Collaborated with a team of engineers to develop and maintain an iterable codebase',
    ],
    techUsed: ['React', 'ant-design', 'LESS/SCSS', 'Node.js', 'GraphQL'],
  },
  {
    id: 'reputation',
    companyName: 'Reputation',
    role: 'Senior Frontend Software Engineer',
    startDate: 'Nov 2021',
    endDate: 'Oct 2022',
    icon: ReputationIcon,
    accomplishments: [
      'Led React development of new features to the Social platform, increasing customer reach to their respective users',
      'Worked cross-functionally with Product, Management and QA teams to ship robust features quickly and effectively',
      'Created integrations with various Social platforms (TikTok, Twitter, Google Business Profile, Instagram/Facebook, LinkedIn)',
      'Refactored underlying Front-End infrastructure, making Front-End development easier and quicker',
    ],
    techUsed: ['React', 'Angular', 'HTML', 'CSS'],
  },
  {
    id: 'dolbyIO',
    companyName: 'Dolby.io',
    role: 'Full Stack Software Engineer',
    startDate: 'Aug 2020',
    endDate: 'Oct 2021',
    icon: DolbyIcon,
    accomplishments: [
      'Built new functionality and webpages using React, Redux, CSS-in-JSS (styled-components)',
      'Refactored existing pages to be mobile-friendly and responsive',
      'Created a new microservice to handle 3rd party integrations with our APIs',
    ],
    techUsed: ['React', 'Redux', 'styled-components'],
  },
  {
    id: 'STRATIM_OPENLANE',
    companyName: 'OPENLANE (STRATIM)',
    role: 'Full Stack Software Engineer',
    startDate: 'Jan 2019',
    endDate: 'Mar 2020',
    icon: STRATIMIcon,
    accomplishments: [
      "Created new and optimized existing Java REST endpoints for STRATIM's mobile application",
      "Built new features for STRATIM's iOS application, almost doubling its user base",
      "Investigated, implemented, and lead STRATIM's migration from Vue.js and iOS native to React.js & React Native",
      'Automated the iOS release/deployment process with fastlane',
    ],
    techUsed: ['Java', 'Swift (iOS)', 'React', 'React Native', 'Vue.js'],
  },
  {
    id: 'gliffy',
    companyName: 'Gliffy Inc.',
    role: 'Full Stack Software Engineer',
    startDate: 'Jul 2017',
    endDate: 'Jan 2019',
    icon: GliffyIcon,
    accomplishments: [
      'Partnered with UX/design to create new Ember.js webpages for the Gliffy web app',
      'Created a suite of Node.js microservices, allowing for better scalability and increasing engineering efficiency and output',
    ],
    techUsed: ['Ember.js', 'JavaScript', 'Node.js', 'LESS/SCSS'],
  },
]

export const sideProjects: Array<SideProject> = [
  {
    id: 'personalWebsite',
    projectName: 'Personal Website',
    url: 'https://jonathanpe.com',
    description: 'Personal Website created to practice various skills and display my interests',
    techUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: '5oclock',
    projectName: "It's 5 O'Clock Somewhere",
    url: 'https://its5oclocksomewhere.club',
    description: "App that shows where in the world it's 5:00pm and suggests a beverage to consume based on location",
    techUsed: ['React', 'styled-components', 'MaterialUI'],
  },
]

export const SKILLS: Array<Skill> = [
  {
    id: 'reactjs',
    name: 'React.js',
    level: 3,
    category: 'Frontend',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 3,
    category: 'Frontend',
  },
  {
    id: 'HTML',
    name: 'HTML',
    level: 3,
    category: 'Frontend',
  },
  {
    id: 'CSS',
    name: 'CSS',
    level: 3,
    category: 'Frontend',
  },
  {
    id: 'tailwindCSS',
    name: 'Tailwind CSS',
    level: 2,
    category: 'Frontend',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    level: 2,
    category: 'Backend',
  },
  {
    id: 'java',
    name: 'Java',
    level: 1,
    category: 'Backend',
  },
  {
    id: 'graphQL',
    name: 'GraphQL',
    level: 1,
    category: 'Backend',
  },
]

export const EDUCATION: Array<Education> = [
  {
    id: 'calpolySLO',
    institutionName: 'California Polytechnic State University: San Luis Obispo, CA',
    certificationReceived: 'B.S. Computer Science',
    startDate: 'September 2013',
    endDate: 'June 2017',
  },
]
