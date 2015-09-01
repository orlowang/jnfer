import React, {Component} from 'react';

export default class Wrapper extends Component{
  static propTypes = {
    beforeStyle: React.PropTypes.object,
    afterStyle: React.PropTypes.object,
    beforeElementType: React.PropTypes.string,
    afterElementType: React.PropTypes.string,
    elementType: React.PropTypes.string
  };

  static defaultProps = {
    beforeElementType: 'div',
    afterElementType: 'div',
    elementType: 'div'
  };

  render() {

    let {
      beforeStyle,
      afterStyle,
      beforeElementType,
      afterElementType,
      elementType,
      ...other
    } = this.props;

    let beforeElement, afterElement;

    if (this.props.beforeStyle) beforeElement =
      React.createElement(this.props.beforeElementType, {style: Object.assign(beforeStyle, this.props.beforeStyle), key: "::before"});
    if (this.props.afterStyle) afterElement =
      React.createElement(this.props.afterElementType,{style: Object.assign(afterStyle, this.props.afterStyle),key: "::after"});

    let children = [beforeElement, this.props.children, afterElement];

    let props = other;
    props.style = this.props.style;

    return React.createElement(this.props.elementType, props, children);
  }
}
