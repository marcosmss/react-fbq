
export interface AdvancedMatching {
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

interface InitializeProps {
    id: string;
    advancedMatching?: AdvancedMatching;
}


export function initialize(InitializeProps): void;