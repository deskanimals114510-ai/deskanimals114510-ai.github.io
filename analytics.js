// GA4計測(DALポータル、2026-10-16追加)。ポータル専用のストリームは作らず、診断ツール群プロパティのMBTI診断ストリーム
// (同じgithub.ioドメイン)に送る。ポータルのページはpagePath「/」で区別できる。
// ローカル開発サーバーからのアクセスは除外し、本番GA4へのダミーpageview記録を防ぐ。
(function () {
  const GA_MEASUREMENT_ID = 'G-GH850PJWLP';
  const isLocalDev = ['localhost', '127.0.0.1', ''].includes(location.hostname);
  if (!GA_MEASUREMENT_ID || isLocalDev) return;
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
})();
