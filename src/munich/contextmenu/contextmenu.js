// The Munich Proyect
const remote = require('electron').remote;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

var menu = new Menu();
menu.append(new MenuItem({
    label: 'Operations',
  submenu: [
    { role: 'undo' },
    { role: 'redo' },
    { type: 'separator' },
    { role: 'cut' },
    { role: 'copy' },
    { role: 'paste' },
   ]
  }));
menu.append(new MenuItem( {
    label: 'View',
    submenu: [
   
    
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
      
    
      
    ]

    
    }));
    menu.append(new MenuItem( {
        label: 'Restore Browser',
        submenu: [
          
          { role: 'forcereload' },
        
        
          
        ]
    
        
        }));
//  menu.append(new MenuItem({ label: 'Search ', type: 'checkbox', checked: true }));

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);