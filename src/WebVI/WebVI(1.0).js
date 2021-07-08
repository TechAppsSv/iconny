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

var path = require('path');

    view = ById('view');            