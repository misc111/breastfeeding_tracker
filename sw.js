self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('feed-tracker-v2').then(cache => cache.addAll([
            './',
            './index.html',
            './src/App.js',
            './src/utils/constants.js',
            './src/utils/feedLogic.js',
            './src/utils/timeFormatting.js',
            './src/utils/statistics.js',
            './src/hooks/useTimer.js',
            './src/hooks/useFeedingHistory.js',
            './src/components/TimerDisplay.js',
            './src/components/StatCard.js',
            './src/components/HistoryLog.js',
            './src/pages/TrackerPage.js',
            './src/pages/DailySummaryPage.js',
            './src/pages/MonthlySummaryPage.js',
            './src/pages/NotificationsPage.js'
        ]))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
