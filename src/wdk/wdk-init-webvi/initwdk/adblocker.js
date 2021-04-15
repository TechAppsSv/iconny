
const { ElectronBlocker, fullLists, Request } = require('@cliqz/adblocker-electron');

ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
    blocker.enableBlockingInSession(session.defaultSession);
  });

