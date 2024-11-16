import { Contract } from 'ethers';
import { Dispatch, SetStateAction } from 'react';

declare global {
  interface Window {
    Telegram?: any;
    game?: any;
    Phaser?: any;
    ethereum?: any;
  }
}

export interface GameBoardProps {
  userIdentifier: string;
  initialStage: string;
  contract: Contract | null;
  pendingGETH: number;
  setPendingGETH: Dispatch<SetStateAction<number>>;
  isInCommunity: boolean;
}

export interface LoginProps {
  onLoginSuccess: (worldIdHash: string, walletAddress: string) => void;
}

export {}; 