// The Munich Proyect
// This Code Basd in Github Issues
onload = () => {
    const webview = document.querySelector('webview')

    webview.addEventListener('dom-ready', () => {
      webview.openDevTools()
    })
  }