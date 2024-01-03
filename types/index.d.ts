interface AdvancedMatching {
  ct: string;
  country: string;
  db: string;
  em: string;
  fn: string;
  ge: string;
  ln: string;
  ph: string;
  st: string;
  zp: string;
}

export interface TagFunction {
  script?: string;
  noscript?: string;
  pageView?: string;
  track?: string;
  fbq?: string;
}

export interface TagsSnippetsProps {
  id?: string;
  advancedMatching?: AdvancedMatching;
  title?: string;
  data?: object;
  args?: any[];
}

export interface InitializeProps {
  id: string;
  advancedMatching?: AdvancedMatching;
  args?: any[];
}

export interface TrackProps {
  title: string;
  data: object;
}
