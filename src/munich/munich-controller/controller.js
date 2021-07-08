// The Munich Proyect
// This Code is Based the repository github electron-sample-apps
function doLayout() {
    var webview = document.querySelector('webview');
    var controls = document.querySelector('#controls');
    var controlsHeight = controls.offsetHeight;
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var webviewWidth = windowWidth;
    var webviewHeight = windowHeight - controlsHeight;
  
    webview.style.width = webviewWidth + 'px';
    webview.style.height = webviewHeight + 'px';
  
    var sadWebview = document.querySelector('#sad-webview');
    sadWebview.style.width = webviewWidth + 'px';
    sadWebview.style.height = webviewHeight * 2/3 + 'px';
    sadWebview.style.paddingTop = webviewHeight/3 + 'px';
  }