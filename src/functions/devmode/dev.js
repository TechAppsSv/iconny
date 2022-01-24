
    onload = () => {
        const webview = document.querySelector('webview')
    
      webview.addEventListener('dom-ready', () => {
        webview.openDevTools()
       })
    }