
onload = function() {
  var openlpbug = document.getElementById('open-lp-bug');
  var bugids = document.getElementById('bugids');
  if (openlpbug) {
    openlpbug.onclick = function() {
      var urlprefix = "https://bugs.launchpad.net/bugs/";
      var urlsar = Array();
      var idsar = bugids.value.split(/[\s,]+/)
        .map(function(x) {
          if (x.startsWith("#")) {
            return parseInt(x.substr(1));
          } else if (x.startsWith("lp:")) {
            var xar = x.split(":");
            if (xar.length > 1) return parseInt(xar[1]);
            return 0;
          } else if (x.startsWith("http")) {
            urlsar.push(x); return 0;
          }
          return parseInt(x);
        })
        .filter(function(x) {return x > 0});
      urlsar = urlsar.concat(idsar
        .map(function(x) {return urlprefix + x.toString();}));
      if (urlsar.length > 1) {
        browser.windows.create({url: urlsar});
      } else if (urlsar.length > 0) {
        browser.tabs.create({'url': urlsar[0]});
      }
    };
  }
}
