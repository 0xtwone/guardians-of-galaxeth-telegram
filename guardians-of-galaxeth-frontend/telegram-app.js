const tg = window.Telegram.WebApp;

const telegramApp = {
    init: function() {
        try {
            updateDebug('Initializing Telegram WebApp');
            
            // 展开 WebApp
            tg.expand();
            updateDebug('WebApp expanded');

            // 游戏准备就绪
            tg.ready();
            updateDebug('TG App ready');

        } catch (error) {
            console.error('Error in init:', error);
            updateDebug('Init error: ' + error.message);
        }
    },

    sendScore: function(score) {
        try {
            updateDebug('Sending score: ' + score);
            tg.sendData(JSON.stringify({
                action: 'gameOver',
                score: score
            }));
        } catch (error) {
            console.error('Error sending score:', error);
            updateDebug('Score error: ' + error.message);
        }
    }
};

window.telegramApp = telegramApp; 