import { FC } from 'react';

interface CollectProps {
  pendingGETH: number;
  gethBalance: number;
  setGethBalance: (balance: number) => void;
  allies: string[];
}

export const Collect: FC<CollectProps> = ({
  pendingGETH,
  gethBalance,
  setGethBalance,
  allies
}) => {
  const handleCollect = () => {
    setGethBalance(gethBalance + pendingGETH);
  };

  return (
    <div>
      <p>Pending GETH: {pendingGETH}</p>
      <p>Balance: {gethBalance}</p>
      <p>Allies: {allies.join(', ')}</p>
      <button onClick={handleCollect}>Collect</button>
    </div>
  );
}; 