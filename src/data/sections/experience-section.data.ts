import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import {
  azuredevops,
  bootstrap,
  csharp,
  dotnet,
  express,
  gradle,
  javascript,
  jenkins,
  jest,
  jira,
  jquery,
  mssql,
  nestJs,
  nodeJs,
  playwright,
  react,
  redux,
  sass,
  selenium,
  sitecore,
  teamcity,
  typescript,
  vite,
  webpack,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior Software Developer',
      company: 'CDQ',
      image: import('@/assets/logos/cdq.webp'),
      dates: [new Date('2021-09'), null],
      description: `
      - Development and maintenance of Cloud Apps - fullstack application serving as a hub for CDQ's DQaaS solutions.
      - Worked closely with other teams to identify and resolve bugs.
      - Implemented testing processes to ensure software quality.
      - Proposed and led the migration of our backend from bare Express to NestJS.
      - Contributed to the design process of new features.
      - Mentored junior developers on best practices for code quality and development processes.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          typescript(),
          react(),
          redux(),
          sass(),
          bootstrap(),
          nodeJs(),
          express(),
          nestJs(),
          jest(),
          playwright(),
          vite(),
          jenkins(),
          gradle(),
          jira(),
        ],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/cdq-ag/' }), website({ url: 'https://www.cdq.com/' })],
    },
    {
      role: 'Software Engineer',
      company: 'Capgemini',
      image: 'https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1651902188',
      dates: [new Date('2020-03'), new Date('2021-09')],
      description: `
      - Contributed to the development and maintenance of a large-scale health insurance platform.
      - Maintenance of existing code, fixing bugs, covering code with unit, integration and E2E tests
      - Participated in code reviews and provided constructive feedback to improve code quality and maintainability
      - Development of API testing tool build with Typescript and Nest.js
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          csharp(),
          dotnet(),
          sitecore(),
          mssql(),
          sass(),
          bootstrap(),
          webpack(),
          javascript(),
          jquery(),
          jest(),
          selenium(),
          azuredevops(),
          teamcity(),
          typescript(),
          nestJs(),
        ],
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/company/capgemini/' }),
        website({ url: 'https://www.capgemini.com/' }),
      ],
    },
    {
      role: 'Reporting specialist',
      company: 'DXC',
      image:
        'https://dxc.com/content/dam/dxc/projects/dxc-com/us/images/about-us/newsroom/logos-for-media/vertical/DXC%20Logo_Purple+Black%20RGB.png',
      dates: [new Date('2018-09'), new Date('2020-03')],
      description: `
      - Designed and developed web application to enable easy viewing of internal reports for various stakeholders.
      - Preparing reports related to SLA, BC etc. based on various data sources.
      - Automating daily tasks with VBA and AHK
      `,
      tagsList: {
        title: 'Technologies',
        tags: [mssql(), javascript(), react(), redux(), webpack()],
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/company/dxctechnology/' }),
        website({ url: 'https://dxc.com/us/en' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
