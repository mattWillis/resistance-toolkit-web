export enum OrgCategory {
  Accessibility = "accessibility",
  Civil = "civil",
  Climate = "climate",
  Guns = "guns",
  Immigration = "immigration",
  LGBTQ = "lgbtq",
  Reproductive = "reproductive",
  Sexism = "sexism",
  Voting = "voting",
  Wealth = "wealth"
}



export interface Cause {
  id: number;
  title: string;
  slug: string;
  banner: string; 
  emoji: string;
  listImg: string;
  listImgAlt: string;
  books: string;
}

export const causes: Cause[] = [
  {
    id: 1,
    title: 'Disability Rights / Accessibility',
    slug: 'accessibility',
    banner: 'Causes-Accessibility.png',
    emoji: '♿️',
    listImg: '/src/assets/Card-Disability-Img.webp',
    listImgAlt: 'A person in a wheelchair outside in a park',
    books: 'https://www.goodreads.com/list/show/142568.Ability_and_Disability_Introduction_Monthly_List_1'
  },
  {
    id: 2,
    title: 'Civil & Human Rights / Racism',
    slug: 'civil-rights',
    banner: 'Causes-CivilRights.png',
    emoji: '⚖️',
    listImg: '/src/assets/Card-Civil-Img.webp',
    listImgAlt: 'A person in a hijab holding a megaphone in front of a crowd of people with their arms in the air.',
    books: 'https://uncpressblog.com/2021/12/15/universal-human-rights-month-a-recommended-reading-list/'
  },
  {
    id: 3,
    title: 'Climate',
    slug: 'climate',
    banner: 'Causes-Climate.png',
    emoji: '🌡️',
    listImg: '/src/assets/Card-Climate-Img.webp',
    listImgAlt: 'A pair of hands holding an illuminated globe.',
    books: 'https://www.penguinrandomhouse.com/the-read-down/books-to-inspire-care-for-the-earth/'       
  },
  {
    id: 4,
    title: 'Gun Control',
    slug: 'guns',
    banner: 'Causes-Guns.png',
    emoji: '🔫',
    listImg: '/src/assets/Card-Guns-Img.webp',
    listImgAlt: 'Statue of a revolver with the barrel tied into a knot.',
    books: 'https://www.penguinrandomhouse.com/the-read-down/national-gun-violence-awareness-day/'
  },  
  {
    id: 5,
    title: 'Immigration / Refugees',
    slug: 'immigration',
    banner: 'Causes-Immigration.png',
    emoji: '🚶',
    listImg: '/src/assets/Card-Immigration-Img.webp',
    listImgAlt: 'Metal wall extending from the bottom left of the image to the top right. It is creating a scare in the dessert landscape.',
    books: 'https://www.globalrefuge.org/books-about-immigration/'
  },
  {
    id: 6,
    title: 'LGBTQ+',
    slug: 'lgbtq',
    banner: 'Causes-LGBTQ.png',
    emoji: '🏳️‍🌈',
    listImg: '/src/assets/Card-LGBTQ-Img.webp',
    listImgAlt: 'Rainbow flag.',
    books: 'https://glaad.org/tag/books/'
  },
  {
    id: 7,
    title: 'Reproductive Rights',
    slug: 'reproductive',
    banner: 'Causes-Reproductive.png',
    emoji: '♀',
    listImg: '/src/assets/Card-Reproductive-Img.webp',
    listImgAlt: `A crowd of protesters holding signs that read: "Defend Women's and Reproductive Rights".`,
    books: 'https://stanfordpress.typepad.com/blog/2021/09/reproductive-rights-recommended-reading.html'
  },
  {
    id: 8,
    title: 'Sexism / Sexual Violence',
    slug: 'sexism',
    banner: 'Causes-Sexism.png',
    emoji: '💃',
    listImg: '/src/assets/Card-Sexism-Img.webp',
    listImgAlt: 'Silhouette of a woman, her right arm is raised with a clenched fist.',
    books: 'https://www.inclusiongeeks.com/articles/twenty-incredible-books-on-feminism-and-patriarchy-2023-and-2024/'
  },  
  {
    id: 9,
    title: 'Voting Rights',
    slug: 'voting',
    banner: 'Causes-Voting.png',
    emoji: '🗳️',
    listImg: '/src/assets/Card-Voting-Img.webp',
    listImgAlt: `Stickers that read: "I Voted" scattered on a white surface.`,
    books: 'https://socialjusticebooks.org/booklists/voting-rights/'
  },
  {
    id: 10,
    title: 'Wealth Inequality',
    slug: 'wealth',
    banner: 'Causes-Wealth.png',
    emoji: '💰',
    listImg: '/src/assets/Card-Wealth-Img.webp',
    listImgAlt: `Bar graph with a dollar superimposed over it.`,
    books: 'https://inequality.org/our-inequality-work/books/'
  },
  {
    id: 11,
    title: 'Foreign & Domestic Aid',
    slug: 'aid',
    banner: 'Causes-Aid.png',
    emoji: '⛑️',
    listImg: '/src/assets/Card-Aid-Img.webp',
    listImgAlt: `USAID: From the American People.`,
    books: 'https://foreignpolicy.com/2024/07/13/summer-reading-list-book-recommendations-ir-history-fiction-geopolitics/'
  },
  {
    id: 12,
    title: 'Faith',
    slug: 'faith',
    banner: 'Causes-Faith.png',
    emoji: '🙏 🧘‍♀️',
    listImg: '/src/assets/Card-Faith-Img.webp',
    listImgAlt: `Illustration with symbols of various faiths and two hands reaching out to each other over a globe.`,
    books: 'https://www.goodreads.com/shelf/show/interfaith-dialog'
  },
  {
    id: 13,
    title: 'Medicine / Health',
    slug: 'medicine',
    banner: 'Causes-Medicine.png',
    emoji: '⚕️',
    listImg: '/src/assets/Card-Medicine-Img.webp',
    listImgAlt: `A stethoscope, pill packets, and other medical tools scattered on a white surface.`,
    books: 'https://www.penguinrandomhouse.com/the-read-down/books-on-healthcare/'
  },
  {
    id: 14,
    title: 'Science',
    slug: 'science',
    banner: 'Causes-Science.png',
    emoji: '👩‍🔬👨‍🔬',
    listImg: '/src/assets/Card-Science-Img.webp',
    listImgAlt: `Two women looking into microscopes in a black and white photo.`,
    books: 'https://www.goodreads.com/list/show/692.Best_Science_Books_Non_Fiction_Only'
  },
  {
    id: 15,
    title: 'Foreign Policy & Diplomacy',
    slug: 'diplomacy',
    banner: 'Causes-Diplomacy.png',
    emoji: '🌍',
    listImg: '/src/assets/Card-Diplomacy-Img.webp',
    listImgAlt: `Vintage typewriter with "DIPLOMACY" typed on the paper.`,
    books: 'https://www.goodreads.com/list/show/1142.Best_Foreign_Policy_Books'
  },
  {
    id: 15,
    title: 'Democracy',
    slug: 'democracy',
    banner: 'Causes-Diplomacy.png',
    emoji: '🇺🇸',
    listImg: '/src/assets/Card-Democracy-Img.webp',
    listImgAlt: `A young black woman raises her right fist in the air as a large crowd of protesters gather in front of a political building.`,
    books: 'https://www.journalofdemocracy.org/books/'
  },
];

export interface Org {
  id: number;
  name: string;
  url: string;
  cause: string[];
  social?: {platform: string, url: string}[];
  description: string;
  scope: string;
  slug: string;
  donate?: string;
  actions: {action: string, url: string, category?:string}[];
  ogImage?: string;
}

export const orgs: Org[] = [
  {
    id: 1,
    name: "International Association of Accessibility Professionals",
    url: 'https://www.accessibilityassociation.org/s/',
    ogImage: "/Orgs/IAAPBanner.webp",
    cause: ['accessibility'],
    social: [
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/AccessibilityAssociation/"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/international-association-of-accessibility-professionals"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCuL8fMa2LEZm9Agrmkdvsbg"
      }
    ],
    actions: [
      {
        action: "Get a Certification",
        url: "https://www.accessibilityassociation.org/s/certification",
        category: "education"
      },
      {
        action: "Join IAAP",
        url: "https://www.accessibilityassociation.org/s/membership"
      },
      {
        action: "Events",
        url: "https://www.accessibilityassociation.org/s/events-categories"
      },
      {
        action: "Education",
        url: "https://www.accessibilityassociation.org/s/education",
        category: "education"
      }, 
      {
        action: "Resources",
        url: "https://www.accessibilityassociation.org/s/resources/resources-overview"
      }
    ],   
    description: 'A global association of organizations and professionals that have joined together to define, promote, and improve the accessibility of services, products, and environments for people with disabilities. Become part of the Global Accessibility Community.',
    scope: 'global',
    slug: 'iaaap'
  },
  {
    id: 2,
    name: "WebAIM",
    url: 'https://webaim.org/',
    ogImage: "/Orgs/WebAimBanner.webp",
    cause: ['accessibility'],
    social: [
      {
        platform: "Monthly Newsletter",
        url: "https://webaim.org/newsletter/"
      }
    ],
    actions: [
      {
        action: "WAVE - Web Accessibility Evaluation Tool",
        url: "https://wave.webaim.org/"
      },
      {
        action: "Virtual Web Accessibility Training",
        url: "https://webaim.org/training/virtual/",
        category: "education"
      },
      {
        action: "WCAG 2 Checklist",
        url: "https://webaim.org/standards/wcag/checklist"
      }
    ],
    description: 'We have web accessibility in mind. Expanding the potential of the web for people with disabilities by empowering individuals and organizations to create accessible content.',
    scope: 'global',
    slug: 'webaim'
  },
  {
    id: 3,
    name: "Disability Rights Education & Defense Fund",
    url: 'https://dredf.org/',
    ogImage: "/Orgs/DREDFBanner.webp",
    cause: ['accessibility'],
    donate: "https://dredf.org/donate/",
    actions: [
      {
        action: "Events",
        url: "https://dredf.org/events/list/"
      },
      {
        action: "Jobs and Internships",
        url: "https://dredf.org/jobs-and-internships/"
      },
      {
        action: "News Letter",
        url: "https://dredf.org/sign-up/"
      },
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/dredf.bsky.social'
      },
      {
        platform: "Blog",
        url: "https://dredf.org/blog-post/"
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/DREDF.org"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/dredf1979/"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/disability-rights-education-and-defense-fund/"
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@disabilityrights"
      },
      {
        platform: "Vimeo",
        url: "https://vimeo.com/dredf"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@DredfOrg"
      }
    ],
    description: 'We envision a just world where all people, with and without disabilities, live full and independent lives free of discrimination. Disability Rights Education and Defense Fund (DREDF), founded in 1979, is a leading national civil rights law and policy center directed by individuals with disabilities and parents who have children with disabilities.',
    scope: 'us',
    slug: 'dredf'
  },
  {
    id: 4,
    name: "American Association of People with Disabilities",
    url: 'https://www.aapd.com/',
    ogImage: "/Orgs/AAPDBanner.webp",
    cause: ['accessibility'],
    donate: "https://aapd.kindful.com/",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/aapd-disability.bsky.social'
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/DisabilityPowered/"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/aapdofficial"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/american-association-of-people-with-disabilities"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/user/AAPDvideo"
      },
      {
        platform: "Blog",
        url: "https://www.aapd.com/blog/"
      }
    ],
    actions: [
      {
        action: "Events",
        url: "https://www.aapd.com/events/"
      }
    ],
    description: 'The American Association of People with Disabilities works to increase the political and economic power of people with disabilities. As a national disability-led and cross-disability rights organization, AAPD advocates for full civil rights for over 70 million Americans with disabilities.',
    scope: 'us',
    slug: 'aapd'
  },
  {
    id: 5,
    name: "ADA National Network",
    url: 'https://adata.org/',
    ogImage: "https://adata.org/sites/adata.org/files/Banner_ada_logo.png",
    cause: ['accessibility'],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/adata.org'
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/adanetwork?_rdr"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/ada-national-network/"
      }
    ],
    actions: [
      {
        action: "Events",
        url: "https://adata.org/events-calendar/upcoming"
      },
      {
        action: "ADA Training",
        url: "https://adata.org/ada-training",
        category: "education"
      },
      {
        action: "Find Your ADA Center",
        url: "https://adata.org/find-your-region"
      },
      {
        action: "Media Kit",
        url: "https://adata.org/media-kit"
      }
    ],
    description: 'The ADA National Network provides information, guidance and training on how to implement the Americans with Disabilities Act (ADA) in order to support the mission of the ADA to “assure equality of opportunity, full participation, independent living, and economic self-sufficiency for individuals with disabilities.',
    scope: 'us',
    slug: 'adata'
  },  
  {
    id: 6,
    name: "Amnesty International",
    url: 'https://www.amnesty.org/',
    ogImage: "https://www.amnesty.org/en/wp-content/uploads/2019/12/whoweare_2944x1224_header.jpg",
    cause: ['civil-rights'],
    donate: "https://www.amnesty.org/en/donate/",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/did:plc:2i2ayysyi5ejqdzon2a6rais'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/amnesty'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/amnesty'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@amnesty'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/AmnestyInternational'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/amnesty-international/'
      },
    ],
    actions: [
      {
        action: "Get Involved",
        url: "https://www.amnesty.org/en/get-involved/"
      },
      {
        action: "Take Action - Sign a Petition",
        url: "https://www.amnesty.org/en/get-involved/take-action/"
      },
      {
        action: "What We Do - Campaigns",
        url: "https://www.amnesty.org/en/what-we-do/"
      },
      {
        action: "Free Online Course",
        url: "https://www.amnesty.org/en/get-involved/online-courses/",
        category: "education"
      },
      {
        action: "Human Rights Education",
        url: "https://www.amnesty.org/en/human-rights-education/",
        category: "education"
      },
      {
        action: "Become a Member",
        url: "https://www.amnesty.org/en/get-involved/join/"
      }
    ],
    description: 'Through our detailed research and determined campaigning, we help fight abuses of human rights worldwide. We bring torturers to justice. Change oppressive laws. And free people jailed just for voicing their opinion.',
    scope: 'global',
    slug: 'amnesty'
  },
  {
    id: 6,
    name: "ACLU",
    url: 'https://www.aclu.org/',
    ogImage: "https://www.aclu.org/wp-content/themes/aclu-wp/img/default_fb_share.jpg",
    cause: ['civil-rights', 'immigration', 'lgbtq', 'reproductive', 'sexism', 'voting', 'accessibility'],
    donate: "https://action.aclu.org/give/now/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/did:plc:bg5vuqejktlwjgcdsm3jyv73'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/aclu'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/aclu'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/aclu_nationwide/'
      },
      {
        platform: 'TiKTok',
        url: 'https://www.tiktok.com/@aclu'
      },
    ],
    actions: [
      {
        action: "Take Action - Sign a Petition",
        url: "https://www.aclu.org/action/?utm_source=resistance-toolkit" 
      },
      {
        action: "Campaigns & Initiatives",
        url: "https://www.aclu.org/campaigns-initiatives/?utm_source=resistance-toolkit"
      },
      {
        action: "Shop",
        url: "https://shop.aclu.org/?utm_source=resistance-toolkit/",
        category: "money"
      },
      {
        action: "Know Your Rights",
        url: "https://www.aclu.org/know-your-rights/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Research & Publications",
        url: "https://www.aclu.org/publications/?utm_source=resistance-toolkit"
      },
      {
        action: "Careers & Internships",
        url: "https://www.aclu.org/careers/?utm_source=resistance-toolkit"
      }
    ],
    description: 'With immigrant rights, trans justice, reproductive freedom, and more at risk, we’re in courts and communities across the country to protect everyone’s rights — and we need you with us.',
    scope: 'us',
    slug: 'aclu'
  },
  {
    id: 6,
    name: "Equal Justice Initiative",
    url: 'https://eji.org/',
    ogImage: "https://eji.org/wp-content/uploads/2019/11/eji-home-support1.jpg",
    cause: ['civil-rights'],
    donate: "https://eji.org/ways-to-give/",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/did:plc:3uqcrs5wxdb6c6kjmlr534ep'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/equaljusticeinitiative'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/eji_org/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/ejiorg'
      },
    ],
    actions: [
      {
        action: "Get Involved",
        url: "https://eji.org/get-involved/"
      },
      {
        action: "Host an Educational Event",
        url: "https://eji.org/host-an-educational-event/",
        category: "education"
      },
      {
        action: "Visit a Legacy Site",
        url: "https://legacysites.eji.org/",
        category: "education"
      },
      {
        action: "Employment Opportunities",
        url: "https://eji.org/employment/"
      },
    ],
    description: 'The Equal Justice Initiative is committed to ending mass incarceration and excessive punishment in the United States, to challenging racial and economic injustice, and to protecting basic human rights for the most vulnerable people in American society.',
    scope: 'us',
    slug: 'eji'
  },
  {
    id: 7,
    name: "Southern Poverty Law Center",
    url: 'https://www.splcenter.org/',
    ogImage: "https://res.cloudinary.com/splc/images/f_auto,q_auto/v1736542788/splc-logo_twitter_instream/splc-logo_twitter_instream.png?_i=AA",
    cause: ['civil-rights', 'wealth'],
    donate: "https://secure.splcenter.org/page/72074/donate/1/",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/did:plc:w4f6uyyiucht2wi6p74pzxti'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/SPLCenter'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/splcenter'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/@SPLCenter'
      },
    ],
    actions: [
      {
        action: "Toolkits, Guides, and How-Tos",
        url: "https://www.splcenter.org/resources/guides/",
      },
      {
        action: "Report Hate",
        url: "https://www.splcenter.org/reporthate/"
      },
      {
        action: "Hope Watch",
        url: "https://www.splcenter.org/resources/hope-watch/"
      },
      {
        action: "Resources",
        url: "https://www.splcenter.org/resources/"
      },
      {
        action: "Reports",
        url: "https://www.splcenter.org/resources/reports/",
        category: "education"
      },
      {
        action: "Stories",
        url: "https://www.splcenter.org/resources/stories/",
        category: "education"
      },
      {
        action: "Policy Advocacy",
        url: "https://www.splcenter.org/policy-advocacy/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    description: 'The Equal Justice Initiative is committed to ending mass incarceration and excessive punishment in the United States, to challenging racial and economic injustice, and to protecting basic human rights for the most vulnerable people in American society.',
    scope: 'us',
    slug: 'splc'
  },
  {
    id: 8,
    name: "NAACP",
    url: 'https://www.naacp.org/',
    ogImage: "https://naacp.org/themes/custom/naacp/assets/images/og-image-naacp.jpg",
    cause: ['civil-rights'],
    donate: "https://naacp.org/donate",
    social: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/naacp"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/naacp"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/user/naacpvideos/videos"
      },
    ],
    actions: [
      {
        action: "Take Action",
        url: "https://naacp.org/take-action"
      },
      {
        action: "Black Consumer Advisory - Hold Businesses Accountable",
        url: "https://naacp.org/campaigns/black-consumer-advisory"
      }, 
      {
        action: "Join the NAACP",
        url: "https://naacp.org/take-action/become-member"
      },
      {
        action: "Know Your Rights",
        url: "https://naacp.org/find-resources/know-your-rights",
        category: "education"
      },
      {
        action: "Voter Guides",
        url: "https://naacp.org/resources/library?_page=1&keywords=&_limit=12&topic=151",
        category: "vote"
      },
      {
        action: "Find Resources",
        url: "https://naacp.org/find-resources",
        category: "education"
      },
    ],
    description: 'We envision an inclusive community rooted in liberation where all persons can exercise their civil and human rights without discrimination. We are committed to a world without racism where Black people enjoy equitable opportunities in thriving communities.',
    scope: 'us',
    slug: 'naacp'
  },
  {
    id: 9,
    name: "Native American Rights Fund",
    url: 'https://narf.org/',
    ogImage: "https://narf.org/wordpress/wp-content/uploads/2014/12/about_us-e1662073570178.jpg",
    cause: ['civil-rights'],
    donate: "https://secure.narf.org/page/64457/donate/1",
    social: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/NativeAmericanRightsFund/"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/nativeamericanrightsfund/"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/c/NativeAmericanRightsFund"
      },
      {
        platform: "Facebook",
        url: "https://www.linkedin.com/company/nativeamericanrightsfund/"
      },
    ],
    actions: [
      {
        action: "Our Work",
        url: "https://narf.org/our-work/"
      }
    ],
    description: 'The Native American Rights Fund holds governments accountable. We fight to protect Native American rights, resources, and lifeways through litigation, legal advocacy, and legal expertise. Providing legal assistance to Native American tribes, organizations, and individuals nationwide.',
    scope: 'us',
    slug: 'narf'
  },
  {
    id: 10,
    name: "National Congress of American Indians",
    url: 'https://www.ncai.org/',
    ogImage: "https://cdn.sanity.io/images/raa5sn1v/production/0cf9d395acb40d7313930b61a72e419758dc9266-1200x630.png?w=1280&amp;q=80&amp;auto=format",
    cause: ['civil-rights'],
    donate: "https://give.ncai.org/campaign/633783/donate",
    social: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/ncai1944"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/ncai1944/"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/national-congress-of-american-indians/posts"
      },
    ],
    actions: [
      {
        action: "Resource Library",
        url: "https://ncai.assetbank-server.com/assetbank-ncai/action/browseItems?categoryId=-1&categoryTypeId=2",
        category: "education"
      },
      {
        action: "Events",
        url: "https://www.ncai.org/events"
      },
      {
        action: "NCAI Foundation",
        url: "https://www.ncai.org/ncai-foundation"
      }
    ],
    description: 'NCAI, a non-profit organization, advocates for a bright future for generations to come by taking the lead to gain consensus on a constructive and promising vision for Indian Country.',
    scope: 'us',
    slug: 'ncai'
  },
  {
    id: 11,
    name: "Innocence Project",
    url: 'https://innocenceproject.org/',
    ogImage: "https://innocenceproject.org/wp-content/uploads/2023/05/VanDyke_Counts_Exoneration-79-cropped-jpg.webp",
    cause: ['civil-rights'],
    donate: "https://innocenceproject.org/donate/",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/innocenceproject.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/innocenceproject/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/innocenceproject/'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@innocence'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/innocenceproject'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/innocence-project'
      },
    ],
    actions: [
      {
        action: "Sign Petitions",
        url: "https://innocenceproject.org/sign-petitions/"
      },
      {
        action: "Resources and Actions",
        url: "https://innocenceproject.org/take-action/"
      },
      {
        action: "Volunteer with Innocence Project",
        url: "https://innocenceproject.org/volunteer/",
        category: "volunteer"
      }
    ],
    description: 'Founded in 1992 by visionary attorneys Peter Neufeld and Barry Scheck, the Innocence Project has been at the forefront of criminal justice reform, using DNA and other scientific advancements to prove wrongful conviction.',
    scope: 'us',
    slug: 'innocence-project'
  },
  {
    id: 12,
    name: "Climate Action Network",
    url: 'https://climatenetwork.org/',
    ogImage: "https://climatenetwork.org/wp-content/uploads/2020/09/36811390855_c4b727efed_5k-scaled.jpg",
    cause: ['climate'],
    donate: "https://climatenetwork.org/get-involved/support/",
    social: [
      // {
      //   platform: 'BlueSky',
      //   url: 'https://bsky.app/profile/caneurope.bsky.social'
      // },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/caninternational'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/can.international/'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/24790444'
      },
    ],
    actions: [
      {
        action: "Publications",
        url: "https://climatenetwork.org/resource_type/publications/",
        category: "education"
      },
      {
        action: "Stay Informed",
        url: "https://climatenetwork.org/get-involved/stay-informed/"
      },
      {
        action: "Join CAN",
        url: "https://climatenetwork.org/overview/members/"
      },
      {
        action: "Campaigns",
        url: "https://climatenetwork.org/resource_type/campaigns/"
      }
    ],
    description: 'Climate Action Network (CAN) is the world’s largest climate network made up of more than 1,900 civil society organisations in over 130 countries, together fighting the climate crisis.',
    scope: 'global',
    slug: 'can'
  },
  {
    id: 13,
    name: "Climate Science Legal Defense Fund",
    url: 'https://climatesciencedefensefund.org/',
    ogImage: "https://www.csldf.org/wp-content/uploads/2023/10/CSLDF-Impact-Report-Graphic-lg-1.png",
    cause: ['climate'],
    donate: "https://www.csldf.org/donate/",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/csldf.org'
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/climate-science-legal-defense-fund"
      },
      {
        platform: "Vimeo",
        url: "https://vimeo.com/csldf"
      },
    ],
    actions: [
      {
        action: "Resources - Toolkits",
        url: "https://www.csldf.org/resources/"
      }
    ],
    description: 'Our work ensures that scientists can conduct, publish, and discuss their research and advocate for science without the threat of political harassment, censorship, or legal intimidation.',
    scope: 'us',
    slug: 'csldf'
  },
  {
    id: 14,
    name: "Citizens' Climate Lobby",
    url: 'https://citizensclimatelobby.org/',
    ogImage: "https://citizensclimatelobby.org/wp-content/uploads/2021/12/CCL_Jun2019_Tuesday_315-scaled.jpg",
    cause: ['climate'],
    donate: "https://citizensclimatelobby.org/donate/",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/cclusa.org'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/CitizensClimateLobby/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/c/CitizensClimateLobby'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/citizens-climate-lobby/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/citizensclimate'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@citizensclimate'
      },
      {
        platform: 'SoundCloud',
        url: 'https://soundcloud.com/citizensclimateradio'
      },
    ],
    actions: [
      {
        action: "Current Actions",
        url: "https://citizensclimatelobby.org/get-loud-take-action/"
      },
      {
        action: "Volunteer with Citizens' Climate Lobby",
        url: "https://community.citizensclimate.org/new-volunteer",
        category: "volunteer"
      },
      {
        action: "CCL Online Community",
        url: "https://community.citizensclimate.org/home"
      },
      {
        action: "Join CCL",
        url: "https://citizensclimatelobby.org/join-citizens-climate-lobby/"
      },
      {
        action: "Blog",
        url: "https://citizensclimatelobby.org/blog/",
        category: "education"
      },
      {
        action: "Podcast",
        url: "https://citizensclimatelobby.org/blog/category/podcast/",
        category: "education"
      }
    ],
    description: 'Citizens’ Climate Lobby (CCL) is a nonprofit, nonpartisan, grassroots advocacy climate change organization focused on national policies to address the national and global climate crisis. Consistently respectful, nonpartisan approach to climate education.',
    scope: 'us',
    slug: 'ccl'
  },
  {
    id: 15,
    name: "Everytown for Gun Safety",
    url: 'https://everytown.org/',
    ogImage: "https://www.everytown.org/wp-content/uploads/2020/06/et-default-share.png",
    cause: ['guns'],
    donate: "https://secure.actblue.com/donate/everytown-web-2025?source=etno_nav_onetime&refcode=etno_nav_onetime&_gl=1*1ob5331*_ga*NDM3MDM5NjY1LjE3Mzc4MzQ3NDI.*_ga_68QYBV181T*MTczODc2Nzc5NC4zLjAuMTczODc2Nzc5NC4wLjAuMA..",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/everytown.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/Everytown'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/everytown/'
      },
      {
        platform: 'Blog',
        url: "https://www.everytown.org/blog/"
      }
    ],
    actions: [
      {
        action: "Take Action",
        url: "https://www.everytown.org/actions/"
      },
      {
        action: "Our Work",
        url: "https://www.everytown.org/work/"
      },
      {
        action: "Stay Informed: What are the issues?",
        url: "https://www.everytown.org/issues/"
      },
      {
        action: "Our Solutions",
        url: "https://www.everytown.org/solutions/"
      },
      {
        action: "Join Gun Sense Majority Council",
        url: "https://www.everytown.org/gun-sense-majority-council/",
        category: "donate"
      },
      {
        action: "Stay Informed: News",
        url: "https://www.everytown.org/news/",        
      },
      {
        action: "Your State (Found on the Homepage)",
        url: "https://everytownresearch.org/",
        category: "education"
      },
      {
        action: "Everytown Labs",
        url: "https://everytownresearch.org/labs/",
        category: "education"
      },
      {
        action: "Store",
        url: "https://store.everytown.org/",
        category: "money"
      }
    ],
    description: "We’re the largest gun violence prevention organization in America—and we’re winning. Everytown starts with you, and it starts in your neighborhood. By introducing evidence-based solutions in every town, we can end gun violence.",
    scope: 'us',
    slug: 'everytown'
  },
  {
    id: 16,
    name: "Sandy Hook Promise",
    url: 'https://www.sandyhookpromise.org/',
    ogImage: "https://www.sandyhookpromise.org/wp-content/uploads/2020/07/fb_share.webp",
    cause: ['guns'],
    donate: "https://takeaction.sandyhookpromise.org/a/foundation?amtOpts=25,50,100,250,500,1000",
    social: [
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/SandyHookPromise/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/sandyhookpromise'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/c/sandyhookpromiseorganization'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/sandy-hook-promise/'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@sandyhookpromise'
      },
      {
        platform: "Blog",
        url: "https://www.sandyhookpromise.org/get-info/blog/"
      }
    ],
    actions: [
      {
        action: "Get Involved",
        url: "https://www.sandyhookpromise.org/take-action/get-involved/"
      },
      {
        action: "Volunteer with Sandy Hook Promise",
        url: "https://www.sandyhookpromise.org/take-action/volunteer/",
        category: "volunteer"
      },
      {
        action: "Make the Promise",
        url: "https://www.sandyhookpromise.org/take-action/promise/"
      },
      {
        action: "Advocate for Policy",
        url: "https://actionfund.sandyhookpromise.org/"
      },
      {
        action: "Get the Facts",
        url: "https://www.sandyhookpromise.org/blog/gun-violence/facts-about-gun-violence-and-school-shootings/",
        category: "education"
      },
      {
        action: "Stay Informed: Newsroom",
        url: "https://www.sandyhookpromise.org/newsroom/"
      }
    ],
    description: 'Sandy Hook Promise is a national nonprofit organization founded and led by several family members whose loved ones were killed at Sandy Hook Elementary School. Our intent is to honor all victims of gun violence by turning our tragedy into a moment of transformation. Text `PROMISE` to 79775',
    scope: 'us',
    slug: 'sandy-hook'
  },
  {
    id: 17,
    name: "Giffords",
    url: 'https://giffords.org/',
    ogImage: "https://files.giffords.org/wp-content/uploads/2020/09/20.09-SOC-Generic-Link-Preview-Color.jpg?strip=all&lossy=1&ssl=1",
    cause: ['guns'],
    donate: "https://secure.actblue.com/donate/giffords-website?refcode=site_top_nav",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/giffords.org'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/GIFFORDS/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/giffords_org/'
      },
    ],
    actions: [
      {
        action: "Take Action - Get Involved",
        url: "https://giffords.org/take-action/"
      },
      {
        action: "Join the GIFFORDS Action Network",
        url: "https://go.giffords.org/signup/action-network-signup/"
      },
      {
        action: "Join Gun Owners for Safety",
        url: "https://giffords.org/action/gun-owners-for-safety/"
      },
      {
        action: "Resources",
        url: "https://giffords.org/lawcenter/resources/",
        category: "education"
      },
      {
        action: "Courage Fellows",
        url: "https://giffords.org/action/courage-fellows/",
        category: "volunteer"
      },
    ],
    description: 'Giffords is an organization dedicated to saving lives from gun violence. Led by former Congresswoman Gabrielle Giffords, we inspire the courage of people from all walks of life to make America safer. Giffords is fighting to end the gun lobby’s stranglehold on our political system.',
    scope: 'us',
    slug: 'giffords'
  },
  {
    id: 18,
    name: "Americans for Immigrant Justice",
    url: 'https://aijustice.org/',
    ogImage: "https://aijustice.org/wp-content/uploads/2020/06/ai-justice-banner.jpg",
    cause: ['immigration'],
    donate: "https://aijustice.org/donate/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/aijustice.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/AIJustice.org/'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/americans-for-immigrant-justice/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/FIAConline'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/americansforimmigrantjustice/'
      },
      {
        platform: 'Mailing List',
        url: 'https://aijustice.org/get-involved/stay-informed/'
      }
    ],
    actions: [
      {
        action: "Volunteer with American's for Immigrant Justice",
        url: "https://aijustice.org/volunteer/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Events",
        url: "https://aijustice.org/events/?utm_source=resistance-toolkit"
      },
      {
        action: "Advocacy",
        url: "https://aijustice.org/advocacy/?utm_source=resistance-toolkit"
      },
      {
        action: "SB 1718 Resources",
        url: "https://aijustice.org/sb-1718-resources/?utm_source=resistance-toolkit"
      }
    ],
    description: 'Americans for Immigrant Justice (AI Justice) is an award-winning non-profit law firm that fights for justice for immigrants through a combination of direct representation, impact litigation, advocacy and outreach.',
    scope: 'us',
    slug: 'aijustice'
  },
  {
    id: 19,
    name: "American Immigration Council",
    url: 'https://www.americanimmigrationcouncil.org/?utm_source=resistance-toolkit',
    ogImage: "https://www.americanimmigrationcouncil.org/sites/default/files/americanimmigrationcouncil.jpg",
    cause: ['immigration'],
    donate: "https://www.americanimmigrationcouncil.org/donate",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/immcouncil.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/TheAmericanImmigrationCouncil'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/immcouncil'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/american-immigration-council'
      },
      {
        platform: "Immigration Impact",
        url: "https://immigrationimpact.com/"
      }
    ],
    actions: [
      {
        action: "Get Involved",
        url: "https://www.americanimmigrationcouncil.org/get-involved/?utm_source=resistance-toolkit"
      },
      {
        action: "Immigration Impact: Exclusively committed to covering immigration issues.",
        url: "https://immigrationimpact.com/?utm_source=resistance-toolkit",
        category: "education"
      },
    ],
    description: 'The Council strives to strengthen the United States by shaping immigration policies and practices through innovative programs, cutting-edge research, and strategic legal and advocacy efforts grounded in evidence, compassion, justice and fairness.',
    scope: 'us',
    slug: 'americanimmigrationcouncil'
  },
  {
    id: 20,
    name: "Young Center for Immigrant Children's Rights",
    url: 'https://www.theyoungcenter.org/',
    ogImage: "http://static1.squarespace.com/static/597ab5f3bebafb0a625aaf45/t/5f763676b29ca936f6cabbd1/1601582716196/Young-Center-Hero-Image-Website.png?format=1500w",
    cause: ['immigration'],
    donate: "https://www.theyoungcenter.org/donate/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/theyoungcenter.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/TheYoungCenter/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/theyoungcenter/'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@theyoungcenter'
      }
    ],
    actions: [
      {
        action: "How to Help",
        url: "https://www.theyoungcenter.org/how-to-help-immigrant-children/?utm_source=resistance-toolkit"
      },
      {
        action: "Volunteer with Young Center",
        url: "https://www.theyoungcenter.org/volunteer-at-the-young-center/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Become a Young Center Ambassador",
        url: "https://www.theyoungcenter.org/ambassadors/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Refer a Child",
        url: "https://www.theyoungcenter.org/refer-a-child/?utm_source=resistance-toolkit"
      },
      {
        action: "Events",
        url: "https://www.theyoungcenter.org/events/?utm_source=resistance-toolkit"
      }
    ],
    description: 'The Young Center is a champion for the rights and best interests of unaccompanied immigrant children, making sure that wherever they land, whether here in the U.S. or in their home country, they are safe.',
    scope: 'us',
    slug: 'theyoungcenter'
  },  
  {
    id: 21,
    name: "GLAAD",
    url: 'https://www.glaad.org',
    ogImage: "https://media.glaad.org/wp-content/uploads/2022/11/20110804/Glaad_Cyan.png",
    cause: ['lgbtq'],
    donate: "https://give.glaad.org/page/76113/donate/1/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/glaad.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/GLAAD/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/glaad'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/glaad'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@glaad'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/glaad/'
      },
    ],
    actions: [
      {
        action: "Volunteer with GLAAD",
        url: "https://act.glaad.org/page/77842/survey/1/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Events",
        url: "https://glaad.org/events/?utm_source=resistance-toolkit"
      },
      {
        action: "Ways to Give",
        url: "https://glaad.org/ways-to-support-glaad/?utm_source=resistance-toolkit",
        category: "donate"
      },
      {
        action: "Mailing List",
        url: "https://act.glaad.org/page/52123/subscribe/1/?utm_source=resistance-toolkit"
      },
      {
        action: "Research",
        url: "https://glaad.org/research/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    description: 'Founded in 1985, GLAAD is a non-profit organization focused on LGBTQ advocacy and cultural change. GLAAD works to ensure fair, accurate, and inclusive representation and creates national and local programs that advance LGBTQ acceptance.',
    scope: 'global',
    slug: 'glaad'
  },
  {
    id: 22,
    name: "Sylvia Rivera Law Project",
    url: 'https://srlp.org/',
    ogImage: "/Orgs/SRLPBanner.webp",
    cause: ['lgbtq'],
    donate: "https://srlp.org/donate/?utm_source=resistance-toolkit",
    social: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/SylviaRiveraLawProject/"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/user/SylviaRiveraLP"
      },
      {
        platform: "Flickr",
        url: "https://www.flickr.com/photos/sylviariveralawproject/"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/sylviariveralawproject/"
      },
      {
        platform: "Email List",
        url: "https://srlp.org/srlp/?page=CiviCRM&q=civicrm/profile/create&gid=23&reset=1"
      }
    ],
    actions: [
      {
        action: "Volunteer with SRLP",
        url: "https://srlp.org/get-involved/volunteer/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Events",
        url: "https://srlp.org/calendar/?utm_source=resistance-toolkit"
      },
      {
        action: "Campaigns",
        url: "https://srlp.org/action/?utm_source=resistance-toolkit"
      },
      {
        action: "Trainings",
        url: "https://srlp.org/trainings/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Become a Member",
        url: "https://srlp.org/get-involved/become-a-member/?utm_source=resistance-toolkit"
      },
    ],
    description: 'Sylvia Rivera Law Project (SRLP) works to guarantee that all people are free to self-determine their gender identity and expression, regardless of income or race, and without facing harassment, discrimination, or violence. SRLP is a collective organization founded on the understanding that gender self-determination is inextricably intertwined with racial, social and economic justice.',
    scope: 'us',
    slug: 'srlp'
  },
  {
    id: 23,
    name: "Elevated Access",
    url: 'https://www.elevatedaccess.org/',
    ogImage: "http://static1.squarespace.com/static/6467d799146f502ed383205b/t/647623878025042d20f6358e/1685463943262/Primary+Logo.png?format=1500w",
    cause: ['lgbtq'],
    donate: "https://www.elevatedaccess.org/donate/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/elevatedaccess.bsky.social'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@ElevatedAccess'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/elevatedaccess'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/elevatedaxs/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/@elevatedaccess'
      },
    ],
    actions: [
      {
        action: "Ways to Help",
        url: "https://www.elevatedaccess.org/get-involved/ways-to-help/?utm_source=resistance-toolkit"
      },
      {
        action: "Get Involved: Pilots",
        url: "https://www.elevatedaccess.org/get-involved/pilots/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Volunteer with Elevated Access",
        url: "https://www.elevatedaccess.org/contact/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Get Help",
        url: "https://www.elevatedaccess.org/get-help/?utm_source=resistance-toolkit"
      },
      {
        action: "Shop",
        url: "https://www.elevatedaccess.org/shop/?utm_source=resistance-toolkit",
        category: "money"
      }
    ],
    description: 'We are a non-profit organization that enables people to access healthcare by providing flights on private planes at no cost. Our volunteer pilot network transports clients seeking abortion or gender-affirming care across the United States.',
    scope: 'us',
    slug: 'elevatedaccess'
  },
  {
    id: 24,
    name: "Lambda Legal",
    url: 'https://www.lambdalegal.org',
    ogImage: "https://lambdalegal.org/wp-content/uploads/2023/03/LL-META.png",
    cause: ['lgbtq'],
    donate: "https://lambdalegal.org/ways-to-give/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/lambdalegal.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/lambdalegal'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/lambdalegal/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/lambdalegal'
      }
    ],
    actions: [
      {
        action: "Events",
        url: "https://lambdalegal.org/events/?utm_source=resistance-toolkit"
      },
      {
        action: "Peer-to-Peer Fundraising",
        url: "https://lambdalegal.org/fundraise/?utm_source=resistance-toolkit",
        category: "donate"
      },
      {
        action: "Become a Sponsor", 
        url: "https://lambdalegal.org/national-sponsorships/?utm_source=resistance-toolkit",
      },
      {
        action: "Ways to Give",
        url: "https://lambdalegal.org/ways-to-give/?utm_source=resistance-toolkit",
        category: "donate"
      }
    ],
    description: 'Lambda Legal’s lawyers have won precedent-setting civil rights cases on everything from marriage equality to expressions of gender identity to health care discrimination. We never charge our clients for legal representation or advocacy, nor do we receive any government funding.',
    scope: 'us',
    slug: 'lambdalegal'
  },
  {
    id: 25,
    name: "Planned Parenthood",
    url: 'https://www.plannedparenthood.org/',
    ogImage: "https://www.plannedparenthood.org/uploads/filer_public_thumbnails/filer_public/b9/ed/b9eddaf2-608a-4935-8c70-fc98afd54562/find-health-center.jpg__1200x1200_q65_subsampling-2.jpg",
    cause: ['reproductive', 'medicine'],
    donate: "https://www.plannedparenthood.org/get-involved/other-ways-give/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/ppfa.org'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/plannedparenthood/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/plannedparenthood/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/plannedparenthood'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@plannedparenthood'
      },
    ],
    actions: [
      {
        action: "Get Involved",
        url: "https://www.plannedparenthood.org/get-involved/?utm_source=resistance-toolkit"
      },
      {
        action: "Volunteer with Planned Parenthood",
        url: "https://www.weareplannedparenthood.org/pGPUfPzxL0-W-oG8DCQ24w2/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Get Care",
        url: "https://www.plannedparenthood.org/get-care"
      },
      {
        action: "Get the Facts",
        url: "https://www.plannedparenthood.org/learn/?utm_source=resistance-toolkit",        
      },
      {
        action: "Get the Facts",
        url: "https://www.plannedparenthood.org/learn/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Jobs and Volunteering",
        url: "https://www.plannedparenthood.org/get-involved/jobs-and-volunteering/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Shop",
        url: "https://marketplace.plannedparenthood.org/?utm_source=resistance-toolkit",
        category: "money"
      }

    ],
    description: 'America’s Most Trusted Name in Sexual Health. Planned Parenthood is the nation’s leading provider and advocate of high-quality, affordable sexual and reproductive health care for all people, as well as the nation’s largest provider of sex education.',
    scope: 'us',
    slug: 'plannedparenthood'
  },
  {
    id: 25,
    name: "EMILY's List",
    url: 'https://emilyslist.org/',
    ogImage: "https://emilyslist.org/wp-content/uploads/2023/02/eml-social-share.jpg",
    cause: ['reproductive', 'sexism'],
    donate: "https://secure.actblue.com/donate/donate-to-emilys-list/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/emilyslist.bsky.social'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/emilys_list/'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/emilyslist'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/emilyslist'
      },
    ],
    actions: [
      {
        action: "Support Federal and Gubernatorial Candidates",
        url: "https://emilyslist.org/donate/all-candidates-2025/?utm_source=resistance-toolkit"
      },
      {
        action: "Support State and Local Candidates",
        url: "https://emilyslist.org/state-and-local-candidates/?utm_source=resistance-toolkit"
      },
      {
        action: "Events",
        url: "https://emilyslist.org/events/?utm_source=resistance-toolkit"
      },
      {
        action: "Store",
        url: "https://store.emilyslist.org/?utm_source=resistance-toolkit",
        category: "money"
      },
      {
        action: "Train to Run for Office - and Win",
        url: "https://trainingcenter.emilyslist.org/?utm_source=resistance-toolkit"
      },
      {
        action: "Train to Run for Office - and Win",
        url: "https://trainingcenter.emilyslist.org/?utm_source=resistance-toolkit",
        category: "education"
      },
    ],
    description: 'At EMILYs List, we work to elect Democratic pro-choice women up and down the ballot and across the country with a goal of fighting for our rights and our communities.',
    scope: 'us',
    slug: 'emilyslist'
  },
  {
    id: 26,
    name: "Center for Reproductive Rights",
    url: 'https://reproductiverights.org/',
    ogImage: "https://reproductiverights.org/wp-content/uploads/2021/04/Court.jpg",
    cause: ['reproductive', 'medicine'],
    donate: "https://reproductiverights.org/get-involved/support-us/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/reproductiverights/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/reprorights/'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/center-for-reproductive-rights/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/channel/UCdaJtc5AEyYxg5CDVDGOy6Q'
      },
    ],
    actions: [
      {
        action: "Act",
        url: "https://reproductiverights.org/get-involved/act/?utm_source=resistance-toolkit"
      },
      {
        action: "Learn",
        url: "https://reproductiverights.org/get-involved/learn/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Get Involved",
        url: "https://reproductiverights.org/get-involved/?utm_source=resistance-toolkit"
      },
      {
        action: "Resources",
        url: "https://reproductiverights.org/get-involved/featured-resources/?utm_source=resistance-toolkit"
      },
      {
        action: "Resources",
        url: "https://reproductiverights.org/get-involved/featured-resources/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Lawyers Network",
        url: "https://reproductiverights.org/lawyers-network/?utm_source=resistance-toolkit"
      }
    ],
    description: 'The Center for Reproductive Rights is a global human rights organization of attorneys and advocates working to ensure reproductive rights are protected in law as fundamental human rights for the dignity, equality, health, and well-being of every person.',
    scope: 'us',
    slug: 'reproductiverights'
  },
  {
    id: 27,
    name: "Reproductive Freedom For All",
    url: 'https://reproductivefreedomforall.org/',
    ogImage: "https://reproductivefreedomforall.org/wp-content/uploads/2024/05/Fight-for-Reproductive-Freedom_Hero-1024x683.png",
    cause: ['reproductive'],
    donate: "https://reproductivefreedomforall.org/donate/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/reproductivefreedomforall.org'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/reprofreedomforall/'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/reprofreedomforall'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@reprofreedomforall'
      },
    ],
    actions: [
      {
        action: "Take Action",
        url: "https://reproductivefreedomforall.org/take-action/?utm_source=resistance-toolkit"
      },
      {
        action: "Volunteer with Reproductive Freedom For All",
        url: "https://act.reproductivefreedomforall.org/a/nat-volunteers-23?ms=web_org_gen_20241106takeactionbanner",
        category: "volunteer"
      },
      {
        action: "Demand Abortion Access Now",
        url: "https://act.reproductivefreedomforall.org/a/abortion-access-now/?utm_source=resistance-toolkit"
      },
      {
        action: "Add Your Name: We Need Court Reform!",
        url: "https://act.reproductivefreedomforall.org/a/add-your-name-we-need-court-reform/?utm_source=resistance-toolkit"
      },
      {
        action: "Other Ways to Donate",
        url: "https://reproductivefreedomforall.org/donate/other-ways-to-donate/?utm_source=resistance-toolkit",
        category: "donate"
      }
    ],
    description: 'Reproductive Freedom for All organizes and mobilizes our 4 million members to fight for access to abortion, birth control, paid parental leave, and protections from pregnancy discrimination.',
    scope: 'us',
    slug: 'reproductivefreedomforall'
  },
  {
    id: 28,
    name: "UN Women",
    url: 'https://www.unwomen.org/',
    ogImage: "https://www.unwomen.org/sites/default/files/UN%20Women%20Logos/UN-Women-logo-social-media-1024x512-en.png",
    cause: ['sexism'],
    social: [
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/unwomen"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/un-women"
      },
      {
        platform: 'Flickr',
        url: "https://www.flickr.com/photos/unwomen"
      },
      {
        platform: 'Snapchat',
        url: "https://www.snapchat.com/add/unwomen"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/UNWomen"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/unwomen"
      },
    ],
    actions: [
      {
        action: "Get Involved",
        url: "https://www.unwomen.org/en/get-involved"
      },
      {
        action: "For ALL Women and Girls",
        url: "https://www.unwomen.org/en/get-involved/for-all-women-and-girls"
      },
      {
        action: "HeForShe",
        url: "https://www.heforshe.org/en"
      },
      {
        action: "Publications",
        url: "https://www.unwomen.org/en/publications"
      },
      {
        action: "Careers and Internships",
        url: "https://www.unwomen.org/en/about-us/employment"
      },
    ],
    description: 'UN Women is the UN organization delivering programmes, policies and standards that uphold women’s human rights and ensure that every woman and girl lives up to her full potential.',
    scope: 'global',
    slug: 'unwomen'
  },
  {
    id: 29,
    name: "Global Fund for Women",
    url: 'https://www.globalfundforwomen.org/',
    ogImage: "https://www.globalfundforwomen.org/wp-content/uploads/2024/01/cropped-inmotion_1200x630_1.29.24.jpg",
    cause: ['sexism'],
    donate: "https://join.globalfundforwomen.org/a/donate",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/globalfundwomen.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/GlobalFundforWomen'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/globalfundwomen/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/GlobalFundForWomen'
      },
      {
        platform: 'Pinterest',
        url: 'https://www.pinterest.com/globalfundwomen/'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/global-fund-for-women'
      },
    ],
    actions: [
      {
        action: "Get Involved",
        url: "https://www.globalfundforwomen.org/get-involved/"
      },
      {
        action: "Share Your Story",
        url: "https://www.globalfundforwomen.org/share-your-story/"
      },
      {
        action: "Become a Champion for Equality",
        url: "https://www.globalfundforwomen.org/champions-for-equality/",
        category: "volunteer"
      },
      {
        action: "Latest News",
        url: "https://www.globalfundforwomen.org/latest/",
        category: "education"
      },
      {
        action: "Store",
        url: "https://globalfundforwomenstore.com/",
        category: "money"
      }
    ],
    description: 'We envision a world where movements for gender justice have transformed power and privilege for a few into equity and equality for all. We fund bold, ambitious, and expansive gender justice movements to create meaningful change that will last beyond our lifetimes.',
    scope: 'global',
    slug: 'globalfundforwomen'
  },
  {
    id: 30,
    name: "Advocates for Youth",
    url: 'https://www.advocatesforyouth.org/',
    ogImage: "https://www.advocatesforyouth.org/wp-content/uploads/2019/08/Advocates-for-Youth-Logo_RRR-blue.png",
    cause: ['sexism', 'medicine', 'lgbtq'],
    donate: "https://actionnetwork.org/fundraising/donate-to-advocates-for-youth-3/?utm_source=resistance-toolkit",
    social: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/Advocates4Youth/"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/advocatesforyouth"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/advocatesforyouth"
      },
    ],
    actions: [
      {
        action: "Action Center",
        url: "https://www.advocatesforyouth.org/afy-action-center/?utm_source=resistance-toolkit"
      },
      {
        action: "Events",
        url: "https://www.advocatesforyouth.org/events/?utm_source=resistance-toolkit"
      },
      {
        action: "Campaigns",
        url: "https://www.advocatesforyouth.org/our-campaigns/?utm_source=resistance-toolkit"
      },
      {
        action: "Resources and Tools",
        url: "https://www.advocatesforyouth.org/resources-tools/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Know Your IX",
        url: "https://www.advocatesforyouth.org/campaigns/know-your-ix/?utm_source=resistance-toolkit"
      },
      {
        action: "Shop",
        url: "https://shop.advocatesforyouth.org/?utm_source=resistance-toolkit",
        category: "money"
      },
    ],
    description: 'Advocates for Youth works alongside thousands of young people here in the U.S. and around the globe as they fight for sexual health, rights, and justice.',
    scope: 'global',
    slug: 'advocatesforyouth'
  },

  {
    id: 32,
    name: "Defend The Vote",
    url: 'https://wedefendthevote.org/',
    ogImage: "https://wedefendthevote.org/wp-content/uploads/2021/01/share.png",
    cause: ['voting', 'democracy'],
    donate: "https://secure.actblue.com/donate/defend-the-vote-1/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/dtvpac.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/DTVPAC'
      },
    ],
    actions: [
      {
        action: "Scorecard: Find your State's Score",
        url: "https://wedefendthevote.org/scorecard/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Support Our Endorsed Politicians",
        url: "https://wedefendthevote.org/endorsements/?utm_source=resistance-toolkit"
      },
      {
        action: "Strategies",
        url: "https://wedefendthevote.org/strategies/?utm_source=resistance-toolkit"
      }
    ],
    description: 'Defend The Vote is a political action committee dedicated to preserving our democracy by electing candidates, up and down the ballot, who will fight to ensure fair elections, voting access, voter education and voter protection.',
    scope: 'us',
    slug: 'wedefendthevote'
  },
  {
    id: 33,
    name: "Vote.org",
    url: 'https://vote.org/',
    ogImage: "https://www.vote.org/img/og-www-default.png",
    cause: ['voting', 'democracy'],
    donate: "https://www.vote.org/donate/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/votedotorg.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/votedotorg'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/votedotorg'
      },
      {
        platform: 'Snapchat',
        url: 'https://www.snapchat.com/add/votedotorg'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/votedotorg'
      },
      {
        platform: 'TiKTok',
        url: 'https://www.tiktok.com/@votedotorg'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/@votedotorg'
      },
    ],
    actions: [
      {
        action: "Support The Freedom to Vote Act",
        url: "https://www.freedomtovoteact.org/?utm_source=resistance-toolkit"
      },
      {
        action: "Vote.org on WhatsApp Bot",
        url: "https://www.vote.org/whatsapp?utm_source=resistance-toolkit"
      },
      {
        action: "Sign Up for Election Reminders",
        url: "https://www.vote.org/election-reminders/?utm_source=resistance-toolkit"
      },
      {
        action: "Am I Registered to Vote?",
        url: "https://www.vote.org/am-i-registered-to-vote/?utm_source=resistance-toolkit"
      },
      {
        action: "Register to Vote",
        url: "https://www.vote.org/register-to-vote/?utm_source=resistance-toolkit"
      },
      {
        action: "Vote by Mail",
        url: "https://www.vote.org/absentee-ballot/?utm_source=resistance-toolkit"
      },
      {
        action: "Find Your Polling Place",
        url: "https://www.vote.org/polling-place-locator/?utm_source=resistance-toolkit"
      },
      {
        action: "Add Tools to Your Website",
        url: "https://www.vote.org/technology/?utm_source=resistance-toolkit"
      },
    ],
    description: 'Vote.org is the largest 501(c)(3) nonprofit, nonpartisan voting registration and get-out-the-vote (GOTV) technology platform in America. We build best-in-class, culturally competent programs, cutting-edge voter tools and high-profile partnerships to reach and empower voters across America – especially historically underserved voters of color and underrepresented young voters.',
    scope: 'us',
    slug: 'votedotorg'
  },
  {
    id: 34,
    name: "Voters of Tomorrow",
    url: 'https://votersoftomorrow.org/',
    ogImage: "https://votersoftomorrow.org/wp-content/uploads/2022/01/wfhVhxmI.jpeg",
    cause: ['voting', 'democracy'],
    donate: "https://secure.actblue.com/donate/voters-of-tomorrow-action-1/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/votersoftomorrow.org'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/voterstomorrow/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/VotersTomorrow/'
      },
      {
        platform: 'BlueSky',
        url: 'https://www.tiktok.com/@voterstomorrow'
      },
    ],
    actions: [
      {
        action: "Volunteer with Voters of Tomorrow",
        url: "https://www.mobilize.us/votersoftomorrow/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "VotingHub: Make your voice heard",
        url: "https://votersoftomorrow.org/vote/?utm_source=resistance-toolkit"
      },
      {
        action: "Find or Start a Chapter",
        url: "https://votersoftomorrow.org/chapters/?utm_source=resistance-toolkit"
      },
      {
        action: "Store",
        url: "https://store.votersoftomorrow.org/?utm_source=resistance-toolkit",
        category: "money"
      },
      {
        action: "Learn More: Gen Z Agenda",
        url: "https://votersoftomorrow.org/issues/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    description: 'Voters of Tomorrow is a Gen Z-led 501(c)(4) organization that engages and represents young Americans in politics and government. With chapters in 20 states and a volunteer presence in all 50, we take a locally based, multifaceted approach to engaging young voters. Our team is led by a national staff of young political strategists, organizers, and policy experts.',
    scope: 'us',
    slug: 'votersoftomorrow'
  },  
  {
    id: 35,
    name: "Common Cause",
    url: 'https://www.commoncause.org/',
    ogImage: "https://www.commoncause.org/wp-content/uploads/2024/10/CC-Share-Graphic-Main9.jpg",
    cause: ['voting', "democracy"],
    donate: "https://www.commoncause.org/donate/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/ourcommoncause.bsky.social'
      },
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/CommonCause"
      },
      {
        platform: 'TikTok',
        url: "https://www.tiktok.com/@common_cause"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/user/CommonCauseEthics"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/ourcommoncause/"
      },
    ],
    actions: [
      {
        action: "Take Action - Sign Petitions, Register to Vote, and More",
        url: "https://www.commoncause.org/take-action/?utm_source=resistance-toolkit"
      },
      {
        action: "Volunteer with Common Cause",
        url: "https://actionnetwork.org/forms/join-the-common-cause-action-team-slack/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Resource Library",
        url: "https://www.commoncause.org/research-and-resources/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    description: 'Common Cause is a nonpartisan, grassroots organization dedicated to upholding the core values of American democracy. We work to create open, honest, and accountable government that serves the public interest; promote equal rights, opportunity, and representation for all; and empower all people to make their voices heard in the political process.',
    scope: 'us',
    slug: 'commoncause'
  },
  {
    id: 35,
    name: "VoteVets.org",
    url: 'https://votevets.org/',
    ogImage: "https://votevets.org/wp-content/uploads/2021/06/Social-Share.png",
    cause: ['voting', 'democracy'],
    donate: "https://secure.actblue.com/contribute/page/vote_vets_pac/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/votevets.org'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@votevets'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/votevets/'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/votevets/'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/votevets/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/channel/UCGwmBKmMT_ShATCfnFm3egw'
      },      
    ],
    actions: [
      {
        action: "Take Action: DOGE Tipline",
        url: "https://votevets.org/doge-tipline/?utm_source=resistance-toolkit"
      },
      {
        action: "Find our Endorsed Candidates",
        url: "https://votevets.org/candidates/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Shop",
        url: "https://shop.votevets.org/?utm_source=resistance-toolkit",
        category: "money"
      },

    ],
    description: 'Started in 2006, VoteVets PAC and VoteVets Action Fund have been the home for progressive veterans, military families, and their civilian supporters for over 15 years. It is the first organization of its kind and the largest, with over one and a half million supporters in all 50 states. VoteVets uses public issue campaigns to relentlessly lift up the voices of veterans on matters of national security, veterans’ care, and everyday issues that affect the lives of those who served, and their families.',
    scope: 'us',
    slug: 'votevets'
  },
  {
    id: 36,
    name: "Oxfam",
    url: 'https://www.oxfamamerica.org/',
    ogImage: "https://webassets.oxfamamerica.org/media/images/oxfam-america-image_nr63lYZ.width-1200.png",
    cause: ['wealth', 'aid'],
    donate: "https://give.oxfamamerica.org/page/63259/donate/1/?utm_source=resistance-toolkit",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/oxfaminternational.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/oxfamamerica'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/oxfamamerica/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/oxfamamerica'
      },
    ],
    actions: [
      {
        action: "Take Action",
        url: "https://www.oxfamamerica.org/take-action/?utm_source=resistance-toolkit"
      },
      {
        action: "See Your Impact In Action",
        url: "https://www.oxfamamerica.org/take-action/?utm_source=resistance-toolkit"
      },
      {
        action: "Ways To Give",
        url: "https://www.oxfamamerica.org/donate/?utm_source=resistance-toolkit",
        category: "donate"
      },
      {
        action: "Volunteer Oxfam",
        url: "https://www.oxfamamerica.org/take-action/volunteer/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Be a Fundraiser",
        url: "https://www.oxfamamerica.org/take-action/be-a-fundraiser/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Host am Oxfam Hunger Banquet",
        url: "https://www.oxfamamerica.org/take-action/oxfam-hunger-banquet/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Ambassadors",
        url: "https://www.oxfamamerica.org/about-us/ambassadors/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Careers", 
        url: "https://www.oxfamamerica.org/about-us/careers/available-positions/?utm_source=resistance-toolkit"
      },
      {
        action: "Issues",
        url: "https://www.oxfamamerica.org/explore/issues/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Research and Publications",
        url: "https://www.oxfamamerica.org/explore/research-publications/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Measuring Impact",
        url: "https://www.oxfamamerica.org/about-us/measuring-impact/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    description: 'Oxfam is a global organization that fights inequality to end poverty and injustice. We offer lifesaving support in times of crisis and advocate for economic justice, gender equality, and climate action. We demand equal rights and equal treatment so that everyone can thrive, not just survive. The future is equal.',
    scope: 'global',
    slug: 'oxfam'
  },
  {
    id: 37,
    name: "Patriotic Millionaires",
    url: 'https://patrioticmillionaires.org/',
    ogImage: "https://patrioticmillionaires.org/wp-content/uploads/2024/11/Share-Image-2.png",
    cause: ['wealth'],
    donate: "https://secure.actblue.com/donate/pm_website",
    actions: [
      {
        action: "Perspectives",
        url: "https://patrioticmillionaires.org/perspectives/",
        category: "education"
      },
      {
        action: "Our Priorities",
        url: "https://patrioticmillionaires.org/priorities/",
      },
      {
        action: "Meet the Millionaires",
        url: "https://patrioticmillionaires.org/meet-the-millionaires/",
      },
      {
        action: "Become a Patriotic Millionaire: (Minimum annual dues are $10,000)",
        url: "https://patrioticmillionaires.org/become-a-member/",        
      },
      {
        action: "I’m not a millionaire, but I want to help. How to donate?",
        url: "https://secure.actblue.com/donate/pm_website",        
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/patrioticmillionaires.org'
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/PatrioticMillionaires"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/patrioticmillionaires"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/patriotic-millionaires/"
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@patriotic.millionaires"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@PatrioticMillionaires"
      }
    ],
    description: 'Tax the Rich. Pay the People. Spread the Power. We’re a group of millionaires demanding a political economy that works for everyone in America, not just wealthy people like us. Join our fight!',
    scope: 'us',
    slug: 'patrioticmillionaires'
  },
  {
    id: 38,
    name: "Inequality Media",
    url: 'https://www.inequalitymedia.org/',
    ogImage: "http://static1.squarespace.com/static/57043836f850824f376c74ef/t/5708505d20c647096509fce8/1460162675551/IM_logo_final.jpg?format=1500w",
    cause: ['wealth'],
    donate: "https://www.inequalitymedia.org/donate/?utm_source=resistance-toolkit",
    actions: [
      {
        action: "Wealth and Poverty Course",
        url: "https://www.inequalitymedia.org/wealth-and-poverty/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Wealth and Poverty Course",
        url: "https://www.inequalitymedia.org/wealth-and-poverty/?utm_source=resistance-toolkit",        
      },
      {
        action: "Get Updates",
        url: "https://www.inequalitymedia.org/get-updates/?utm_source=resistance-toolkit"
      },
      {
        action: "Merch",
        url: "https://inequalitymedia.goodstockcompany.com/product/YGBcbmzSsiJeDYHQw",
        category: "money"
      },
      {
        action: "Jobs",
        url: "https://www.inequalitymedia.org/jobs/?utm_source=resistance-toolkit"
      },
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/inequalitymedia.bsky.social'
      },
      {
        platform: "Instagram",
        url: "http://instagram.com/inequalitymedia"
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/inequalitymedia/"
      },
      {
        platform: "YouTube",
        url: "http://youtube.com/rbreich"
      },      
    ],
    description: "The top 1% of America holds 40% of the wealth. It's time the public understands how this happened and what we can do about it. Our ultimate vision is a United States where active participation by informed citizens restores the balance of power in our Democracy and creates an economy where gains are widely shared.",
    scope: 'us',
    slug: 'inequalitymedia'
  },
  {
    id: 39,
    name: "Citizens for Tax Justice",
    url: 'https://ctj.org/',
    ogImage: "/Orgs/CTJBanner.webp",
    cause: ['wealth'],
    donate: "https://ctj.org/donate/?utm_source=resistance-toolkit",
    actions: [
      {
        action: "Advocacy Toolkit: Ready to join the fight for tax justice?",
        url: "https://ctj.org/tools/advocacy-toolkit-you-can-use/?utm_source=resistance-toolkit"
      },
      {
        action: "Resources",
        url: "https://ctj.org/resources/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/taxjustice.bsky.social'
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/taxjustice/"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/user/Citizens4TaxJustice/videos"
      }
    ],
    description: "We believe tax justice is linked to economic, social, racial, gender and climate justice. We have a once in a generation opportunity to reverse decades of tax policy that has steered more wealth to the top, widened inequality and deprived our country and communities of the resources needed to build a strong foundation for the future.",
    scope: 'us',
    slug: 'ctj'
  },
  {
    id: 40,
    name: "Economic Policy Institute",
    url: 'https://www.epi.org/',
    ogImage: "https://www.epi.org/files/2016/epi-careers-bground-05-11-2016.png",
    cause: ['wealth'],
    donate: "https://secure.actblue.com/donate/epi/?utm_source=resistance-toolkit",
    actions: [
      {
        action: "Federal Policy Watch: Tracking how the Trump administration, Congress, and the courts are affecting workers' quality of life.",
        url: "https://www.epi.org/policywatch/?utm_source=resistance-toolkit"
      },
      {
        action: "Social Media Toolkit",
        url: "https://www.epi.org/resources/social-media-toolkit/"
      },
      {
        action: "The State of Working America Data Library: comprehensive historical data on the American labor force.",
        url: "https://www.epi.org/data/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Resources",
        url: "https://www.epi.org/resources/?utm_source=resistance-toolkit",
        
      },
      {
        action: "Areas of Research",
        url: "https://www.epi.org/research/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/epi.org'
      },
      {
        platform: "Blog",
        url: "https://www.epi.org/blog/?utm_source=resistance-toolkit"
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/EconomicPolicy/"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCBP_y4Vi31ZECb1I9rOTL0Q"
      },
      {
        platform: "RSS Feed",
        url: "https://www.epi.org/feed/"
      }
    ],
    description: "About EPI. The Economic Policy Institute (EPI) is a nonprofit, nonpartisan think tank working for the last 30 years to counter rising inequality, low wages and weak benefits for working people, slower economic growth, unacceptable employment conditions, and a widening racial wage gap.",
    scope: 'us',
    slug: 'epi'
  },
  {
    id: 41,
    name: "Global Refuge",
    url: 'https://www.globalrefuge.org/',
    ogImage: "https://www.globalrefuge.org/wp-content/uploads/2023/08/impact_overview-1200x630-c-center.jpg",
    cause: ['immigration'],
    donate: "https://secured.globalrefuge.org/page/78592/donate/1/?utm_source=resistance-toolkit",
    actions: [
      {
        action: "Volunteer Opportunities",
        url: "https://www.globalrefuge.org/get-involved/volunteer/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Corporate Giving",
        url: "https://www.globalrefuge.org/get-involved/corporate-giving-and-involvement/?utm_source=resistance-toolkit",
        category: "donate"
      },
      {
        action: "Create a Circle of Welcome for a New American family.",
        url: "https://www.globalrefuge.org/get-involved/circleofwelcome/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Advocate with Us: Raise your voice alongside those seeking safety",
        url: "https://www.globalrefuge.org/get-involved/advocate-with-us/?utm_source=resistance-toolkit"
      },
      {
        action: "Combatting Disinformation",
        url: "https://www.globalrefuge.org/get-involved/advocate-with-us/disinformation/?utm_source=resistance-toolkit",        
      },
      {
        action: "Combatting Disinformation",
        url: "https://www.globalrefuge.org/get-involved/advocate-with-us/disinformation/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Faith in Action: Your faith community can help welcome immigrants and refugees.",
        url: "https://www.globalrefuge.org/get-involved/faith-in-action/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Resources - Toolkits, Backgrounders, and more",
        url: "https://www.globalrefuge.org/blog/resources/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/globalrefuge.bsky.social'
      },
      {
        platform: 'Blog',
        url: "https://www.globalrefuge.org/blog/?utm_source=resistance-toolkit"
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/GlobalRefuge/"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/globalrefuge"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@globalrefuge_"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/globalrefuge_/"
      }
    ],
    description: "For more than 85 years, Global Refuge (formerly Lutheran Immigration and Refugee Service) has provided the resources, guidance, and community to help forge a way forward for New Americans. We’re committed to helping people reimagine the possibilities while providing a soft place to land.",
    scope: 'global',
    slug: 'globalrefuge'
  },
  {
    id: 42,
    name: "Lutheran World Relief",
    url: 'https://lwr.org/',
    ogImage: "https://lwr.org/themes/custom/ai/images/logo_lwr_social_big2.jpg",
    cause: ['immigration', "faith"],
    donate: "https://give.lwr.org/page/123179/donate/1/?utm_source=resistance-toolkit",
    actions: [
      {
        action: "Volunteer to quilt",
        url: "https://lwr.org/quilts/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Make LWR Kits",
        url: "https://lwr.org/kits/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Find an Ingathering",
        url: "https://ingathering.lwr.org/?utm_source=resistance-toolkit"
      },
      {
        action: "Resource Library",
        url: "https://lwr.org/downloads/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "LWR Farmers Market Coffee",
        url: "https://lwr.org/coffee/?utm_source=resistance-toolkit",
        category: "money"
      },
      {
        action: "Mailing List - News and important communications",
        url: "https://lwr.org/sign-our-emails/?utm_source=resistance-toolkit"
      }
    ],
    social: [
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/LuthWorldRelief'
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/luthworldrelief"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/user/LutheranWorldRelief"
      }
    ],
    description: "At Lutheran World Relief, we envision a future where all people, in every corner of the world can live full, dignified lives. We work with people based on need, regardless of race, religion or nationality and we do not evangelize.",
    scope: 'global',
    slug: 'lwr'
  },
  {
    id: 43,
    name: "Interfaith Alliance",
    url: 'https://interfaithalliance.org',
    ogImage: "https://cdn.prod.website-files.com/678fc0503fb396ad46f4567a/67a3bddbe44cba62d1c9b835_Open%20Graph%20Image.avif",
    cause: ['faith', 'lgbtq', 'reproductive', 'democracy'],
    donate: "https://support.interfaithalliance.org/a/donate",
    actions: [
      {
        action: "Take Action: Join a campaign, event, or petition",
        url: "https://www.interfaithalliance.org/get-involved#take-action"
      },
      {
        action: "Find your local affiliate",
        url: "https://www.interfaithalliance.org/get-involved#affiliates"
      },
      {
        action: "Mailing List - News, Resources, Advocacy Opportunities",
        url: "https://support.interfaithalliance.org/a/signup"
      },
      {
        action: "Updates: News, Analysis, Advocacy, Research, and more",
        url: "https://www.interfaithalliance.org/updates",
        category: "education"
      },
      {
        action: "Our Vision", 
        url: "https://www.interfaithalliance.org/our-vision",
        category: "education"
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/interfaithalliance.org'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/interfaithalliance/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/intrfthalliance/'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/interfaith-alliance'
      },
      {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@interfaithalliance'
      }
    ],
    description: "Join the pro-democracy faith movement. Religious extremism threatens our democracy, our communities, and individual freedoms. We are a counterforce: challenging the dangerous ideas of Project 2025 by mobilizing people of diverse faiths and beliefs to achieve democracy together.",
    scope: 'us',
    slug: 'interfaithalliance'
  },
  {
    id: 44,
    name: "Interfaith America",
    url: 'https://www.interfaithamerica.org/',
    ogImage: "https://www.interfaithamerica.org/wp-content/uploads/2022/10/A7301150.jpg",
    cause: ['faith'],
    donate: 'https://www.interfaithamerica.org/support-us/',
    actions: [
      {
        action: 'Subscribe - Mailing List',
        url: 'https://www.interfaithamerica.org/subscribe/'
      },
      {
        action: 'Events',
        url: 'https://www.interfaithamerica.org/event/'
      },
      {
        action: 'Courses, Curricula, and Tools',
        url: "https://www.interfaithamerica.org/curriculum/",
        category: "education"
      },
      {
        action: 'The Learning & Action Bridge: Customized Recommendations for high-impact opportunities.',
        url: "https://www.interfaithamerica.org/lab/",
        category: "volunteer"
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/interfaithamerica.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/InterfaithAmerica'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/interfaithamerica/'
      },
      {
        platform: 'YouTube',
        url: 'https://www.youtube.com/user/InterfaithYouthCore'
      }
    ],
    description: "Religious diversity is a foundational American strength. Interfaith America is building a nation that achieves that promise for the common good. Interfaith America’s mission is to inspire, equip, and connect leaders and institutions to unlock the potential of America’s religious diversity.",
    scope: 'us',
    slug: 'interfaithamerica'
  },
  {
    id: 46,
    name: "United Religions Initiative",
    url: 'https://www.uri.org/',
    ogImage: "https://www.uri.org/sites/default/files/2022-08/URI-logo.png",
    cause: ['faith'],
    donate: 'https://www.uri.org/donate',
    actions: [
      {
        action: 'Join',
        url: "https://www.uri.org/welcome"
      },
      {
        action: "Events",
        url: "https://www.uri.org/uri-events"
      }
    ],
    social: [
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/unitedreligionsinitiative'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/uriglobal/'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/uriglobal'
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/user/uriglobal/"
      }
    ],
    description: "The purpose of the United Religions Initiative is to promote enduring, daily interfaith cooperation, to end religiously motivated violence and to create cultures of peace, justice, and healing for the Earth and all living beings. URI is a global grassroots interfaith network that cultivates peace and justice by engaging people to bridge religious and cultural differences and work together for the good of their communities and the world.",
    scope: 'global',
    slug: 'uri'
  },
  {
    id: 47,
    name: "Union of Concerned Scientists",
    url: 'https://www.ucsusa.org/',
    ogImage: "https://www.ucsusa.org/themes/custom/ucstheme/assets/social-logo.png",
    cause: ['science', 'climate'],
    donate: 'https://secure.ucsusa.org/onlineactions/dR5QqmX2uUCLCFD1KkVEzg2/?utm_source=resistance-toolkit',
    actions: [
      {
        action: 'Take Action!',
        url: 'https://www.ucsusa.org/take-action/?utm_source=resistance-toolkit'
      },
      {
        action: "Science and Democracy",
        url: "https://www.ucsusa.org/science-democracy/?utm_source=resistance-toolkit"
      },
      {
        action: "Science and Democracy",
        url: "https://www.ucsusa.org/science-democracy/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Store",
        url: "https://store.ucsusa.org/?utm_source=resistance-toolkit",
        category: "money"
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/ucsusa.bsky.social'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/unionofconcernedscientists'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/unionofconcernedscientists'
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/user/ConcernedScientists"
      }
    ],
    description: "The Union of Concerned Scientists (UCS) is a national nonprofit organization founded more than 50 years ago by scientists and students at the Massachusetts Institute of Technology. Our mission: The Union of Concerned Scientists puts rigorous, independent science into action, developing solutions and advocating for a healthy, safe, and just future. Today, we are a group of nearly 250 scientists, analysts, policy experts, organizers, and communicators dedicated to that purpose.",
    scope: 'us',
    slug: 'ucs'
  }, 
  {
    id: 48,
    name: "AAAS",
    url: 'https://www.aaas.org/',
    ogImage: "/Orgs/AAASBanner.webp",
    cause: ['science'],
    donate: 'https://www.aaas.org/support/?utm_source=resistance-toolkit',
    actions: [
      {
        action: 'Membership',
        url: 'https://www.aaas.org/membership/?utm_source=resistance-toolkit'
      },
      {
        action: 'Events',
        url: 'https://www.aaas.org/events/?utm_source=resistance-toolkit'
      },
      {
        action: 'Fellowships',
        url: 'https://www.aaas.org/fellowships/?utm_source=resistance-toolkit'
      },
      {
        action: 'Training Sessions',
        url: 'https://www.aaas.org/page/training-sessions/?utm_source=resistance-toolkit',
        category: "education"
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/aaas.org'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/AAAS.Science/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/aaasorg/'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/aaasorg/'
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/channel/UCU_uRsjNMd1qP6CaKyFND_Q"
      }
    ],
    description: "Advance science, engineering, and innovation throughout the world for the benefit of all. Advancing Science, Serving Society. Goals: Advance scientific excellence and achievement, Foster equity and inclusion for scientific excellence, Build trust among scientists and communities, Catalyze progress where science meets policy.",
    scope: 'us',
    slug: 'aaas'
  },  
  {
    id: 49,
    name: "The Science Coalition",
    url: 'https://www.sciencecoalition.org/?utm_source=resistance-toolkit',
    ogImage: "/Orgs/TSCBanner.webp",
    cause: ['science'],
    actions: [
      {
        action: 'How to Take Action - Tools and Resources',
        url: 'https://www.sciencecoalition.org/why-science-matters/#take-action/?utm_source=resistance-toolkit'
      },
      {
        action: 'Podcast',
        url: "https://itunes.apple.com/us/podcast/thesciencecoalition/id911477046?mt=2"
      },
      {
        action: 'Podcast',
        url: "https://itunes.apple.com/us/podcast/thesciencecoalition/id911477046?mt=2",
        category: "education"
      }
    ],
    social: [
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/sciencecoalition'
      },
      {
        platform: 'Flickr',
        url: 'http://www.flickr.com/photos/24397168@N02/'
      },
      {
        platform: 'YouTube',
        url: "http://www.youtube.com/user/thesciencecoalition"
      }
    ],
    description: "Established in 1994, the Science Coalition is a nonprofit, nonpartisan organization of more than 50 of the nation’s leading public and private research universities. Celebrating its 30th anniversary this year, it is dedicated to sustaining the federal government’s investment in fundamental scientific research as a means to stimulate the economy, spur innovation, and drive American competitiveness.",
    scope: 'us',
    slug: 'sciencecoalition'
  },
  {
    id: 50,
    name: "American Red Cross",
    url: 'https://www.redcross.org/',
    ogImage: "https://www.redcross.org/content/dam/redcross/red-cross-logos/American-Red-Cross_Logo_1200x630.jpg",
    cause: ['aid'],
    donate: 'https://www.redcross.org/donate/donation.html/',
    social: [
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/redcross'
      },
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/americanredcross.bsky.social'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/american-red-cross/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/americanredcross/?hl=en'
      },
      {
        platform: 'TikTok',
        url: "https://www.tiktok.com/@americanredcross?lang=en"
      }
    ],
    actions: [
      {
        action: "Volunteer with Red Cross",
        url: "https://www.redcross.org/volunteer/become-a-volunteer.html",
        category: "volunteer"
      },
      {
        action: "Training Services and Certification",
        url: "https://www.redcross.org/take-a-class",
        category: "education"
      },
      {
        action: "Give Blood",
        url: "https://www.redcross.org/give-blood.html",
        category: "volunteer"
      },
      {
        action: "More Ways to Donate",
        url: "https://www.redcross.org/donations/ways-to-donate.html",
        category: "donate"
      }, 
      {
        action: "Shop",
        url: "https://www.redcross.org/store",
        category: "money"
      }

    ],
    description: "Our mission is more than words. We always aim to prevent and relieve suffering with every action. The Red Cross shelters, feeds and provides comfort to people affected by disasters; supplies about 40% of the nation’s blood; teaches skills that save lives; distributes international humanitarian aid; and supports veterans, military members and their families.",
    scope: 'us',
    slug: 'americanredcross'
  },

  {
    id: 52,
    name: "UNICEF",
    url: 'https://www.unicef.org',
    ogImage: "https://www.unicef.org/sites/default/files/styles/hero_desktop/public/UNI610268-cropped.JPG.webp?itok=zThFYBkV",
    cause: ['aid'],
    donate: 'https://www.unicefusa.org/?form=donate',
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/unicef.org'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/unicef/'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/unicef/'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/unicef/'
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/unicef"
      }
    ],
    actions: [
      {
        action: "Volunteer with UNICEF",
        url: "https://www.unicef.org/careers/volunteers-unicef",
        category: "volunteer"
      },
      {
        action: "Take Action",
        url: "https://www.unicef.org/take-action"
      },
      {
        action: "Climate action for children",
        url: "https://www.unicef.org/climate-action"
      },
      {
        action: "Adolescent girls' rights",
        url: "https://www.unicef.org/adolescent-girls-rights"
      },
      {
        action: "Child health and survival",
        url: "https://www.unicef.org/child-health-and-survival"
      },
      {
        action: "Children under attack",
        url: "https://www.unicef.org/children-under-attack"
      },
      {
        action: "Convention on the Rights of the Child",
        url: "https://www.unicef.org/child-rights-convention"
      },
    ],    
    description: "UNICEF, the United Nations agency for children, works to protect the rights of every child, especially the most disadvantaged and those hardest to reach. Across more than 190 countries and territories, we do whatever it takes to help children survive, thrive and fulfil their potential.",
    scope: 'global',
    slug: 'unicef'
  },
  {
    id: 53,
    name: "World Health Organization",
    url: 'https://www.who.int/',
    ogImage: "https://cdn.who.int/media/images/default-source/infographics/logo-who.tmb-1200v.jpg?sfvrsn=2fcc68a0_35",
    cause: ['aid', 'medicine'],
    donate: 'https://donate.who.foundation/',
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/who.int'
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/WHO'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/world-health-organization'
      },
      {
        platform: 'Instagram',
        url: 'https://instagram.com/who'
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/user/who?sub_confirmation=1"
      }
    ],
    actions: [
      {
        action: "Events",
        url: "https://www.who.int/news-room/events/?utm_source=resistance-toolkit"
      },
      {
        action: "Campaigns",
        url: "https://www.who.int/campaigns/?utm_source=resistance-toolkit"
      },
      {
        action: "Get Data",
        url: "https://data.who.int/?utm_source=resistance-toolkit",        
      },
      {
        action: "Get Data",
        url: "https://data.who.int/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    description: "Founded in 1948, WHO is the United Nations agency that connects nations, partners and people to promote health, keep the world safe and serve the vulnerable – so everyone, everywhere can attain the highest level of health.",
    scope: 'global',
    slug: 'who'
  },
  {
    id: 54,
    name: "Islamic Relief USA",
    url: 'https://irusa.org/',
    ogImage: "https://irusa.org/wp-content/uploads/2020/04/IRUSA_FB.jpg",
    cause: ['aid', 'faith'],
    donate: 'https://donate.irusa.org/campaign/657729/donate',
    social: [
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/IslamicReliefUSA/"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/user/IslamicRelief",        
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/islamicreliefusa/"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/islamic-relief-usa"
      },
    ],
    actions: [
      {
        action: "Volunteer with Islamic Relief USA",
        url: "https://irusa.org/volunteer/",
        category: "volunteer"
      },
      {
        action: "Creative Giving",
        url: "https://irusa.org/creative-giving/",
        category: "donate"
      },
      {
        action: "Advocacy",
        url: "https://para.irusa.org/"
      },
      {
        action: "Create a Fundraiser",
        url: "https://irusa.org/iraise/",
        category: "volunteer"
      },
      {
        action: "Create a Will",
        url: "https://irusa.org/wills/",
        category: "donate"
      }
    ],
    description: "Islamic Relief USA is a community of diverse people sharing a set of common values: excellence, sincerity, social justice, compassion, and custodianship. Islamic Relief USA provides relief and development in a dignified manner regardless of gender, race, or religion, and works to empower individuals in their communities and give them a voice in the world.",
    scope: 'global',
    slug: 'irusa'
  },
  {
    id: 55,
    name: "Muslim Aid USA",
    url: 'https://www.mausa.org/',
    ogImage: "https://www.mausa.org/wp-content/uploads/2023/01/mausaogimage.png",
    cause: ['aid', 'faith'],
    donate: 'https://www.mausa.org/appeals/feed-the-fasting/',
    social: [
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/channel/UCPq2RZEauKy-oHwekRn-qxw"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/muslimaidusa/"
      },
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/MuslimAidUSA"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/muslim-aid-america"
      },
    ],
    actions: [
      {
        action: "Appeals",
        url: "https://www.mausa.org/appeals/"
      },
      {
        action: "Our Work",
        url: "https://www.mausa.org/our-work/"
      },
      {
        action: "Events",
        url: "https://www.mausa.org/events/"
      },
      {
        action: "Nights of Power",
        url: "https://www.mausa.org/nights-of-power/",
        category: "donate"
      }
    ],
    description: "Muslim Aid USA is a faith based American international charity that provides help to people who are victims of natural disasters or conflict. MAUSA also helps those who are suffering from poverty, hunger, disease, illiteracy, discrimination, homelessness, debt, unemployment, injustice, deprivation or lack of skills and economic opportunities.",
    scope: 'global',
    slug: 'mausa'
  },
  {
    id: 56,
    name: "Catholic Charities USA",
    url: 'https://www.catholiccharitiesusa.org/',
    ogImage: "https://www.catholiccharitiesusa.org/wp-content/uploads/2023/06/Rectangle-6825-9.59.35-AM.jpg",
    cause: ['aid', 'faith', 'immigration'],
    donate: 'https://www.catholiccharitiesusa.org/?form=createhope24&utm_source=resistance-toolkit',
    social: [
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/catholiccharitiesusa/"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/ccharitiesusa/"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/catholic-charities-usa/"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/ccharitiesusa"
      },
    ],
    actions: [
      {
        action: "Action Center",
        url: "https://www.catholiccharitiesusa.org/advocacy-1/action-center/#/?utm_source=resistance-toolkit"
      },
      {
        action: "Advocacy - Resources and Tools",
        url: "https://www.catholiccharitiesusa.org/advocacy/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Parish Engagement",
        url: "https://www.catholiccharitiesusa.org/what-we-do/parish-engagement/?utm_source=resistance-toolkit"
      }
    ],
    description: "The mission of Catholic Charities is to provide service to people, families and communities in need, to advocate for justice in social structures and to call the entire church and all people of good will to do the same.",
    scope: 'us',
    slug: 'catholiccharitiesusa'
  },
  {
    id: 57,
    name: "Doctors Without Borders",
    url: 'https://www.doctorswithoutborders.org/',
    ogImage: "https://www.doctorswithoutborders.org/themes/custom/msf/meta_image.png",
    cause: ['aid', 'medicine'],
    donate: 'https://donate.doctorswithoutborders.org/secure/rr-donate-web',
    social: [
      {
        platform: 'BlueSky',
        url: "https://bsky.app/profile/doctorswithoutborders.org"
      },
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/doctorswithoutborders"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/doctorswithoutborders"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/user/MSF"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/m-decins-sans-fronti-res-msf-"
      },
      {
        platform: 'TikTok',
        url: "https://www.tiktok.com/@doctorswithoutborders"
      },
    ],
    actions: [
      {
        action: "Ways to get involved",
        url: "https://www.doctorswithoutborders.org/get-involved"
      },
      {
        action: "Volunteer with Doctors Without Borders",
        url: "https://www.doctorswithoutborders.org/get-involved/volunteer",
        category: "volunteer"
      },
      {
        action: "More Ways To Give",
        url: "https://www.doctorswithoutborders.org/get-involved/ways-to-give",
        category: "donate"
      },
      {
        action: "Events",
        url: "https://www.doctorswithoutborders.org/latest/events"
      }
    ],
    description: "Every day, Doctors Without Borders teams deliver emergency medical aid to people in crisis, with humanitarian projects in more than 70 countries.",
    scope: 'global',
    slug: 'doctorswithoutborders'
  },
  {
    id: 58,
    name: "American Medical Association",
    url: 'https://www.ama-assn.org/',
    ogImage: "https://www.ama-assn.org/sites/ama-assn.org/files/2019-01/2018-11-19-GENERICSOCIAL.jpg",
    cause: ['medicine'],
    donate: 'https://member.ama-assn.org/join-renew/member-search',
    social: [
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/AmericanMedicalAssociation"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/american-medical-association"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/user/AmerMedicalAssn"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/amermedicalassn/"
      },
    ],
    actions: [
      {
        action: "Become a member",
        url: "https://member.ama-assn.org/join-renew/member-search/?utm_source=resistance-toolkit"
      },
      {
        action: "Join in on national advocacy efforts",
        url: "https://www.ama-assn.org/health-care-advocacy/federal-advocacy/national-advocacy/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "Events",
        url: "https://www.ama-assn.org/member-benefits/events/?utm_source=resistance-toolkit"
      },
      {
        action: "Research", 
        url: "https://www.ama-assn.org/about/research/?utm_source=resistance-toolkit",
        category: "education"
      },
      {
        action: "AMA Store",
        url: "https://www.ama-assn.org/practice-management/ama-store/?utm_source=resistance-toolkit",
        category: "money"
      },
      {
        action: "AMA Store",
        url: "https://www.ama-assn.org/practice-management/ama-store/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    description: "Throughout history, the AMA has always followed its mission: to promote the art and science of medicine and the betterment of public health.",
    scope: 'us',
    slug: 'ama'
  },
  {
    id: 59,
    name: "National Patient Advocate Foundation",
    url: 'https://www.npaf.org/',
    ogImage: "https://www.npaf.org/wp-content/uploads/2021/11/NPAF-image-share.jpeg",
    cause: ['medicine'],
    donate: 'https://www.npaf.org/actions/donate/?utm_source=resistance-toolkit',
    social: [
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/NPAForg/"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/patient_advocates/"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/npaf/"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/channel/UCbctmiopzYxL9J-QummL8bw"
      },

    ],
    actions: [
      {
        action: "Get Involved",
        url: "https://www.npaf.org/get-involved/?utm_source=resistance-toolkit"
      },
      {
        action: "Volunteer with NPAF",
        url: "https://www.npaf.org/actions/sign-up-to-volunteer/?utm_source=resistance-toolkit",
        category: "volunteer"
      },
      {
        action: "Events",
        url: "https://www.npaf.org/events/?utm_source=resistance-toolkit"
      },
      {
        action: "Toolkits",
        url: "https://www.npaf.org/resources/?_resource_types=toolkits&utm_source=resistance-toolkit"
      },
      {
        action: "Understand the Issues",
        url: "https://www.npaf.org/issues/?utm_source=resistance-toolkit",
        category: "education"
      }
    ],
    description: "Our mission is to make the healthcare system work for all of us. As the advocate affiliate of Patient Advocate Foundation, we work at the national level to influence policy and drive change in healthcare.",
    scope: 'us',
    slug: 'npaf'
  },
  {
    id: 60,
    name: "NCAFP",
    url: 'https://ncafp.org/',
    ogImage: "https://ncafp.org/wp-content/uploads/2024/10/ncaf-social.png",
    cause: ['diplomacy'],
    donate: 'https://crm.nonprofiteasy.com/6398/Pages/fundraising/#/1',
    social: [
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/NATLCOMMITTEE"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/national-committee-on-american-foreign-policy"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/channel/UCWoXb0u8VR_wVuXVHfn9yfA"
      },
      {
        platform: 'Spotify',
        url: "https://open.spotify.com/show/4nk4aJqHqKZZd2IFbEdvJG?si=9921d8e339094139&nd=1&dlsi=1bfe4e5a1e6a403a"
      },

    ],
    actions: [
      {
        action: "Become a Member",
        url: "https://ncafp.org/become-a-member/"
      },
      {
        action: "Events",
        url: "https://ncafp.org/upcoming-events/"
      },
      {
        action: "Special Programs",
        url: "https://ncafp.org/events-and-special-programs/"
      },
      {
        action: "Stay Connected - Newsletter",
        url: "https://ncafp.org/stay-connected/"
      },
      {
        action: "Media and Reports",
        url: "https://ncafp.org/media-reports-directory/",
        category: "education"
      },
    ],
    description: "NCAFP is a nonprofit policy organization dedicated to the resolution of conflicts that threaten U.S. interests. Toward that end, the NCAFP identifies, articulates, and helps advance American foreign policy interests from a nonpartisan perspective within the framework of political realism.",
    scope: 'us',
    slug: 'ncafp'
  },
  {
    id: 61,
    name: "Foreign Policy For America",
    url: 'https://www.fp4america.org/',
    ogImage: "/Orgs/FP4ABanner.webp",
    cause: ['diplomacy'],
    donate: 'https://www.fp4america.org/donate/',
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/fp4america.bsky.social'
      },
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/fp4america"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/foreign-policy-for-america/"
      },
    ],
    actions: [
      {
        action: "Join Us",
        url: "https://www.fp4america.org/join-us/"
      },
      {
        action: "Events",
        url: "https://www.fp4america.org/events/"
      },
      {
        action: "Resources",
        url: "https://www.fp4america.org/resources/",        
      },
      {
        action: "Scorecard: Check Your State's Score",
        url: "https://www.fp4america.org/scorecard/",
        category: "education"
      },
      {
        action: "Resources",
        url: "https://www.fp4america.org/resources/",
        category: "education"
      },
    ],
    description: "Foreign Policy for America is a national nonpartisan organization based in Washington, D.C. Together with our members, we’re working to strengthen support for principled U.S. leadership in the world.",
    scope: 'us',
    slug: 'fp4america'
  },
  {
    id: 62,
    name: "Lutheran Serices In America",
    url: 'https://lutheranservices.org/',
    ogImage: "https://lutheranservices.org/wp-content/uploads/2022/07/LSA_Hero_social.png",
    cause: ['faith', 'medicine', 'aid'],
    donate: 'https://lutheranservices.networkforgood.com/projects/46065-lutheran-services-in-america',
    social: [
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/LutheranServices"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/lutheran-services-in-america/"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/user/LutheranSrvcs"
      },
      {
        platform: 'Blog',
        url: "https://lutheranservices.org/blog/"
      }
    ],
    actions: [
      {
        action: "Take Action",
        url: "https://lutheranservices.org/take-action/"
      },
      {
        action: "Join Us",
        url: "https://lutheranservices.org/join-us/"
      },
      {
        action: "Explore Our Member Network",
        url: "https://lutheranservices.org/our-network/"
      },
      {
        action: "Events",
        url: "https://lutheranservices.org/events/"
      },
      {
        action: "More Ways to Give",
        url: "https://lutheranservices.org/give/",
        category: "donate"
      },
      {
        action: "ELCA responds to fake news",
        url: "https://www.youtube.com/watch?v=Liqz0VdZG1E"
      }
    ],
    description: "We lead one of the nation’s largest and most respected health and human services networks to empower people in America to lead their best lives - so all communities can thrive. Together, we support families, we empower children to grow up to be healthy, productive adults, and we enable veterans, refugees, older adults and people with disabilities to live with dignity and independence in the community of their choice.",
    scope: 'us',
    slug: 'lutheranservices'
  },
  {
    id: 63,
    name: "Indivisible",
    url: 'https://indivisible.org/',
    ogImage: "/Orgs/IndivisibleBanner.webp",
    cause: ['democracy'],
    donate: 'https://secure.actblue.com/donate/23-web-form',
    social: [
      {
        platform: 'BlueSky',
        url: "https://bsky.app/profile/indivisible.org"
      },
      {
        platform: 'Mastodon',
        url: "https://mastodon.social/@indivisibleteam"
      },
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/indivisibleguide/"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/indivisibleteam"
      },
      {
        platform: 'Medium',
        url: "https://indivisibleteam.medium.com/"
      }
    ],
    actions: [
      {
        action: "Take Action Now",
        url: "https://indivisible.org/take-action-now"
      },
      {
        action: "More Ways to Donate",
        url: "https://indivisible.org/how-to-give",
        category: "donate"
      },
      {
        action: "Guide",
        url: "https://indivisible.org/resource/guide",
        category: "education"
      },
      {
        action: "Support Our Candidates",
        url: "https://indivisible.org/our-candidates"
      },
      {
        action: "Resources",
        url: "https://indivisible.org/resources"
      },
      {
        action: "Find a Local Event",
        url: "https://www.mobilize.us/indivisible/"
      },
      {
        action: "Find or Create a Group",
        url: "https://indivisible.org/groups"
      },
      {
        action: "Store",
        url: "https://store.indivisible.org/",
        category: "money"
      }
    ],
    description: "Action by action, day by day, group by group, Indivisibles are remaking our democracy. Brought together by a practical guide to resist the Trump agenda, Indivisible is a movement of thousands of group leaders and more than a million members taking regular, iterative, and increasingly complex actions to resist the GOPs agenda, elect local champions, and fight for progressive policies.",
    scope: 'us',
    slug: 'indivisible'
  },
  {
    id: 64,
    name: "Moms Demand Action",
    url: 'https://momsdemandaction.org/',
    ogImage: "/Orgs/MomsDemandAction.webp",
    cause: ['guns'],
    donate: 'https://secure.actblue.com/donate/mda-web',
    social: [
      {
        platform: 'BlueSky',
        url: "https://bsky.app/profile/momsdemand.bsky.social"
      },
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/MomsDemandAction"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/momsdemand"
      },
    ],
    actions: [
      {
        action: "Act Now!",
        url: "https://momsdemandaction.org/act/"
      },
      {
        action: "Volunteer",
        url: "https://momsdemandaction.org/act/",
        category: "volunteer"
      },
      {
        action: "Resources",
        url: "https://momsdemandaction.org/resources/",
        category: "education"
      },
      {
        action: "Stories",
        url: "https://momsdemandaction.org/stories/",
        category: "education"
      },
      {
        action: "Store",
        url: "https://store.everytown.org/collections/moms-demand-action",
        category: "money"
      }
    ],
    description: "Moms Demand Action is a grassroots movement of Americans fighting for public safety measures that can protect people from gun violence. We pass stronger gun laws and work to close the loopholes that jeopardize the safety of our families.",
    scope: 'us',
    slug: 'momsdemandaction'
  },
  {
    id: 66,
    name: "Students Demand Action",
    url: 'https://studentsdemandaction.org/',
    ogImage: "https://studentsdemandaction.org/wp-content/uploads/sites/10/2024/12/SDA-Website-Meta-121024A.jpg",
    cause: ['guns'],
    donate: 'https://secure.actblue.com/donate/everytown-web-2024',
    social: [
      {
        platform: 'BlueSky',
        url: "https://bsky.app/profile/studentsdemand.bsky.social"
      },
      {
        platform: 'TikTok',
        url: "https://www.tiktok.com/@studentsdemand?lang=en"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/studentsdemand/"
      },
    ],
    actions: [
      {
        action: "Why You Should Get Involved",
        url: "https://studentsdemandaction.org/get-involved/#why-you-should-get-involved"
      },
      {
        action: "Organize A Students Demand Action Group",
        url: "https://studentsdemandaction.org/get-involved/#organize-students-demand-action-group",
        category: "volunteer"
      },
      {
        action: "Join the Calling Team",
        url: "https://forms.everytown.org/wyxeV-4AeUyr7eCMGPbqAg2",
        category: "volunteer"
      },
      {
        action: "Join the Texting Team",
        url: "https://forms.everytown.org/a/join-students-demand-action-text-team/",
        category: "volunteer"
      },
      {
        action: "Take Quick Actions",
        url: "https://studentsdemandaction.org/take-action/"
      },
      {
        action: "Events",
        url: "https://studentsdemandaction.org/events/"
      },
      {
        action: "Store",
        url: "https://store.everytown.org/collections/students-demand-action",
        category: "money"
      },
      {
        action: "Stories",
        url: "https://studentsdemandaction.org/stories/",
        category: "education"
      },
      {
        action: "Get News",
        url: "https://studentsdemandaction.org/news/",
        category: "education"
      }
    ],
    description: "We are young activists committed to ending gun violence. We are Students Demand Action. Students Demand Action started in 2016 as a pilot program and, with a sense of urgency, we launched it as a national initiative within two weeks of the Parkland shooting. Because what could be more urgent than fixing the errors in our system that have cost so many young people their lives? Students Demand Action now has more than 800 groups across the country and active volunteers in every state and D.C.",
    scope: 'us',
    slug: 'studentsdemandaction'
  },
  {
    id: 67,
    name: "Asian Americans Advancing Justice",
    url: 'https://www.advancingjustice-aajc.org/',
    ogImage: "https://www.advancingjustice-aajc.org/themes/custom/sunset/img/aajc_logo.svg",
    cause: ['civil-rights'],
    donate: 'https://www.advancingjustice-aajc.org/donate',
    social: [
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/advancingjusticeaajc"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/asian-american-justice-center"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/user/AdvancingEquality"
      },
      {
        platform: 'Blog',
        url: "https://medium.com/advancing-justice-aajc"
      }
    ],
    actions: [
      {
        action: "Get Involved - Resources, Opportunities, and More",
        url: "https://www.advancingjustice-aajc.org/get-involved"
      },
      {
        action: "Know Your Rights",
        url: "https://www.advancingjustice-aajc.org/know-your-rights",
        category: "education"
      },
      {
        action: "Asian Resource Hub",
        url: "https://asianresourcehub.org/resources/"
      },
      {
        action: "Our Programs",
        url: "https://www.advancingjustice-aajc.org/programs",
      },
      {
        action: "Report Hate",
        url: "https://www.standagainsthatred.org/",
      },
      {
        action: "Youth Leadership Summit - Three-day development program",
        url: "https://www.advancingjustice-aajc.org/youth-leadership-summit",
        category: "education"
      },
      {
        action: "Ways to Give",
        url: "https://www.advancingjustice-aajc.org/ways-give",
        category: "donate"
      },
      {
        action: "Voter Hotline - Assistance in nine Asian languages",
        url: "https://forms.everytown.org/a/join-students-demand-action-text-team/",
      },
      {
        action: "Volunteer for Voter Hotline",
        url: "https://forms.everytown.org/a/join-students-demand-action-text-team/",
        category: "volunteer"
      },
      {
        action: "News",
        url: "https://www.advancingjustice-aajc.org/news-media/in-the-news",
        category: "education"
      }
    ],
    description: "Asian Americans have been part of the American story since its earliest days, and are now the U.S.'s fastest-growing racial group with the potential and power to shape our nation and the policies that affect us. Our mission is to advance civil and human rights of Asian Americans and to build and promote a fair and equitable society for all.",
    scope: 'us',
    slug: 'aajc'
  },
  {
    id: 68,
    name: "NRDC",
    url: 'https://www.nrdc.org/',
    ogImage: "https://www.nrdc.org/sites/default/files/2023-05/nrdc-media-logo-teaser.png",
    cause: ['climate'],
    donate: 'https://action.nrdc.org/donation/2554-support-nrdc',
    social: [
      {
        platform: 'BlueSky',
        url: "https://bsky.app/profile/nrdc.org"
      },
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/nrdc.org"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/nrdc_org/"
      },
      {
        platform: 'LinkedIn',
        url: "https://www.linkedin.com/company/natural-resources-defense-council/"
      },
      {
        platform: 'TikTok',
        url: "https://www.tiktok.com/@nrdc.org"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/user/NRDCflix"
      },
    ],
    actions: [
      {
        action: "Add Your Voice - Petitions, Letters",
        url: "https://www.nrdc.org/take-action/add-your-voice"
      },
      {
        action: "Toolkist and How-Tos",
        url: "https://www.nrdc.org/take-action/toolkits",
      },
      {
        action: "Events",
        url: "https://www.nrdc.org/take-action/events"
      },
      {
        action: "Ways to Give",
        url: "https://www.nrdc.org/ways-give",
        category: "donate"
      },
      {
        action: "Climate Crisis 101",
        url: "https://www.nrdc.org/climate-crisis",
        category: "education"
      },
      {
        action: "What is Climate Change?",
        url: "https://www.nrdc.org/stories/what-climate-change",
        category: "education"
      },
      {
        action: "Effects of Climate Change",
        url: "https://www.nrdc.org/stories/what-are-effects-climate-change",
      },
      {
        action: "What are the Solutions to Climate Change?",
        url: "https://www.nrdc.org/stories/what-are-solutions-climate-change",
        category: "volunteer"
      },
      {
        action: "News and Commentary",
        url: "https://www.nrdc.org/news-commentary",
      },
      {
        action: "Data, Reports, and Resources",
        url: "https://www.nrdc.org/data-reports-resources",
      }
    ],
    description: "Be a Force for the Future. NRDC (the Natural Resources Defense Council) combines the power of more than 3 million members and online activists with the expertise of some 700 scientists, lawyers, and other environmental specialists to confront the climate crisis, protect the planet's wildlife and wild places, and to ensure the rights of all people to clean air, clean water, and healthy communities.",
    scope: 'global',
    slug: 'nrdc'
  },
  {
    id: 69,
    name: "Sunrise Movement",
    url: 'https://www.sunrisemovement.org/',
    ogImage: "https://www.sunrisemovement.org/wp-content/uploads/2023/09/share-sunrise-movement.jpg",
    cause: ['climate'],
    donate: 'https://www.sunrisemovement.org/donate/',
    social: [
      {
        platform: 'BlueSky',
        url: "https://bsky.app/profile/sunrisemvmt.bsky.social"
      },
      {
        platform: 'Instagram',
        url: "https://instagram.com/sunrisemvmt/"
      },
      {
        platform: 'TikTok',
        url: "https://tiktok.com/@sunrisemvmt/"
      },
      {
        platform: 'YouTube',
        url: "https://www.youtube.com/@sunrisemovement4046"
      },
    ],
    actions: [
      {
        action: "Become a Member",
        url: "https://www.sunrisemovement.org/become-a-member/"
      },
      {
        action: "Get Started",
        url: "https://www.sunrisemovement.org/take-action/#get-started"
      },
      {
        action: "Find Your Local Sunrise Hub",
        url: "https://www.sunrisemovement.org/take-action/#local",
      },
      {
        action: "Events",
        url: "https://www.sunrisemovement.org/take-action/#events"
      },
      {
        action: "Resources",
        url: "https://www.sunrisemovement.org/take-action/#resources",
      },
      {
        action: "Our Demands",
        url: "https://www.sunrisemovement.org/our-demands/",
      },
      {
        action: "Local and National Events on Mobilize",
        url: "https://www.mobilize.us/sunrisemovement/"
      },
      {
        action: "Resources - Guides, Toolkits, and More",
        url: "https://www.sunrisemovement.org/latest/#resources",
        category: "education"
      },
      {
        action: "Reports",
        url: "https://www.sunrisemovement.org/latest/#reports",
        category: "education"
      },
      {
        action: "News",
        url: "http://sunrisemovement.org/latest/#news",
        category: "education"
      }
    ],
    description: "We are the climate revolution. Together, we will force the government to end the era of fossil fuel elites, invest in Black, brown and working class communities, and create millions of good union jobs. We’re on a mission to put everyday people back in charge and build a world that works for all of us, now and for generations to come.",
    scope: 'global',
    slug: 'sunrisemovement'
  }, 
  {
    id: 70,
    name: "Democracy Forward",
    url: 'https://democracyforward.org/',
    ogImage: "https://democracyforward.org/wp-content/uploads/2022/07/Social-Share-1.jpg",
    cause: ['democracy'],
    donate: 'https://democracyforward.org/action/donate/',
    social: [
      {
        platform: 'BlueSky',
        url: "https://bsky.app/profile/democracyforward.org"
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/DemocracyFwd/"
      },
      {
        platform: 'Instagram',
        url: "https://www.instagram.com/democracyforward/"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/democracyforward/"
      },
      {
        platform: 'TikTok',
        url: "https://www.tiktok.com/@democracyfwd"
      },
      {
        platform: 'YouTube',
        url: "http://youtube.com/@democracyforward"
      },
    ],
    actions: [
      {
        action: "Learn About Our Strategy",
        url: "https://democracyforward.org/about/"
      },
      {
        action: "Reports & Data",
        url: "https://democracyforward.org/update-category/reports-data/",
        category: "education"
      },
      {
        action: "News & Updates",
        url: "https://democracyforward.org/updates/",
      },
      {
        action: "Shop",
        url: "https://store.democracyforward.org/",
        category: "money"
      }
    ],
    description: "We go to court for people and democracy. Democracy Forward is a national legal organization that advances democracy and social progress through litigation, policy and public education, and regulatory engagement.",
    scope: 'us',
    slug: 'democracyfwd'
  },   
]



  /** 
   * TODO: Website is currently buggy: check back later
   **/
  // {
  //   id: 64,
  //   name: "End Citizens United",
  //   url: 'https://admin.endcitizensunited.org/',
  //   ogImage: "https://admin.endcitizensunited.org/wp-content/uploads/2020/03/share.png",
  //   cause: ['democracy', 'voting'],
  //   donate: 'https://secure.actblue.com/donate/ecuwebsite',
  //   social: [
  //     {
  //       platform: 'BlueSky',
  //       url: "https://bsky.app/profile/endcitizensunited.bsky.social"
  //     },
  //     {
  //       platform: 'Facebook',
  //       url: "https://facebook.com/StopBigMoney"
  //     }
  //   ],
  //   actions: [
  //     {
  //       action: "Get Involved",
  //       url: "https://ecuactionfund.org/the-for-the-people-act/"
  //     },
  //   ],
  //   description: "To fix our democracy by getting big money out of politics and protecting the right to vote. We will work to end our rigged political system by electing reform champions, passing meaningful legislative reforms, and elevating these issues in the national conversation. We will work in partnership with these champions to overturn Citizens United, end the unlimited and undisclosed money in politics, and protect and expand the right to vote.",
  //   scope: 'us',
  //   slug: 'endcitizensunited'
  // },