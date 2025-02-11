import { type Cause, causes } from './index';
import { type Org } from './index';

export const internationalCauses: Org[] = [
  {
    id: 51,
    name: "International Committee of the Red Cross",
    url: 'https://www.icrc.org/en',
    ogImage: "https://www.icrc.org/sites/default/files/styles/meta_image/public/2024-02/About_ICRC.jpg?h=5f62bdfc&itok=lpzshezB",
    cause: ['aid'],
    donate: 'https://www.icrc.org/en/donate',
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/icrc.org'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/icrc'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/icrc'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/ICRC/'
      },
      {
        platform: 'TikTok',
        url: "https://www.tiktok.com/@icrc"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/icrcfilms"
      }
    ],
    
    description: "The ICRC is a neutral, independent organization ensuring humanitarian protection and assistance for people affected by armed conflict and other violence.",
    scope: 'global',
    slug: 'icrc'
  },
]

