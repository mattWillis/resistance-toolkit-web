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
}

export const causes: Cause[] = [
  {
    id: 1,
    title: 'Disabled Rights / Accessibility',
    slug: 'accessibility',
    banner: 'Causes-Accessibility.png',
    emoji: '♿️',
    listImg: '/src/assets/Card-Disability-Img.png'
  },
  {
    id: 2,
    title: 'Civil & Human Rights / Racism',
    slug: 'civil-rights',
    banner: 'Causes-CivilRights.png',
    emoji: '⚖️',
    listImg: '/src/assets/Card-Civil-Img.png'    
  },
  {
    id: 3,
    title: 'Climate',
    slug: 'climate',
    banner: 'Causes-Climate.png',
    emoji: '🌡️',
    listImg: '/src/assets/Card-Climate-Img.png'   
  },
  {
    id: 4,
    title: 'Gun Control',
    slug: 'guns',
    banner: 'Causes-Guns.png',
    emoji: '🔫',
    listImg: '/src/assets/Card-Guns-Img.png'
  },  
  {
    id: 5,
    title: 'Immigration / Refugees',
    slug: 'immigration',
    banner: 'Causes-Immigration.png',
    emoji: '🚶',
    listImg: '/src/assets/Card-Immigration-Img.png'
  },
  {
    id: 6,
    title: 'LGBTQ+',
    slug: 'lgbtq',
    banner: 'Causes-LGBTQ.png',
    emoji: '🏳️‍🌈',
    listImg: '/src/assets/Card-LGBTQ-Img.png'    
  },
  {
    id: 7,
    title: 'Reproductive Rights',
    slug: 'reproductive',
    banner: 'Causes-Reproductive.png',
    emoji: '♀',
    listImg: '/src/assets/Card-Reproductive-Img.png'    
  },
  {
    id: 8,
    title: 'Sexism / Sexual Violence',
    slug: 'sexism',
    banner: 'Causes-Sexism.png',
    emoji: '💃',
    listImg: '/src/assets/Card-Sexism-Img.png'
  },  
  {
    id: 9,
    title: 'Voting Rights',
    slug: 'voting',
    banner: 'Causes-Voting.png',
    emoji: '🗳️',
    listImg: '/src/assets/Card-Voting-Img.png'
  },
  {
    id: 10,
    title: 'Wealth Inequality',
    slug: 'wealth',
    banner: 'Causes-Wealth.png',
    emoji: '💰',
    listImg: '/src/assets/Card-Wealth-Img.png'    
  },
  {
    id: 11,
    title: 'Foreign & Domestic Aid',
    slug: 'aid',
    banner: 'Causes-Aid.png',
    emoji: '⛑️',
    listImg: '/src/assets/Card-Aid-Img.png'
  },
  {
    id: 12,
    title: 'Faith',
    slug: 'faith',
    banner: 'Causes-Faith.png',
    emoji: '🙏 🧘‍♀️',
    listImg: '/src/assets/Card-Faith-Img.png'    
  },
  {
    id: 13,
    title: 'Medicine / Health',
    slug: 'medicine',
    banner: 'Causes-Medicine.png',
    emoji: '⚕️',
    listImg: '/src/assets/Card-Medicine-Img.png'
  },
  {
    id: 14,
    title: 'Science',
    slug: 'science',
    banner: 'Causes-Science.png',
    emoji: '👩‍🔬👨‍🔬',
    listImg: '/src/assets/Card-Science-Img.png'    
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
  actions?: {action: string, url: string}[];
}

export const orgs: Org[] = [
  {
    id: 1,
    name: "International Association of Accessibility Professionals",
    url: 'https://www.accessibilityassociation.org/s/',
    cause: ['accessibility'],
    description: 'A global association of organizations and professionals that have joined together to define, promote, and improve the accessibility of services, products, and environments for people with disabilities. Become part of the Global Accessibility Community.',
    scope: 'global',
    slug: 'iaaap'
  },
  {
    id: 2,
    name: "WebAIM",
    url: 'https://webaim.org/',
    cause: ['accessibility'],
    social: undefined,
    description: 'We have web accessibility in mind. Expanding the potential of the web for people with disabilities by empowering individuals and organizations to create accessible content.',
    scope: 'global',
    slug: 'webaim'
  },
  {
    id: 3,
    name: "Disability Rights Education & Defense Fund",
    url: 'https://dredf.org/',
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
        url: "https://www.youtube.com/@DredfOrg/"
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
    description: 'The ADA National Network provides information, guidance and training on how to implement the Americans with Disabilities Act (ADA) in order to support the mission of the ADA to “assure equality of opportunity, full participation, independent living, and economic self-sufficiency for individuals with disabilities.',
    scope: 'us',
    slug: 'adata'
  },  
  {
    id: 6,
    name: "Amnesty International",
    url: 'https://www.amnesty.org/',
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
        url: "https://www.amnesty.org/en/get-involved/take-action/"
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
    cause: ['civil-rights', 'immigration', 'lgbtq', 'reproductive', 'sexism', 'voting'],
    donate: "https://action.aclu.org/give/now",
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
        action: "Take Action",
        url: "https://www.aclu.org/action" 
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
    cause: ['civil-rights', 'wealth'],
    donate: "https://secure.splcenter.org/page/72074/donate/1",
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
        url: "https://www.splcenter.org/resources/guides/"
      },
      {
        action: "Hope Watch",
        url: "https://www.splcenter.org/resources/hope-watch/"
      },
      {
        action: "Resources",
        url: "https://www.splcenter.org/resources/"
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
        action: "Find Resources",
        url: "https://naacp.org/find-resources"
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
        url: "https://ncai.assetbank-server.com/assetbank-ncai/action/browseItems?categoryId=-1&categoryTypeId=2"
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
        action: "Take Action",
        url: "https://innocenceproject.org/take-action/"
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
    cause: ['climate'],
    donate: "https://climatenetwork.org/get-involved/support/",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/caneurope.bsky.social'
      },
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
        url: "https://climatenetwork.org/resource_type/publications/"
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
        action: "Resources",
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
        action: "Volunteer",
        url: "https://community.citizensclimate.org/new-volunteer"
      },
      {
        action: "CCL Online Community",
        url: "https://community.citizensclimate.org/home"
      },
      {
        action: "Join CCL",
        url: "https://citizensclimatelobby.org/join-citizens-climate-lobby/"
      },
    ],
    description: 'Citizens’ Climate Lobby (CCL) is a nonprofit, nonpartisan, grassroots advocacy climate change organization focused on national policies to address the national and global climate crisis. Consistently respectful, nonpartisan approach to climate education.',
    scope: 'us',
    slug: 'ccl'
  },
  {
    id: 15,
    name: "Everytown for Gun Safety",
    url: 'https://everytown.org/',
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
    ],
    actions: [
      {
        action: "Take Action",
        url: "https://www.everytown.org/actions/"
      },
      {
        action: "Your State (Found on the Homepage)",
        url: "https://everytownresearch.org/"
      },
      {
        action: "Everytown Labs",
        url: "https://everytownresearch.org/labs/"
      },

    ],
    description: "We’re the largest gun violence prevention organization in America—and we’re winning. Everytown starts with you, and it starts in your neighborhood. By introducing evidence-based solutions in every town, we can end gun violence.",
    scope: 'us',
    slug: 'everytown'
  },
  {
    id: 16,
    name: "Sandy Hook Promise",
    url: 'https://www.sandyhookpromise.org/',
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
    ],
    actions: [
      {
        action: "Get Involved",
        url: "https://www.sandyhookpromise.org/take-action/get-involved/"
      },
      {
        action: "Volunteer",
        url: "https://www.sandyhookpromise.org/take-action/volunteer/"
      },
      {
        action: "Make the Promise",
        url: "https://www.sandyhookpromise.org/take-action/promise/"
      },
      {
        action: "Advocate for Policy",
        url: "https://actionfund.sandyhookpromise.org/"
      },
    ],
    description: 'Sandy Hook Promise is a national nonprofit organization founded and led by several family members whose loved ones were killed at Sandy Hook Elementary School. Our intent is to honor all victims of gun violence by turning our tragedy into a moment of transformation. Text `PROMISE` to 79775',
    scope: 'us',
    slug: 'sandy-hook'
  },
  {
    id: 17,
    name: "Giffords",
    url: 'https://giffords.org/',
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
        action: "Take Action",
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
        action: "Courage Fellows",
        url: "https://giffords.org/action/courage-fellows/"
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
    cause: ['immigration'],
    donate: "https://aijustice.org/donate/",
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
        action: "Volunteer",
        url: "https://aijustice.org/volunteer/"
      },
      {
        action: "Events",
        url: "https://aijustice.org/events/"
      },
      {
        action: "Advocacy",
        url: "https://aijustice.org/advocacy/"
      },
      {
        action: "SB 1718 Resources",
        url: "https://aijustice.org/sb-1718-resources/"
      }
    ],
    description: 'Americans for Immigrant Justice (AI Justice) is an award-winning non-profit law firm that fights for justice for immigrants through a combination of direct representation, impact litigation, advocacy and outreach.',
    scope: 'us',
    slug: 'aijustice'
  },
  {
    id: 19,
    name: "American Immigration Council",
    url: 'https://www.americanimmigrationcouncil.org/',
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
        url: "https://www.americanimmigrationcouncil.org/get-involved"
      },
      {
        action: "Immigration Impact: the only news site exclusively committed to covering immigration issues.",
        url: "https://immigrationimpact.com/"
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
    cause: ['immigration'],
    donate: "https://www.theyoungcenter.org/donate",
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
        url: "https://www.theyoungcenter.org/how-to-help-immigrant-children"
      },
      {
        action: "Volunteer",
        url: "https://clienttrack.eccovia.com/portal/default.aspx?CustomerID=TYC"
      },
      {
        action: "Become a Young Center Ambassador",
        url: "https://www.theyoungcenter.org/ambassadors"
      },
      {
        action: "Refer a Child",
        url: "https://www.theyoungcenter.org/refer-a-child"
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
    cause: ['lgbtq'],
    donate: "https://give.glaad.org/page/76113/donate/1",
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
        action: "Volunteer",
        url: "https://act.glaad.org/page/77842/survey/1"
      },
      {
        action: "Events",
        url: "https://glaad.org/events/"
      },
      {
        action: "Ways to Give",
        url: "https://glaad.org/ways-to-support-glaad/"
      },
      {
        action: "Mailing List",
        url: "https://act.glaad.org/page/52123/subscribe/1"
      },
    ],
    description: 'Founded in 1985, GLAAD is a non-profit organization focused on LGBTQ advocacy and cultural change. GLAAD works to ensure fair, accurate, and inclusive representation and creates national and local programs that advance LGBTQ acceptance.',
    scope: 'global',
    slug: 'glaad'
  },
  {
    id: 22,
    name: "Sylvia Rivera Law Project",
    url: 'https://srlp.org/',
    cause: ['lgbtq'],
    donate: "https://srlp.org/donate/",
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
        action: "Volunteer",
        url: "https://srlp.org/get-involved/volunteer/"
      },
      {
        action: "Events",
        url: "https://srlp.org/calendar/"
      },
      {
        action: "Campaigns",
        url: "https://srlp.org/action/"
      },
      {
        action: "Trainings",
        url: "https://srlp.org/trainings/"
      },
      {
        action: "Become a Member",
        url: "https://srlp.org/get-involved/become-a-member/"
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
    cause: ['lgbtq'],
    donate: "https://www.elevatedaccess.org/donate",
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
        url: "https://www.elevatedaccess.org/get-involved/ways-to-help"
      },
      {
        action: "Volunteer",
        url: "https://www.elevatedaccess.org/contact"
      },
    ],
    description: 'We are a non-profit organization that enables people to access healthcare by providing flights on private planes at no cost. Our volunteer pilot network transports clients seeking abortion or gender-affirming care across the United States.',
    scope: 'us',
    slug: 'elevatedaccess'
  },
  {
    id: 24,
    name: "Lambda Legal",
    url: 'https://www.lambdalegal.org',
    cause: ['lgbtq'],
    donate: "https://lambdalegal.org/ways-to-give/",
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
        url: "https://lambdalegal.org/events/"
      },
      {
        action: "Peer-to-Peer Fundraising",
        url: "https://lambdalegal.org/fundraise/"
      },
      {
        action: "Ways to Give",
        url: "https://lambdalegal.org/ways-to-give/"
      }
    ],
    description: 'Lambda Legal’s lawyers have won precedent-setting civil rights cases on everything from marriage equality to expressions of gender identity to health care discrimination. We never charge our clients for legal representation or advocacy, nor do we receive any government funding.',
    scope: 'us',
    slug: 'lambdalegal'
  },
  {
    id: 25,
    name: "Planed Parenthood",
    url: 'https://www.plannedparenthood.org/',
    cause: ['reproductive', 'medicine'],
    donate: "https://www.plannedparenthood.org/get-involved/other-ways-give",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/ppfa.bsky.social'
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
        url: "https://www.plannedparenthood.org/get-involved"
      },
      {
        action: "Volunteer",
        url: "https://www.weareplannedparenthood.org/pGPUfPzxL0-W-oG8DCQ24w2?ms=3NALz2111W1N1V&sourceid=1010711&_ga=2.190745064.2122819497.1651591791-1277393218.1630613411&_gl=1*1whxp5g*_gcl_au*MTkxNjUwNjM2MS4xNzM3Nzc5MDE2*_ga*MTYwNjQ2ODY3NS4xNzM3Nzc5MDE2*_ga_ENXC8KHJL8*MTczODc3MTQ3Ni4zLjEuMTczODc3MTY0NS4wLjAuMjA4MzU1ODcxNg.."
      },
      {
        action: "Jobs and Work",
        url: "https://www.plannedparenthood.org/get-involved/jobs-and-volunteering"
      },
      {
        action: "Shop",
        url: "https://marketplace.plannedparenthood.org/"
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
    cause: ['reproductive', 'sexism'],
    donate: "https://secure.actblue.com/donate/donate-to-emilys-list",
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
        url: "https://emilyslist.org/donate/all-candidates-2025/"
      },
      {
        action: "Support State and Local Candidates",
        url: "https://emilyslist.org/state-and-local-candidates/"
      },
      {
        action: "Events",
        url: "https://emilyslist.org/events/"
      },
      {
        action: "Store",
        url: "https://store.emilyslist.org/"
      },
      {
        action: "Train to Run for Office - and Win",
        url: "https://trainingcenter.emilyslist.org/"
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
    cause: ['reproductive', 'medicine'],
    donate: "https://reproductiverights.org/get-involved/support-us/",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/repro-rights.bsky.social'
      },
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
        url: "https://reproductiverights.org/get-involved/act/"
      },
      {
        action: "Learn",
        url: "https://reproductiverights.org/get-involved/learn/"
      },
      {
        action: "Get Involved",
        url: "https://reproductiverights.org/get-involved/"
      },
      {
        action: "Resources",
        url: "https://reproductiverights.org/get-involved/featured-resources/"
      },
      {
        action: "Lawyers Network",
        url: "https://reproductiverights.org/lawyers-network/"
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
    cause: ['reproductive'],
    donate: "https://reproductivefreedomforall.org/donate/",
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/reproductivefreedomforall.bsky.social'
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
        url: "https://reproductivefreedomforall.org/take-action/"
      },
      {
        action: "Volunteer",
        url: "https://act.reproductivefreedomforall.org/a/nat-volunteers-23?ms=web_org_gen_20241106takeactionbanner"
      },
      {
        action: "Demand Abortion Access Now",
        url: "https://act.reproductivefreedomforall.org/a/abortion-access-now"
      },
      {
        action: "Add Your Name: We Need Court Reform!",
        url: "https://act.reproductivefreedomforall.org/a/add-your-name-we-need-court-reform"
      },
      {
        action: "Other Ways to Donate",
        url: "https://reproductivefreedomforall.org/donate/other-ways-to-donate/"
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
    cause: ['sexism'],
    social: undefined,
    description: 'UN Women is the UN organization delivering programmes, policies and standards that uphold women’s human rights and ensure that every woman and girl lives up to her full potential.',
    scope: 'global',
    slug: 'unwomen'
  },
  {
    id: 29,
    name: "Global Fund for Women",
    url: 'https://www.globalfundforwomen.org/',
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
        url: "https://www.globalfundforwomen.org/champions-for-equality/"
      },
    ],
    description: 'We envision a world where movements for gender justice have transformed power and privilege for a few into equity and equality for all. We fund bold, ambitious, and expansive gender justice movements to create meaningful change that will last beyond our lifetimes.',
    scope: 'global',
    slug: 'globalfundforwomen'
  },
  {
    id: 30,
    name: "Advocates for Youth",
    url: 'https://www.advocatesforyouth.org/',
    cause: ['sexism', 'medicine', 'lgbtq'],
    donate: "https://actionnetwork.org/fundraising/donate-to-advocates-for-youth-3",
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
        url: "https://www.advocatesforyouth.org/afy-action-center/"
      },
      {
        action: "Events",
        url: "https://www.advocatesforyouth.org/events/"
      },
      {
        action: "Campaigns",
        url: "https://www.advocatesforyouth.org/our-campaigns/"
      },
      {
        action: "Resources and Tools",
        url: "https://www.advocatesforyouth.org/resources-tools/"
      },
      {
        action: "Know Your IX",
        url: "https://www.advocatesforyouth.org/campaigns/know-your-ix/"
      },
      {
        action: "Shop",
        url: "https://shop.advocatesforyouth.org/"
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
    cause: ['voting'],
    donate: "https://secure.actblue.com/donate/defend-the-vote-1",
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
        url: "https://wedefendthevote.org/scorecard/"
      },
      {
        action: "Support Our Endorsed Politicians",
        url: "https://wedefendthevote.org/endorsements/"
      },
      {
        action: "Strategies",
        url: "https://wedefendthevote.org/strategies/"
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
    cause: ['voting'],
    donate: "https://www.vote.org/donate/",
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
        url: "https://www.freedomtovoteact.org/"
      },
      {
        action: "Vote.org on WhatsApp Bot",
        url: "https://www.vote.org/whatsapp/"
      },
      {
        action: "Sign Up for Election Reminders",
        url: "https://www.vote.org/election-reminders/"
      },
      {
        action: "Am I Registered to Vote?",
        url: "https://www.vote.org/am-i-registered-to-vote/"
      },
      {
        action: "Register to Vote",
        url: "https://www.vote.org/register-to-vote/"
      },
      {
        action: "Vote by Mail",
        url: "https://www.vote.org/absentee-ballot/"
      },
      {
        action: "Find Your Polling Place",
        url: "https://www.vote.org/polling-place-locator/"
      },
      {
        action: "Add Tools to Your Website",
        url: "https://www.vote.org/technology/"
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
    cause: ['voting'],
    donate: "https://secure.actblue.com/donate/voters-of-tomorrow-action-1",
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
        action: "Volunteer",
        url: "https://www.mobilize.us/votersoftomorrow/"
      },
      {
        action: "VotingHub: Make your voice heard",
        url: "https://votersoftomorrow.org/vote/"
      },
      {
        action: "Find or Start a Chapter",
        url: "https://votersoftomorrow.org/chapters/"
      },
      {
        action: "Store",
        url: "https://store.votersoftomorrow.org/"
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
    cause: ['voting', "democracy"],
    donate: "https://www.commoncause.org/donate/",
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
        url: "https://www.commoncause.org/take-action/"
      },
      {
        action: "Volunteer",
        url: "https://actionnetwork.org/forms/join-the-common-cause-action-team-slack/"
      },
      {
        action: "Resource Library",
        url: "https://www.commoncause.org/research-and-resources/"
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
    cause: ['voting', 'democracy'],
    donate: "https://secure.actblue.com/contribute/page/vote_vets_pac",
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
        action: "Find our Endorsed Candidates",
        url: "https://votevets.org/candidates"
      },
      {
        action: "Shop",
        url: "https://shop.votevets.org/"
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
    cause: ['wealth', 'aid'],
    donate: "https://give.oxfamamerica.org/page/63259/donate/1",
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
        action: "Petition: Protect All U.S. Foreign Aid",
        url: "https://act.oxfamamerica.org/page/78720/petition/1"
      },
      {
        action: "Take Action",
        url: "https://www.oxfamamerica.org/take-action/"
      },
      {
        action: "Volunteer",
        url: "https://www.oxfamamerica.org/take-action/volunteer/"
      },
      {
        action: "Be a Fundraiser",
        url: "https://www.oxfamamerica.org/take-action/be-a-fundraiser/"
      },
      {
        action: "Host am Oxfam Hunger Banquet",
        url: "https://www.oxfamamerica.org/take-action/oxfam-hunger-banquet/"
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
    cause: ['wealth'],
    actions: [
      {
        action: "Become a Patriotic Millionaire: (Minimum annual dues are $10,000)",
        url: "https://patrioticmillionaires.org/become-a-member/"
      },
      {
        action: "I’m not a millionaire, but I want to help. How can I get involved?",
        url: "https://secure.actblue.com/donate/pm_website"
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
    cause: ['wealth'],
    donate: "https://www.inequalitymedia.org/donate",
    actions: [
      {
        action: "Wealth and Poverty Course",
        url: "https://www.inequalitymedia.org/wealth-and-poverty"
      },
      {
        action: "Mailing List",
        url: "https://www.inequalitymedia.org/get-updates"
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/inequalitymedia.bsky.social'
      }
    ],
    description: "The top 1% of America holds 40% of the wealth. It's time the public understands how this happened and what we can do about it. Our ultimate vision is a United States where active participation by informed citizens restores the balance of power in our Democracy and creates an economy where gains are widely shared.",
    scope: 'us',
    slug: 'inequalitymedia'
  },
  {
    id: 39,
    name: "Citizens for Tax Justice",
    url: 'https://ctj.org/',
    cause: ['wealth'],
    donate: "https://ctj.org/donate/",
    actions: [
      {
        action: "Advocacy Toolkit: Ready to join the fight for tax justice?",
        url: "https://ctj.org/tools/advocacy-toolkit-you-can-use/"
      },
      {
        action: "Resources",
        url: "https://ctj.org/resources/"
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
    cause: ['wealth'],
    donate: "https://secure.actblue.com/donate/epi",
    actions: [
      {
        action: "Federal Policy Watch: Tracking how the Trump administration, Congress, and the courts are affecting workers' quality of life.",
        url: "https://www.epi.org/policywatch/"
      },
      {
        action: "Social Media Toolkit",
        url: "https://www.epi.org/resources/social-media-toolkit/"
      },
      {
        action: "The State of Working America Data Library: comprehensive historical data on the American labor force.",
        url: "https://www.epi.org/data/"
      },
      {
        action: "Resources",
        url: "https://www.epi.org/resources/"
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/epi.org'
      },
      {
        platform: "Blog",
        url: "https://www.epi.org/blog/"
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
    cause: ['immigration'],
    donate: "https://secured.globalrefuge.org/page/78592/donate/1",
    actions: [
      {
        action: "Volunteer Opportunities",
        url: "https://www.globalrefuge.org/get-involved/volunteer/"
      },
      {
        action: "Corporate Giving",
        url: "https://www.globalrefuge.org/get-involved/corporate-giving-and-involvement/"
      },
      {
        action: "Create a Circle of Welcome for a New American family.",
        url: "https://www.globalrefuge.org/get-involved/circleofwelcome/"
      },
      {
        action: "Advocate with Us: Raise your voice alongside those seeking safety",
        url: "https://www.globalrefuge.org/get-involved/advocate-with-us/"
      },
      {
        action: "Combatting Disinformation",
        url: "https://www.globalrefuge.org/get-involved/advocate-with-us/disinformation/"
      },
      {
        action: "Faith in Action: Your faith community can help welcome immigrants and refugees.",
        url: "https://www.globalrefuge.org/get-involved/faith-in-action/"
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/globalrefuge.bsky.social'
      },
      {
        platform: 'Blog',
        url: "https://www.globalrefuge.org/blog/"
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
    cause: ['immigration', "faith"],
    donate: "https://give.lwr.org/page/123179/donate/1",
    actions: [
      {
        action: "Volunteer to quilt",
        url: "https://lwr.org/quilts"
      },
      {
        action: "Make LWR Kits",
        url: "https://lwr.org/kits"
      },
      {
        action: "Find an Ingathering",
        url: "https://ingathering.lwr.org/"
      },
      {
        action: "Resource Library",
        url: "https://lwr.org/downloads"
      },
      {
        action: "LWR Farmers Market Coffee",
        url: "https://lwr.org/coffee"
      },
      {
        action: "Mailing List - News emergencies on ways to give, and important communications",
        url: "https://lwr.org/sign-our-emails"
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
    cause: ['faith', 'lgbtq', 'reproductive'],
    donate: "https://support.interfaithalliance.org/a/donate",
    actions: [
      {
        action: "Mailing List - News, Resources, Advocacy Opportunities",
        url: "https://support.interfaithalliance.org/a/signup"
      },
      {
        action: "Tell Your Representative: Vote NO On SAVE",
        url: "https://support.interfaithalliance.org/a/no-on-save"
      },
      {
        action: "Tell Your Representative: Don't Bring Public School Chaplains to my State",
        url: "https://support.interfaithalliance.org/a/chaplain_petition?sourceid=1108072"
      },
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
    description: "We strive to build a resilient, inclusive democracy, which respects the inherent dignity of all people, affords each person the freedoms of belief and religious practice, and guarantees that all have the opportunity to thrive. Interfaith Alliance forges powerful alliances among people of diverse faiths and beliefs to build a resilient, inclusive democracy and fulfill America’s promise of religious freedom and civil rights not just for some, but for all.",
    scope: 'us',
    slug: 'interfaithalliance'
  },
  {
    id: 44,
    name: "Interfaith America",
    url: 'https://www.interfaithamerica.org/',
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
        url: "https://www.interfaithamerica.org/curriculum/"
      },
      {
        action: 'The Learning & Action Bridge: Customized Recommendations for high-impact opportunities.',
        url: "https://www.interfaithamerica.org/lab/"
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
    id: 45,
    name: "North American Interfaith Network",
    url: 'https://nain.org/',
    cause: ['faith'],
    donate: 'https://nain.org/donate/',
    actions: [
      {
        action: 'Programs',
        url: 'https://nain.org/programs/'
      },
      {
        action: 'Membership',
        url: 'https://nain.org/join-us/'
      }
    ],
    social: [
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/NAINConnect'
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/naininterfaith/'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/north-american-interfaith-network'
      }
    ],
    description: "We Exist: to facilitate communication among and the mutual strengthening of interfaith organizations, to affirm humanity’s diverse and historic spiritual resources and bring them to bear on contemporary global, national, regional and local issues, to foster the work of interfaith organizations and provide networking possibilities.",
    scope: 'us',
    slug: 'nain'
  },
  {
    id: 46,
    name: "United Religions Initiative",
    url: 'https://www.uri.org/',
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
    cause: ['science', 'climate', 'civil-rights'],
    donate: 'https://secure.ucsusa.org/onlineactions/dR5QqmX2uUCLCFD1KkVEzg2',
    actions: [
      {
        action: '3 Ways to Take Action',
        url: 'https://www.ucsusa.org/take-action'
      },
      {
        action: "Tell Congress: Stop Trump’s illegal and unconstitutional power grab",
        url: "https://secure.ucsusa.org/a/2025-stop-trumps-illegal-unconstitutional-power-grab"
      },
      {
        action: "Demand that Congress protect federal scientists and research.",
        url: "https://secure.ucsusa.org/a/2024-save-science-save-lives"
      },
      {
        action: "Tell Congress: No more nuclear weapons testing.",
        url: "https://secure.ucsusa.org/a/2024-tell-congress-no-more-nuclear-weapons-testing"
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
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/company/uriglobal'
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
    cause: ['science'],
    donate: 'https://www.aaas.org/support',
    actions: [
      {
        action: 'Membership',
        url: 'https://www.aaas.org/membership'
      },
      {
        action: 'Events',
        url: 'https://www.aaas.org/events'
      },
      {
        action: 'Fellowships',
        url: 'https://www.aaas.org/fellowships'
      },
      {
        action: 'Training Sessions',
        url: 'https://www.aaas.org/page/training-sessions'
      }
    ],
    social: [
      {
        platform: 'BlueSky',
        url: 'https://bsky.app/profile/hps-aaas.bsky.social'
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
    url: 'https://www.sciencecoalition.org/',
    cause: ['science'],
    actions: [
      {
        action: 'How to Take Action',
        url: 'https://www.sciencecoalition.org/why-science-matters/#take-action'
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
    description: "Our mission is more than words. We always aim to prevent and relieve suffering with every action. The Red Cross shelters, feeds and provides comfort to people affected by disasters; supplies about 40% of the nation’s blood; teaches skills that save lives; distributes international humanitarian aid; and supports veterans, military members and their families.",
    scope: 'us',
    slug: 'americanredcross'
  },
  {
    id: 51,
    name: "International Committee of the Red Cross",
    url: 'https://www.icrc.org/en',
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
  {
    id: 52,
    name: "UNICEF",
    url: 'https://www.unicef.org',
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
    description: "UNICEF, the United Nations agency for children, works to protect the rights of every child, especially the most disadvantaged and those hardest to reach. Across more than 190 countries and territories, we do whatever it takes to help children survive, thrive and fulfil their potential.",
    scope: 'global',
    slug: 'unicef'
  },
  {
    id: 53,
    name: "World Health Organization",
    url: 'https://www.who.int/',
    cause: ['aid'],
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
    description: "Founded in 1948, WHO is the United Nations agency that connects nations, partners and people to promote health, keep the world safe and serve the vulnerable – so everyone, everywhere can attain the highest level of health.",
    scope: 'global',
    slug: 'who'
  },
  {
    id: 54,
    name: "Islamic Relief USA",
    url: 'https://irusa.org/',
    cause: ['aid', 'faith'],
    donate: 'https://donate.irusa.org/campaign/657729/donate',
    social: [
      {
        platform: 'Facebook',
        url: "https://www.facebook.com/IslamicReliefUSA/"
      },
    ],
    actions: [
      {
        action: "Volunteer",
        url: "https://irusa.org/volunteer/"
      },
      {
        action: "Creative Giving",
        url: "https://irusa.org/creative-giving/"
      },
      {
        action: "Advocacy",
        url: "https://para.irusa.org/"
      },
      {
        action: "Create a Fundraiser",
        url: "https://irusa.org/iraise/"
      },
      {
        action: "Create a Will",
        url: "https://irusa.org/wills/"
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
        url: "https://www.mausa.org/nights-of-power/"
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
    cause: ['aid', 'faith', 'immigration'],
    donate: 'https://www.catholiccharitiesusa.org/?form=createhope24',
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
        url: "https://www.catholiccharitiesusa.org/advocacy-1/action-center/#/"
      },
      {
        action: "Advocacy - Resources and Tools",
        url: "https://www.catholiccharitiesusa.org/advocacy/"
      },
      {
        action: "Parish Engagement",
        url: "https://www.catholiccharitiesusa.org/what-we-do/parish-engagement/"
      }
    ],
    description: "The mission of Catholic Charities is to provide service to people, families and communities in need, to advocate for justice in social structures and to call the entire church and all people of good will to do the same.",
    scope: 'us',
    slug: 'catholiccharitiesusa'
  },

]

