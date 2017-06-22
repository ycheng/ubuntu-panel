
onload = function() {
  var openlpbug = document.getElementById('open-lp-bug');
  var bugids = document.getElementById('bugids');
  if (openlpbug) {
    openlpbug.onclick = function() {
      var urlprefix = "https://bugs.launchpad.net/bugs/";
      var url = urlprefix + bugids.value;
      // chrome.tabs.create({'url': 'http://www.google.com'}, 
      chrome.tabs.create({'url': url},
	function(tab){ alert(tab.id) }
	);
    };
  }
}
