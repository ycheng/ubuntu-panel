
onload = function() {
  var openlpbug = document.getElementById('open-lp-bug');
  var bugids = document.getElementById('bugids');
  if (openlpbug) {
    openlpbug.onclick = function() {
      var urlprefix = "https://bugs.launchpad.net/bugs/";
      var idsar = bugids.value.split(" ")
        .map(function(x) {return parseInt(x);})
        .filter(function(x) {return x > 0});
      var urlsar = idsar
        .map(function(x) {return urlprefix + x.toString();});
      if (urlsar.length > 1) {
        chrome.windows.create({url: urlsar});
      } else if (urlsar.length > 0) {
        chrome.tabs.create({'url': urlsar[0]});
      }
    };
  }
}
