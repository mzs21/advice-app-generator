if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/advice-app-generator/sw.js', { scope: '/advice-app-generator/' })})}