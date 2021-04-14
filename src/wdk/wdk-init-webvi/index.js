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





const { app, BrowserWindow, Menu , session, } = require('electron')

app.commandLine.appendSwitch('enable-features', 'WebContentsForceDark');
app.disableHardwareAcceleration ();
function createWindow () {
  
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,

   webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      enableBlinkFeatures: "WebContentsForceDark",
      
    
     

    }
  })

  const isMac = process.platform === 'darwin'
  const template = [
   
  
    {
      label: 'Editar',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
     ]
    },
     
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
 { role: 'reload'},      
     { role: 'forcereload' },
    { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]

    
    },
 
      
    
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(null)
  win.loadURL(`file://${__dirname}/init.html`,
  {userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 Edge/83.0.478.61'});

  
  
}


app.whenReady().then(createWindow)
