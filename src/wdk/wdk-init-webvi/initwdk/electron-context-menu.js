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


