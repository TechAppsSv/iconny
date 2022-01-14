
window.onresize = doLayout;
var isLoading = false;

onload = function() {
  var webview = document.querySelector('webview');
  doLayout();

  document.querySelector('#back').onclick = function() {
    webview.goBack();
  };

  document.querySelector('#forward').onclick = function() {
    webview.goForward();
  };

  document.querySelector('#home').onclick = function() {
    navigateTo('newtab.html');
  };

  document.querySelector('#reload').onclick = function() {
    if (isLoading) {
      webview.stop();
    } else {
      webview.reload();
    }
  };
  document.querySelector('#reload').addEventListener(
    'webkitAnimationIteration',
    function() {
      if (!isLoading) {
        document.body.classList.remove('loading');
      }
    });

  document.querySelector('#location-form').onsubmit = function(e) {
    e.preventDefault();
    navigateTo(document.querySelector('#location').value);
  };

  webview.addEventListener('close', handleExit);
  webview.addEventListener('did-start-loading', handleLoadStart);
  webview.addEventListener('did-stop-loading', handleLoadStop);
  webview.addEventListener('did-fail-load', handleLoadAbort);
  webview.addEventListener('did-get-redirect-request', handleLoadRedirect);
  webview.addEventListener('did-finish-load', handleLoadCommit);

  // Test for the presence of the experimental <webview> zoom and find APIs.
  if (typeof(webview.setZoom) == "function" &&
      typeof(webview.find) == "function") {
    var findMatchCase = false;



    document.querySelector('#find').onclick = function() {
      if(document.querySelector('#find-box').style.display == 'block') {
        document.querySelector('webview').stopFinding();
        closeFindBox();
      } else {
        openFindBox();
      }
    };

    document.querySelector('#find-text').oninput = function(e) {
      webview.find(document.forms['find-form']['find-text'].value,
                   {matchCase: findMatchCase});
    }

    document.querySelector('#find-text').onkeydown = function(e) {
      if (event.ctrlKey && event.keyCode == 13) {
        e.preventDefault();
        webview.stopFinding('activate');
        closeFindBox();
      }
    }

    document.querySelector('#match-case').onclick = function(e) {
      e.preventDefault();
      findMatchCase = !findMatchCase;
      var matchCase = document.querySelector('#match-case');
      if (findMatchCase) {
        matchCase.style.color = "blue";
        matchCase.style['font-weight'] = "bold";
      } else {
        matchCase.style.color = "black";
        matchCase.style['font-weight'] = "";
      }
      webview.find(document.forms['find-form']['find-text'].value,
                   {matchCase: findMatchCase});
    }

    document.querySelector('#find-backward').onclick = function(e) {
      e.preventDefault();
      webview.find(document.forms['find-form']['find-text'].value,
                   {backward: true, matchCase: findMatchCase});
    }

    document.querySelector('#find-form').onsubmit = function(e) {
      e.preventDefault();
      webview.find(document.forms['find-form']['find-text'].value,
                   {matchCase: findMatchCase});
    }

    webview.addEventListener('findupdate', handleFindUpdate);
    window.addEventListener('keydown', handleKeyDown);
  } 
};

function navigateTo(url) {
  resetExitedState();
  document.querySelector('webview').src = url;
}

function doLayout() {
  var webview = document.querySelector('webview');
 var controls = document.querySelector('#controls');
 var tab = document.querySelector('#tab-list');
 
 var controlsHeight = controls.offsetHeight;
 var tabHeight = tab.offsetHeight;

 var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
   var webviewWidth = windowWidth;
   var webviewHeight = windowHeight - controlsHeight - tabHeight;

 webview.style.width = webviewWidth + 'px';
   webview.style.height = webviewHeight + 'px';

  var sadWebview = document.querySelector('#sad-webview');
   sadWebview.style.width = webviewWidth + 'px';
   sadWebview.style.height = webviewHeight * 2/3 + 'px';
   sadWebview.style.paddingTop = webviewHeight/3 + 'px';
}

function handleExit(event) {
  console.log(event.type);
  document.body.classList.add('exited');
  if (event.type == 'abnormal') {
    document.body.classList.add('crashed');
  } else if (event.type == 'killed') {
    document.body.classList.add('killed');
  }
}

function resetExitedState() {
  document.body.classList.remove('exited');
  document.body.classList.remove('crashed');
  document.body.classList.remove('killed');
}



function handleLoadCommit() {
  resetExitedState();
  var webview = document.querySelector('webview');
  document.querySelector('#location').value = webview.getURL();
  document.querySelector('#back').disabled = !webview.canGoBack();
  document.querySelector('#forward').disabled = !webview.canGoForward();
  closeBoxes();
}

function handleLoadStart(event) {
  document.body.classList.add('loading');
  isLoading = true;

  resetExitedState();
  if (!event.isTopLevel) {
    return;
  }

  document.querySelector('#location').value = event.url;
}

function handleLoadStop(event) {
  // We don't remove the loading class immediately, instead we let the animation
  // finish, so that the spinner doesn't jerkily reset back to the 0 position.
  isLoading = false;
}

function handleLoadAbort(event) {
  console.log('LoadAbort');
  console.log('  url: ' + event.url);
  console.log('  isTopLevel: ' + event.isTopLevel);
  console.log('  type: ' + event.type);
}

function handleLoadRedirect(event) {
  resetExitedState();
  document.querySelector('#location').value = event.newUrl;
}