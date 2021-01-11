const electron = require('electron')
const url = require('url');
const path = require('path');
const { webFrame } = require('electron')
let { fetch } = require('cross-fetch');
const { ElectronBlocker, fullLists, Request } = require('@cliqz/adblocker-electron');
ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
  blocker.enableBlockingInSession(session.defaultSession);
});





const { app, BrowserWindow, Menu , webContents, session } = require('electron')


function createWindow () {
  
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
   webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    
     

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
   // { role: 'reload'},      
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
  Menu.setApplicationMenu(menu)
  win.loadURL(`file://${__dirname}/init.html`,
  {userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4261.0 Safari/537.36'});

  
  
}


app.whenReady().then(createWindow)
