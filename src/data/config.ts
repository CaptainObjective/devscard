import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Marcin Woś - Software Developer',
    description:
      'Highly motivated and experienced Full Stack Developer with a passion for creating innovative and high-quality software solutions. Possessing strong technical skills in front-end and back-end development, as well as a proven track record of delivering complex projects on time while maintaining high code quality standards. Committed to staying up-to-date with emerging technologies and continuously improving skills to drive business success.',
    faviconPath: '/src/assets/my-photo.png',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
