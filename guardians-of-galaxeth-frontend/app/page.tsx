'use client';

import { useState } from 'react';
import { Contract } from 'ethers';
import { Login } from '../components/Login';
import { GameBoard } from '../components/game-board';
import type { GameBoardProps, LoginProps } from '../types/global';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [playerAddress, setPlayerAddress] = useState('');
  const [isInCommunity, setIsInCommunity] = useState(false);
  const [pendingGETH, setPendingGETH] = useState(0);
  const [contract, setContract] = useState<Contract | null>(null);

  const handleLoginSuccess = (worldIdHash: string, walletAddress: string) => {
    setIsLoggedIn(true);
    setPlayerAddress(walletAddress);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : !isInCommunity ? (
        <div className="text-center">
          <p className="mb-4">Welcome! To start playing, you need to join the game by staking 0.00001 ETH.</p>
          <button
            onClick={() => setIsInCommunity(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Join Game
          </button>
        </div>
      ) : (
        <div className="w-full h-full">
          <GameBoard
            userIdentifier={playerAddress}
            initialStage="start"
            contract={contract}
            pendingGETH={pendingGETH}
            setPendingGETH={setPendingGETH}
            isInCommunity={isInCommunity}
          />
        </div>
      )}
    </div>
  );
} 