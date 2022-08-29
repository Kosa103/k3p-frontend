import { TOPMATCH } from "./constants";

export const storageScheme = {
  menus: [],
  mediaView: false
};

export const menuScheme = [
  {
    [TOPMATCH]: [
      {
        value: [
          { purchase: [] },
          { marketing: [] },
          { sales: [] },
          { logistic: [] },
          { hr: [] },
          { options: [] }
        ]
      },
      { platform: [] },
      {
        data: [/*
            { data: ['data', 'gdpr', 'sikkerhed'] },
            { design: [] },
            { package: [] },
            { acquisitions: [] }*/
        ]
      },
      { vic: [] },
      { onboard: [] },
    ]
  },
  {
    communication: [
      { design: ['packaging', 'photo', '3d', 'concepts'] },
      { pixels: ['web', 'some', 'app', 'video'] },
      { supertanker: ['strategy', 'concepts', 'content', 'frontdesk'] }
    ]
  },
  {
    cases: [
      { case1: [] },
      { case2: [] },
      { case3: [] },
      { case4: [] }
    ]
  },
  {
    gb: [
      { agency: [] },
      { marketing: [] },
      { partner: [] }
    ]
  }
];
