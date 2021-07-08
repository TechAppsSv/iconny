function reloadView () {
    view.reload();
}

function backView () {
    view.goBack();
}

function forwardView () {
    view.goForward();
}


var ById = function (id) {
    return document.getElementById(id);
}

const webview = document.getElementById('view')
webview.addEventListener('dom-ready', () => {
  webview.getURL()
})
