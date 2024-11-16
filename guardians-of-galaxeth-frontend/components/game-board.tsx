import { FC } from 'react';
import type { GameBoardProps } from '@/types/global';

export const GameBoard: FC<GameBoardProps> = ({
  userIdentifier,
  initialStage,
  contract,
  pendingGETH,
  setPendingGETH,
  isInCommunity
}) => {
  return (
    <div>
      <div id="game"></div>
      <div id="loading-screen">
        <div className="loading-content">
          <img src="./assets/loading.gif" alt="Loading..." />
          <p>Loading...</p>
        </div>
      </div>
      <div id="start-screen" style={{ display: 'none' }}>
        <div className="start-content">
          <img src="./assets/start-screen.png" alt="Start Screen" />
          <button id="start-button">Start Game</button>
          <button id="connect-wallet">Connect Wallet</button>
        </div>
      </div>
      {isInCommunity && (
        <div>Community Member</div>
      )}
    </div>
  );
}; 