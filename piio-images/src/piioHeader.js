import React, { useEffect } from 'react'

function initScripts(domainKey) {
  //Append to head
  var preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = '//pcdn.piiojs.com';
  document.head.appendChild(preconnect);

  var preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'script';
  preload.href = '//pcdn.piiojs.com/'+domainKey+'/image.min.js';
  document.head.appendChild(preload);

  var piioScript = document.createElement('script');
  piioScript.type = 'text/javascript';
  piioScript.textContent = '(function(i,m,a,g,e) {e = i.getElementsByTagName(m)[0], (g = i.createElement(m)).src = "//pcdn.piiojs.com/"+a+"/image.min.js",g.onerror = function() {(g = i.createElement(m)).src = "https://fs.piio.co/image-failover.min.js",e.parentNode.insertBefore(g, e);}, e.parentNode.insertBefore(g, e);}(document, "script", "'+domainKey+'"));';
  document.head.appendChild(piioScript);
}

export const Header = ({ domainKey }) => {
  useEffect(() => initScripts(domainKey), [])

  return null
}
