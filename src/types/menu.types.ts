// types/menu.types.ts
export enum ModalType {
    FINANCER = 'FINANCER',
    LABEL = 'LABEL',
    HISTORY = 'HISTORY',
    METAMASK = 'METAMASK',
  }
  
  // Interface para dados específicos de cada modal
  export interface ModalData {
    [ModalType.FINANCER]?: {
      initialAmount?: number;
      currency?: string;
    };
    [ModalType.LABEL]?: {
      selectedLabel?: string;
    };
    [ModalType.HISTORY]?: {
      dateRange?: {
        start: Date;
        end: Date;
      };
    };
    [ModalType.METAMASK]?: {
      walletAddress?: string;
    };
  }