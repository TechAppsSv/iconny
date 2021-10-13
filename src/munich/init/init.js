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

// Only activate for linux and mac in windows activate this code line is poor functionally
// app.disableHardwareAcceleration ();
let newProductWindow;
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

  mainWindow.loadURL(`file://${__dirname}/../../munich-interface/init/presentation.html`,
  {userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 Edge/83.0.478.61'});

  

}
// New Windows Functions
function createNewProductWindow() {
  newProductWindow = new BrowserWindow({
    width: 1020,
    height: 700,
    title: 'SpotFinder',
  
    
   webPreferences: {
    contextIsolation:true,
    webviewTag: true,
nodeIntegration:true,

    
  
   

  }
  });
  newProductWindow.setMenu(null);

  newProductWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/../../munich-interface/settings/config.html'),
    protocol: 'file',
    slashes: true
  }));
  newProductWindow.on('closed', () => {
    newProductWindow = null;
  });
}
// Finish Function

// New Windows Functions
function createNewProductWindow2() {
  newProductWindow2 = new BrowserWindow({
    width: 1020,
    height: 700,
    title: 'About',
  
    
   webPreferences: {
    contextIsolation:true,
    webviewTag: true,
nodeIntegration:true,

    
  
   

  }
  });
  newProductWindow2.setMenu(null);

  newProductWindow2.loadURL(url.format({
    pathname: path.join(__dirname, '/../../munich-interface/settings/about.html'),
    protocol: 'file',
    slashes: true
  }));
  newProductWindow2.on('closed', () => {
    newProductWindow2 = null;
  });
}
// Finish Function
// New Windows Functions
function createNewProductWindow3() {
  newProductWindow3 = new BrowserWindow({
    width: 1280,
    height: 720,
    title: 'New Window',
  
    
   webPreferences: {
    contextIsolation:true,
    webviewTag: true,
nodeIntegration:true,

    
  
   

  }
  });
  newProductWindow3.setMenu(null);

  newProductWindow3.loadURL(url.format({
    pathname: path.join(__dirname, '/../../functions/index/index.html'),
    protocol: 'file',
    slashes: true
  }));
  newProductWindow3.on('closed', () => {
    newProductWindow3 = null;
  });
}
// Finish Function


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
  
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})




const isMac = process.platform === 'darwin'

const template = [
  
  {
    label: 'SpotFinder',
    submenu: [
      {
        label: 'Open SpotFinder',
        accelerator: 'Ctrl+S',
        click() {
          createNewProductWindow();
        }

      },
   

      {
        label: 'About',
        accelerator: 'Ctrl+M',
        click() {
          createNewProductWindow2();
        }

      },

      {
        label: 'New Window',
        accelerator: 'Ctrl+T',
        click() {
          createNewProductWindow3();
        }

      },

    ]
  },


 

    
  
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)