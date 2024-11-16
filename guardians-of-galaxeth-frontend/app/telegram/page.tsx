'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// 动态导入游戏组件，禁用 SSR
const Game = dynamic(() => import('../../components/Game'), { ssr: false });

export default function TelegramPage() {
  useEffect(() => {
    // 初始化 Telegram WebApp
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.expand();
      tg.ready();
    }
  }, []);

  return (
    <div>
      <Game />
      <div id="debug-info" style={{
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        color: 'white',
        background: 'rgba(0,0,0,0.5)',
        padding: '5px',
        zIndex: 1000
      }}>
        Loading...
      </div>
    </div>
  );
} 