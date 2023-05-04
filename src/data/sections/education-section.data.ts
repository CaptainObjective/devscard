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
      image:
        'https://th.bing.com/th/id/R.131b9a4d9d67eff6f208ad91f9de6d98?rik=NHu3EAK2aW%2fgOA&riu=http%3a%2f%2fwpweb-prod.rtu.lv%2ffeem%2fwp-content%2fuploads%2fsites%2f64%2f2018%2f10%2fWroc%C5%82aw_University_of_Economics_logo_english-450x450.png&ehk=fZ9%2bdkhYWQCXkzR2roRvnFStcoK5nmMfQNJew9k3xPQ%3d&risl=&pid=ImgRaw&r=0',
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
