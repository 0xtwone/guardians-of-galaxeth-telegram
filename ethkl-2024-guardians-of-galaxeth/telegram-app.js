const tg = window.Telegram.WebApp;

const telegramApp = {
    init: function() {
        try {
            console.log('Initializing Telegram WebApp');
            // 展开 WebApp
            tg.expand();
            
            // 设置主题色
            if (tg.themeParams) {
                console.log('Theme params found:', tg.themeParams);
                document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);
                document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color);
            } else {
                console.log('No theme params found');
            }

            // 游戏准备就绪
            tg.ready();
            console.log('Telegram WebApp ready');
            
            // 更新调试信息
            if (window.updateDebug) {
                window.updateDebug('TG App initialized');
            }
        } catch (error) {
            console.error('Error in init:', error);
            if (window.updateDebug) {
                window.updateDebug('Error: ' + error.message);
            }
        }
    },

    sendScore: function(score) {
        try {
            console.log('Sending score:', score);
            tg.sendData(JSON.stringify({
                action: 'gameOver',
                score: score
            }));
        } catch (error) {
            console.error('Error sending score:', error);
            if (window.updateDebug) {
                window.updateDebug('Score error: ' + error.message);
            }
        }
    }
};

window.telegramApp = telegramApp; 