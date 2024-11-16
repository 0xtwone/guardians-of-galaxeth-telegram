import { FC } from 'react';

interface Artifact {
  id: string;
  name: string;
}

interface AllianceProps {
  communityPower: number;
  artifacts: Artifact[];
}

export const Alliance: FC<AllianceProps> = ({ communityPower, artifacts }) => {
  return (
    <div>
      <p>Community Power: {communityPower}</p>
      <ul>
        {artifacts.map(artifact => (
          <li key={artifact.id}>{artifact.name}</li>
        ))}
      </ul>
    </div>
  );
}; 