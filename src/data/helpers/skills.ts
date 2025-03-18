import createSkillFactory from '@/data/_internals/create-skill-factory';
import { IconName } from '@/types/shared';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo Server',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  icon: 'logos:astro',
  name: 'Astro',
  url: 'https://astro.build/',
});

export const storyblok = createSkillFactory({
  icon: 'simple-icons:storyblok',
  iconColor: '#00B3B0',
  name: 'Storyblok',
  url: 'https://www.storyblok.com/',
});

export const angularJs = createSkillFactory({
  icon: 'simple-icons:angularjs',
  iconColor: '#DD0031',
  name: 'AngularJS',
  url: 'https://angularjs.org/',
});

export const django = createSkillFactory({
  icon: 'simple-icons:django',
  iconColor: '#092E20',
  name: 'Django',
  url: 'https://www.djangoproject.com/',
});

export const chakraUi = createSkillFactory({
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  name: 'Chakra UI',
  url: 'https://chakra-ui.com/',
});

export const eslint = createSkillFactory({
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  name: 'ESLint',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  icon: 'logos:jest',
  name: 'Jest',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  name: 'MongoDB',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  name: 'NestJS',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  icon: 'logos:nextjs-icon',
  name: 'Next.js',
  url: 'https://nextjs.org/',
});

export const nuxtJs = createSkillFactory({
  icon: 'logos:nuxt-icon',
  name: 'Nuxt.js',
  url: 'https://nuxt.com/',
});

export const postgreSql = createSkillFactory({
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  name: 'PostgreSQL',
  url: 'https://www.postgresql.org/',
});

export const html = createSkillFactory({
  icon: 'logos:html-5',
  name: 'HTML5',
  url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
});

export const ruby = createSkillFactory({
  icon: 'logos:ruby',
  name: 'Ruby',
  url: 'https://www.ruby-lang.org/en/',
});

export const rails = createSkillFactory({
  icon: 'logos:rails',
  name: 'Ruby on Rails',
  url: 'https://rubyonrails.org/',
});

export const css = createSkillFactory({
  icon: 'logos:css-3',
  name: 'CSS3',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const prettier = createSkillFactory({
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  name: 'Prettier',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  icon: 'logos:react',
  iconColor: '#61DAFB',
  name: 'React.js',
  url: 'https://reactjs.org/',
});

export const gatsby = createSkillFactory({
  icon: 'logos:gatsby',
  iconColor: '',
  name: 'Gatsby.js',
  url: 'https://www.gatsbyjs.com/',
});

export const svelte = createSkillFactory({
  icon: 'logos:svelte-icon',
  iconColor: '#ff4700',
  name: 'Svelte',
  url: 'https://svelte.dev/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'logos:react-query-icon',
  url: 'https://tanstack.com/query',
});

export const tailwindCss = createSkillFactory({
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  name: 'Tailwind CSS',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  name: 'TypeScript',
  url: 'https://www.typescriptlang.org/',
});

export const javascript = createSkillFactory({
  icon: 'logos:javascript',
  name: 'JavaScript',
  url: 'https://www.javascript.com/',
});

export const storybook = createSkillFactory({
  icon: 'logos:storybook-icon',
  iconColor: '#FF4785',
  name: 'Storybook',
  url: 'https://storybook.js.org/',
});

export const redux = createSkillFactory({
  icon: 'logos:redux',
  name: 'Redux',
  url: 'https://redux.js.org/',
});

export const styledComponents = createSkillFactory({
  icon: 'simple-icons:styledcomponents',
  iconColor: '#DB7093',
  name: 'Styled Components',
  url: 'https://styled-components.com/',
});

export const prisma = createSkillFactory({
  icon: 'logos:prisma',
  name: 'Prisma',
  url: 'https://www.prisma.io/',
});

export const socketio = createSkillFactory({
  icon: 'logos:socket-io',
  name: 'Socket.io',
  url: 'https://socket.io/',
});

export const webSockets = createSkillFactory({
  icon: 'logos:websocket',
  name: 'WebSockets',
  url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
});

export const webRtc = createSkillFactory({
  icon: 'logos:webrtc',
  name: 'WebRTC',
  url: 'https://webrtc.org/',
});

export const materialUi = createSkillFactory({
  icon: 'logos:material-ui',
  name: 'Material UI',
  url: 'https://material-ui.com/',
});

export const i18next = createSkillFactory({
  icon: 'simple-icons:i18next',
  iconColor: '#26A69A',
  name: 'i18next',
  url: 'https://www.i18next.com/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'logos:cypress-icon',
  // iconColor: '#',
  url: 'https://www.cypress.io/',
});

export const playwright = createSkillFactory({
  name: 'Playwright',
  icon: 'logos:playwright',
  url: 'https://playwright.dev/',
});

export const yarn = createSkillFactory({
  name: 'Yarn',
  icon: 'logos:yarn',
  url: 'https://yarnpkg.com/',
});

export const npm = createSkillFactory({
  name: 'npm',
  icon: 'logos:npm-icon',
  url: 'https://www.npmjs.com/',
});

export const nodeJs = createSkillFactory({
  name: 'Node.js',
  icon: 'logos:nodejs-icon',
  url: 'https://nodejs.org/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'logos:docker-icon',
  url: 'https://www.docker.com/',
});

export const graphql = createSkillFactory({
  name: 'GraphQL',
  icon: 'logos:graphql',
  url: 'https://graphql.org/',
});

export const turbo = createSkillFactory({
  icon: 'logos:turborepo-icon',
  name: 'Turbo',
  url: 'https://turbo.build/',
});

export const lerna = createSkillFactory({
  name: 'Lerna',
  icon: 'simple-icons:lerna',
  iconColor: 'white',
  url: 'https://lerna.js.org/',
});

export const csharp = createSkillFactory({
  name: 'C#',
  icon: 'devicon:csharp' as IconName,
});

export const dotnet = createSkillFactory({
  name: '.NET Framework',
  icon: 'logos:dotnet',
});

export const sitecore = createSkillFactory({
  name: 'Sitecore',
  url: 'https://www.sitecore.com/',
});

export const mssql = createSkillFactory({
  name: 'MS SQL',
});

export const git = createSkillFactory({
  name: 'Git',
  icon: 'logos:git',
});

export const teamcity = createSkillFactory({
  name: 'Teamcity',
  icon: 'logos:teamcity',
  url: 'https://www.jetbrains.com/teamcity/',
});

export const azuredevops = createSkillFactory({
  name: 'Azure DevOps',
  icon: 'logos:azure',
  url: 'https://azure.microsoft.com/products/devops',
});

export const jira = createSkillFactory({
  name: 'Jira',
  icon: 'logos:jira',
  url: 'https://www.atlassian.com/pl/software/jira',
});

export const trpc = createSkillFactory({
  icon: 'logos:trpc',
  name: 'Trpc',
  url: 'https://trpc.io/',
});

export const express = createSkillFactory({
  name: 'Express',
  url: 'https://expressjs.com/',
});

export const selenium = createSkillFactory({
  icon: 'logos:selenium',
  name: 'Selenium',
  url: 'https://www.selenium.dev/',
});

export const vitest = createSkillFactory({
  icon: 'logos:vitest',
  name: 'Vitest',
  url: 'https://vitest.dev/',
});

export const vite = createSkillFactory({
  icon: 'logos:vitejs',
  name: 'Vite',
  url: 'https://vitejs.dev/',
});

export const webpack = createSkillFactory({
  icon: 'logos:webpack',
  name: 'Webpack',
  url: 'https://webpack.js.org/',
});

export const jenkins = createSkillFactory({
  icon: 'logos:jenkins',
  name: 'Jenkins',
  url: 'https://www.jenkins.io/',
});

export const gradle = createSkillFactory({
  icon: 'logos:gradle',
  name: 'Gradle',
  url: 'https://gradle.org/',
});

export const bootstrap = createSkillFactory({
  icon: 'logos:bootstrap',
  name: 'Bootstrap',
  url: 'https://getbootstrap.com/',
});

export const jquery = createSkillFactory({
  icon: 'logos:jquery',
  name: 'jquery',
  url: 'https://jquery.com/',
});

export const kubernetes = createSkillFactory({
  name: 'Kubernetes',
  icon: 'logos:kubernetes',
  iconColor: '#326CE5',
  url: 'https://kubernetes.io/',
});

export const terraform = createSkillFactory({
  name: 'Terraform',
  icon: 'logos:terraform',
  iconColor: '#7B42BC',
  url: 'https://www.terraform.io/',
});

export const terraformCdk = createSkillFactory({
  name: 'Terraform CDK',
  icon: 'logos:terraform',
  iconColor: '#7B42BC',
  url: 'https://www.terraform.io/cdks',
});

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'logos:aws',
  iconColor: '#FF9900',
  url: 'https://aws.amazon.com/',
});

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'logos:mysql',
  iconColor: '#4479A1',
  url: 'https://www.mysql.com/',
});

export const grpc = createSkillFactory({
  name: 'gRPC',
  icon: 'logos:grpc',
  iconColor: '#6F4C4B',
  url: 'https://grpc.io/',
});

export const redis = createSkillFactory({
  name: 'Redis',
  icon: 'logos:redis',
  iconColor: '#DC382D',
  url: 'https://redis.io/',
});

export const typeorm = createSkillFactory({
  name: 'TypeORM',
  icon: 'logos:typeorm',
  iconColor: '#F04E23',
  url: 'https://typeorm.io/',
});

export const antdesign = createSkillFactory({
  name: 'Ant Design',
  icon: 'logos:ant-design',
  iconColor: '#0170FE',
  url: 'https://ant.design/',
});

export const drizzle = createSkillFactory({
  name: 'Ant Design',
  icon: 'logos:drizzle',
  url: 'https://orm.drizzle.team/',
});

export const bun = createSkillFactory({
  name: 'Bun',
  icon: 'logos:bun',
  iconColor: '#000000',
  url: 'https://bun.sh/',
});

export const elysia = createSkillFactory({
  name: 'Elysia',
  url: 'https://elysiajs.com/',
});

export const tanstack = createSkillFactory({
  name: 'TanStack',
  icon: 'logos:react-query',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/',
});
