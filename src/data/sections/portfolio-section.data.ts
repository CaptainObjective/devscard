import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, mockups, website } from '../helpers/links';
import {
  css,
  eslint,
  express,
  git,
  html,
  javascript,
  jest,
  mongoDb,
  nestJs,
  nextJs,
  nodeJs,
  pnpm,
  prettier,
  react,
  redux,
  sass,
  typescript,
  vite,
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
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
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
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
