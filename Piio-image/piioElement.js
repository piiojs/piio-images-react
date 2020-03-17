import React from 'react';

class PiioElement extends React.Component {
  render() {
    const TagName = this.props.tag.toLowerCase();
    let parsedProps = Object.assign({}, this.props);
    delete parsedProps['path']
    if (TagName === 'img') {
      parsedProps['data-piio'] = this.props.path;
      return React.createElement(TagName, parsedProps, null);
    } else {
      parsedProps['data-piio-bck'] = this.props.path;
      return React.createElement(TagName, parsedProps, this.props.children);
    }
  }
}
export default PiioElement;
