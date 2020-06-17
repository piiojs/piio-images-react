import React, { useEffect } from 'react';

function selectTag(tagName, path, content, className) {
  if (tagName === 'img') {
    return /*#__PURE__*/React.createElement("img", {
      className: className,
      "data-piio": path,
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    });
  } else if (tagName === 'source') {
    return /*#__PURE__*/React.createElement("source", {
      className: className,
      "data-piio": path,
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    });
  } else {
    return /*#__PURE__*/React.createElement("div", {
      tag: tagName,
      className: className,
      "data-piio-bck": path
    }, content);
  }
}

const Element = ({
  tag,
  path,
  content,
  className
}) => {
  return selectTag(tag, path, content, className);
};

function initScripts(domainKey) {
  var preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = '//pcdn.piiojs.com';
  document.head.appendChild(preconnect);
  var preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'script';
  preload.href = '//pcdn.piiojs.com/' + domainKey + '/image.min.js';
  document.head.appendChild(preload);
  var piioScript = document.createElement('script');
  piioScript.type = 'text/javascript';
  piioScript.textContent = '(function(i,m,a,g,e) {e = i.getElementsByTagName(m)[0], (g = i.createElement(m)).src = "//pcdn.piiojs.com/"+a+"/image.min.js",g.onerror = function() {(g = i.createElement(m)).src = "https://fs.piio.co/image-failover.min.js",e.parentNode.insertBefore(g, e);}, e.parentNode.insertBefore(g, e);}(document, "script", "' + domainKey + '"));';
  document.head.appendChild(piioScript);
}

const Header = ({
  domainKey
}) => {
  useEffect(() => initScripts(domainKey), []);
  return null;
};

const PiioElement = Element;
const Piio = Header;

export { Piio, PiioElement };
//# sourceMappingURL=index.modern.js.map
