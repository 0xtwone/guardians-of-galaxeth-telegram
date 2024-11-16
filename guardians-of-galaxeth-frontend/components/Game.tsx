'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Telegram?: any;
    game?: any;
    Phaser?: any;
  }
}

export default function Game() {
  useEffect(() => {
    const debugInfo = document.getElementById('debug-info');
    const updateDebug = (msg: string) => {
      if (debugInfo) {
        debugInfo.innerHTML += '<br>' + msg;
        console.log(msg);
      }
    };

    // 检查资源加载
    updateDebug('Checking resources...');
    
    if (window.Phaser) {
      updateDebug('Phaser loaded');
    }
    
    if (window.game) {
      updateDebug('Game object found');
    }

    // 错误处理
    window.onerror = function(msg, url, lineNo) {
      updateDebug(`Error: ${msg} at ${url}:${lineNo}`);
      return false;
    };
  }, []);

  return (
    <>
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
    </>
  );
} 