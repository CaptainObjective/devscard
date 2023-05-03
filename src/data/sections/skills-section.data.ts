import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  azuredevops,
  chakraUi,
  csharp,
  css,
  docker,
  dotnet,
  eslint,
  express,
  firebase,
  git,
  html,
  javascript,
  jest,
  jira,
  materialUi,
  mongoDb,
  mssql,
  nestJs,
  nextJs,
  nodeJs,
  playwright,
  postgreSql,
  prettier,
  prisma,
  react,
  reactQuery,
  redux,
  sass,
  sitecore,
  svelte,
  tailwindCss,
  teamcity,
  trpc,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },

  skillSets: [
    {
      title: 'Languages',
      skills: [
        javascript({ level: 5 }),
        typescript({ level: 5 }),
        html({ level: 5 }),
        css({ level: 4 }),
        sass({ level: 4 }),
        csharp({ level: 4 }),
      ],
    },
    {
      title: 'Frontend frameworks/libs',
      skills: [
        react({ level: 5 }),
        nextJs({ level: 4 }),
        reactQuery({ level: 4 }),
        redux({ level: 4 }),
        tailwindCss({ level: 4 }),
        materialUi({ level: 3 }),
        chakraUi({ level: 4 }),
        svelte({ level: 4 }),
        astro({ level: 3 }),
      ],
    },
    {
      title: 'Backend frameworks/libs',
      skills: [
        nodeJs({ level: 5 }),
        express({ level: 5 }),
        nestJs({ level: 5 }),
        apolloGraphql({ level: 3 }),
        prisma({ level: 5 }),
        trpc({ level: 4 }),
        dotnet({ level: 4 }),
        sitecore({ level: 4 }),
      ],
    },
    {
      title: 'Databases',
      skills: [firebase({ level: 5 }), mongoDb({ level: 4 }), postgreSql({ level: 3 }), mssql({ level: 3 })],
    },
    {
      title: 'Testing',
      skills: [jest({ level: 5 }), playwright({ level: 4 })],
    },
    {
      title: 'Tools',
      skills: [
        git({ level: 5 }),
        docker({ level: 4 }),
        prettier({ level: 5 }),
        eslint({ level: 4 }),
        teamcity({ level: 3 }),
        azuredevops({ level: 3 }),
        jira({ level: 2 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [
        {
          icon: 'logos:nx',
          name: 'Nx',
          url: 'https://nx.dev/',
        },
      ],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:pl', name: 'Polish - native' },
        { icon: 'circle-flags:uk', name: 'English - C1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
