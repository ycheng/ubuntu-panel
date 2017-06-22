
onload = function() {
  var openlpbug = document.getElementById('open-lp-bug');
  var bugids = document.getElementById('bugids');
  if (openlpbug) {
    openlpbug.onclick = function() {
      var urlprefix = "https://bugs.launchpad.net/bugs/";
      var url = urlprefix + parseInt(bugids.value);
      chrome.tabs.create({'url': url});
    };
  }
}
