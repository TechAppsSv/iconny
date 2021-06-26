// The Munich Proyect
// This code is based in ElectronJS.org
const electron = require('electron')
const url = require('url');
const path = require('path');
const { webFrame } = require('electron')
let { fetch } = require('cross-fetch');
const { ElectronBlocker, fullLists, Request } = require('@cliqz/adblocker-electron');
ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
  blocker.enableBlockingInSession(session.defaultSession);
});


// ./main.js




const { app, BrowserWindow, Menu , session,  } = require('electron')
const contextMenu = require('electron-context-menu');
("web-contents-created", (e, contents) => {
  contextMenu({
     window: contents,
     showSaveImageAs: true,
     showInspectElement: false
  });
})




contextMenu({
  prepend: (params, WebViewTag) => [
      {
          role: "zoomIn"
      },
      {
          role: "zoomOut"
      },
  ],
});

app.disableHardwareAcceleration ();

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true
    }
  })

  mainWindow.loadFile('../../munich-interface/init/init.html')
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
  
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


