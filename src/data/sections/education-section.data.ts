import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: `Finance and Accounting, Bachelor's degree`,
      institution: 'Wrocław University of Economics',
      image: import('@/assets/logos/ue.jpg'),
      dates: [new Date('2014.10'), new Date('2017.06')],
      description: `
      - Member of student organization "Bankier", responsible for
      maintaining website and a Facebook profile of the organization.
      - Conducting VBA training for other students during GrafIT event on
      Wroclaw university of Economics`,
      links: [website({ url: 'https://www.ue.wroc.pl/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
