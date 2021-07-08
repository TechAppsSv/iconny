document.getElementById("iconny-navigation").innerHTML = `  <div id="controls" style="width: 100%;">
        
<button id="back" style="width: 5%; height: 4vh;" title="Go Back" disabled="true">&#9664;</button>
<button id="forward"style="width: 5%; height: 4vh;" title="Go Forward" disabled="true">&#9654;</button>
<button id="home"style="width: 5%; height: 4vh;" title="Go Home">&#8962;</button>
<button id="reload"style="width: 5%; height: 4vh;" title="Reload">&#10227;</button>
<md-button class="add-tab " ng-click="addTab(tTitle,tContent)" type="submit" style="width: 5%; height: 3vh; background:#252525;"><i class="bi bi-plus-circle" style="color: white;"></i></md-button>


<form id="location-form">
  <div id="center-column">
    <input id="location" type="text" style=" background: black; border: black; color: white;  width: 100%; height: 4vh;  border-radius: 10px;" value="http://www.github.com/">
  </div>

</form>


</div>

<div id="zoom-box" style="display: none;">
<form id="zoom-form" style="display: none;">
  <input id="zoom-text" type="text">
  <input type="submit" value="&#128270;">

</form>
</div>

<div id="find-box" style="display: none;">
<form id="find-form">
  <input id="find-text" type="text">
  <div id="find-results"></div>
  <input type="submit" style="position:absolute; visibility:hidden">
  <button id="match-case">aA</button>
  <button id="find-backward">&#60;</button>
  <button id="find-forward">&#62;</button>
</form>
</div>

<webview src="../../wdk/newtab/newtab.html" id="view" ></webview>


<div id="sad-webview" style="display: none;">
<div id="sad-webview-icon">&#9762;</div>
<h2 id="crashed-label">Aw, Snap!</h2>
<h2 id="killed-label">He's Dead, Jim!</h2>

<p>Something went wrong while displaying this webpage.
To continue, reload or go to another page.</p>
</div>`;