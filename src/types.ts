export type MemberInfo = {
  speaker: string;
  title: string;
};

export const openingStates = ['opening', 'waiting', 'thankyou'] as const;
export type OpeningPageState = {
  state: (typeof openingStates)[number];
};

export type SongNameState = {
  name: string;
};
