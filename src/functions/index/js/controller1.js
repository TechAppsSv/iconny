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

const webview = document.getElementById('view')
webview.addEventListener('dom-ready', () => {
  webview.getURL()
})
