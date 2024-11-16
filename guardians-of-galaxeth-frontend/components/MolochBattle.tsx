import { FC } from 'react';

interface MolochBattleProps {
  userIdentifier?: string;
  communityPower?: number;
}

export const MolochBattle: FC<MolochBattleProps> = () => {
  return (
    <div>
      Battle content here
    </div>
  );
}; 