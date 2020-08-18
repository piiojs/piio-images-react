function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function selectTag(tagName, path, content, className) {
  if (tagName === 'img') {
    return /*#__PURE__*/React__default.createElement("img", {
      className: className,
      "data-piio": path,
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    });
  } else if (tagName === 'source') {
    return /*#__PURE__*/React__default.createElement("source", {
      className: className,
      "data-piio": path,
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    });
  } else {
    return /*#__PURE__*/React__default.createElement("div", {
      tag: tagName,
      className: className,
      "data-piio-bck": path
    }, content);
  }
}

var Element = function Element(_ref) {
  var tag = _ref.tag,
      path = _ref.path,
      content = _ref.content,
      className = _ref.className;
  return selectTag(tag, path, content, className);
};

function initScripts(domainKey) {
  var preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = '//pcdn.piiojs.com';
  preconnect.crossOrigin = 'anonymous';
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

var Header = function Header(_ref) {
  var domainKey = _ref.domainKey;
  React.useEffect(function () {
    return initScripts(domainKey);
  }, []);
  return null;
};

var PiioElement = Element;
var Piio = Header;

exports.Piio = Piio;
exports.PiioElement = PiioElement;
//# sourceMappingURL=index.js.map
