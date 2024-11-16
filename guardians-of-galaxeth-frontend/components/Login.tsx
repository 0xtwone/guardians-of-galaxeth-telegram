import { FC } from 'react';
import type { LoginProps } from '@/types/global';

export const Login: FC<LoginProps> = ({ onLoginSuccess }) => {
  const handleLogin = async (): Promise<void> => {
    try {
      const worldIdHash = "test-hash";
      const walletAddress = "test-wallet";
      onLoginSuccess(worldIdHash, walletAddress);
    } catch (error: unknown) {
      console.error('Login error:', error);
    }
  };

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}; 