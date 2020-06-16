function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"background":"_styles-module__background__38Bir","source":"_styles-module__source__1TZM8"};

function selectTag(tagName, path, content) {
  if (tagName === 'img' || tagName === 'source') {
    return /*#__PURE__*/React.createElement("data-piio", {
      "class": styles.source,
      "data-piio": path,
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    });
  } else {
    return /*#__PURE__*/React.createElement("data-piio-bck", {
      "class": styles.background,
      "data-piio-bck": path
    }, content);
  }
}

var Piio = function Piio(_ref) {
  var tag = _ref.tag,
      path = _ref.path,
      content = _ref.content;
  return selectTag(tag, path, content);
};

exports.Piio = Piio;
//# sourceMappingURL=index.js.map
