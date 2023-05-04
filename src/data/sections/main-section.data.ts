import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-photo.png'),
  fullName: 'Marcin Woś',
  role: 'Software Developer',
  details: [
    { label: 'Email', value: 'marcin.wos.dev@gmail.com', url: 'mailto:marcin.wos.dev@gmail.com' },
    { label: 'From', value: 'Wrocław, Poland' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '501 389 578' },
    { label: 'Email', value: 'marcin.wos.dev@gmail.com' },
    { label: 'LinkedIn', value: '/in/marcinwos95', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/CaptainObjective', url: 'https://github.com' },
    { label: 'Website', value: 'https://marcinwos.netlify.app', url: '/', fullRow: true },
  ],
  description:
    'Highly motivated and experienced Full Stack Developer with a passion for creating innovative and high-quality software solutions. Possessing strong technical skills in front-end and back-end development, as well as a proven track record of delivering complex projects on time while maintaining high code quality standards. Committed to staying up-to-date with emerging technologies and continuously improving skills to drive business success.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV.pdf',
  },
  links: [
    github({ url: 'https://github.com/CaptainObjective' }),
    linkedin({ url: 'https://www.linkedin.com/in/marcinwos95' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
