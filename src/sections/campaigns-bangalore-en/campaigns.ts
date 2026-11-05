export type Campaign = {
  path: string;
  zohoFormActionUrl: string;
};

export const CAMPAIGNS: Record<'search' | 'pmax' | 'dgen' | 'meta', Campaign> = {
  search: {
    path: '/campaigns/in/en/ivf-treatment-bangalore',
    zohoFormActionUrl:
      'https://forms.zohopublic.com/GarbhaGudiIVFCentre/form/SearchCampaignGG/formperma/fMKiMIyJOyhD6xn66Rt_-eneCmuC8EfmQWjCppEnbB4/htmlRecords/submit',
  },
  pmax: {
    path: '/campaigns/in/en/ivf-pm',
    zohoFormActionUrl:
      'https://forms.zohopublic.com/GarbhaGudiIVFCentre/form/PMax/formperma/y5gt1s1hQHxk-f-Zaa9rbnqT_h4ocyKf-Txb-cj-A5w/htmlRecords/submit',
  },
  dgen: {
    path: '/campaigns/in/en/ivf-dg',
    zohoFormActionUrl:
      'https://forms.zohopublic.com/GarbhaGudiIVFCentre/form/DGen/formperma/1s-jfjltc6PljfsUTvclsjBIj3vUO3Mq7nMtgRc-PAY/htmlRecords/submit',
  },
  meta: {
    path: '/campaigns/in/en/ivf-meta',
    zohoFormActionUrl:
      'https://forms.zohopublic.com/GarbhaGudiIVFCentre/form/Meta/formperma/cZbAJGK1NYKHzpATWr4IJSJ85pqDZgSoq4peoeAZknU/htmlRecords/submit',
  },
};

export const thankYouPath = (campaign: Campaign) => `${campaign.path}/thank-you`;
