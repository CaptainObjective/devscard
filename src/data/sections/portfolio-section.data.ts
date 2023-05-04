import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, website } from '../helpers/links';
import {
  astro,
  css,
  eslint,
  express,
  firebase,
  git,
  html,
  javascript,
  jest,
  mongoDb,
  nestJs,
  nextJs,
  nodeJs,
  prettier,
  react,
  redux,
  sass,
  typescript,
  vite,
  vitest,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'CodersCamp',
      image: 'https://coderscrew.pl/wp-content/uploads/2019/09/logo-coderscamp.png',
      dates: [new Date('2018-09'), null],
      details: [
        { label: 'Team size', value: '10+' },
        { label: 'My role', value: ['Mentor'] },
        { label: 'Organization', value: 'CodersCrew' },
        { label: 'Category', value: ['Programming course'] },
      ],
      pdfDetails: [{ label: 'Demo', value: 'https://www.coderscamp.edu.pl/', url: '#' }],
      description: `
      - Served as a mentor for a free programming course designed for beginners, providing guidance and support to students.
      - Conducted one-on-one and group mentoring sessions, answering questions and helping students to solve problems and complete assignments.
      - Reviewed and provided feedback on student code, helping them to improve code quality and adopt best practices.
      - Developed and led presentations and workshops to supplement course content and help students build a strong foundation in programming.
      - Collaborated with other mentors and course organizers to continuously improve course content and delivery, resulting in increased student engagement and success.`,
      tagsList: {
        title: 'Technologies',
        tags: [
          git(),
          html(),
          css(),
          sass(),
          javascript(),
          typescript(),
          react(),
          redux(),
          nextJs(),
          nodeJs(),
          express(),
          mongoDb(),
          nestJs(),
          eslint(),
          prettier(),
          vite(),
          jest(),
        ],
      },
      links: [website({ url: 'https://www.coderscamp.edu.pl/' })],
    },
    {
      name: 'Blazestore',
      dates: [new Date('2022-10'), new Date('2023-04')],
      details: [
        { label: 'Team size', value: '1' },
        { label: 'My role', value: ['Solo project'] },
        { label: 'Category', value: ['Library'] },
      ],
      pdfDetails: [
        { label: 'Repository', value: 'https://github.com/CaptainObjective/blazestore', url: '#' },
        { label: 'Website', value: 'https://www.npmjs.com/package/blazestore', url: '#' },
      ],
      description: `
      - Type safe Firestore wrapper library. Developed and published on npm to speed up prototyping process with firebase`,
      tagsList: {
        title: 'Technologies',
        tags: [firebase(), typescript(), react(), prettier(), vitest()],
      },
      links: [
        github({ url: 'https://github.com/CaptainObjective/blazestore' }),
        website({ url: 'https://www.npmjs.com/package/blazestore' }),
      ],
    },
    {
      name: 'DevsCard',
      dates: [new Date('2022-10'), new Date('2023-04')],
      details: [
        { label: 'Team size', value: '4' },
        { label: 'My role', value: ['Support'] },
        { label: 'Category', value: ['Tool'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/KonradSzwarc/devscard', url: '#' }],
      description: `
      - Supported the development of a fully customizable template for creating online and paper resumes, providing guidance and advice to other developers working on the project.
      - Contributed to the development of project plans, defined tasks, and estimated completion times to ensure successful project delivery.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [astro(), typescript(), prettier(), eslint()],
      },
      links: [github({ url: 'https://github.com/KonradSzwarc/devscard' })],
    },
    {
      name: 'Hackathon projects:',
      dates: [new Date('2018-09'), null],
      details: [],
      pdfDetails: [],
      description: `
      31.03-01.04 2023 - 6. Bydgoski Hackathon - Winner
      04.06-05.06.2022 - Livechat Hackathon - 3rd Place
      23.04-25.04.2021 - 2MD Hackaton - Winner
      17.03-22.03.2020 - Hack the Crisis: Tech for Good Hackathon - Top 10
      11-12.10.2019 - Divante Hackaton - Winner
      24.05-25.05.2019 - Livechat Hackathon - 3rd Place
      14.09-15.09.2018 - RST Hackathon - Winner
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
