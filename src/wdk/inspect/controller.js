function reloadView () {
    view.reload();
}

function backView () {
    view.goBack();
}

function forwardView () {
    view.goForward();
}

function homeView () {
    view.loadURL('https://www.google.com/');
}

var ById = function (id) {
    return document.getElementById(id);
}



    view = ById('view');

    onload = () => {
        const webview = document.querySelector('webview')
    
      webview.addEventListener('dom-ready', () => {
        webview.openDevTools()
       })
    }