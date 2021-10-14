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



let newProductWindow;


const { app, BrowserWindow, Menu , session,  } = require('electron')

const contextMenu = require('electron-context-menu');
("web-contents-created", (e, contents) => {
  contextMenu({
     window: contents,
     showSaveImageAs: true,
     showInspectElement: false
  });
})
function createNewProductWindow() {
  newProductWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth: 800,
    minHeight:600,
    title: 'Nuevo',
    frame: false,
    
   webPreferences: {
    contextIsolation:true,
    webviewTag: true,
nodeIntegration:true,

    
  
   

  }
  });
  newProductWindow.setMenu(null);

  newProductWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'init.html'),
    protocol: 'file',
    slashes: true
  }));
  newProductWindow.on('closed', () => {
    newProductWindow = null;
  });
}




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


function createWindow () {
  
  const win = new BrowserWindow({
    width: 120,
    height: 120,
   
    contextIsolation: true,

   webPreferences: {
      contextIsolation:true,
      webviewTag: true,
nodeIntegration:true
      
    
     

    }
  })

  const isMac = process.platform === 'darwin'
  const template = [
    {
      label: '1',
      submenu: [
  
  
        {
          label: 'Exit',
          accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
          click() {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'A2',
      submenu: [
        {
          label: 'A2',
          accelerator: 'Ctrl+T',
          click() {
            createNewProductWindow();
          }
  
        },
        // {
        //   label: 'Ayuda de Tave',
        //   accelerator: 'F1',
        //   click() {
        //     createNewProductWindow();
        //   }
        // },
  
        {
          label: 'F2',
          accelerator: 'Ctrl+E',
          click() {
            createNewProductWindow3();
          }
  
        },
  
  
  
      ]
    },
  
  
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

  
  createNewProductWindow();
}


app.whenReady().then(createWindow)
