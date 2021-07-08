void function () {
    const $ = document.querySelector.bind(document);
    const webview = $('#webview');
    const captureWebview = $('#captureWebview');
    // preload
    
  
    // Forwards, backwords, refresh, and loadURL
    const forwards = $('#forwards');
    forwards.addEventListener('click', () => {
      if (webview.canGoForward()) {
        webview.goForward();
      }
    });
    const backwords = $('#backwords');
    backwords.addEventListener('click', () => {
      if (webview.canGoBack()) {
        webview.goBack();
      }
    });
    const refresh = $('#refresh');
    refresh.addEventListener('click', () => {
      webview.reload();
    });
  

  }();