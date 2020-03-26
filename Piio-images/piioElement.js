import React from 'react';

class PiioElement extends React.Component {
  render() {
    const maxW100 = {
      maxWidth : "100%"
    };
    const backgroundProps = {
      minHeight : "400px",
      backgroundSize: "cover",
      backgroundPosition:"center",
      color:"#ffc107"
    };
    const TagName = this.props.tag.toLowerCase();
    let parsedProps = Object.assign({}, this.props);
    delete parsedProps['path']
    if ((TagName === 'img') || (TagName === 'source')) {
      parsedProps['data-piio'] = this.props.path;
      parsedProps['style'] = maxW100;
      return React.createElement(TagName, parsedProps, null);
    }else {
      parsedProps['data-piio-bck'] = this.props.path;
      parsedProps['style'] = backgroundProps;
      return React.createElement(TagName, parsedProps, this.props.children);
    }
  }
}
export default PiioElement;
