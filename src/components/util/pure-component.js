import React from 'react';
import { shallowEqualImmutable } from 'react-immutable-render-mixin';

/**
 * React component that emulates the PureRenderMixin for optimal
 * renders
 */
class PureComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqualImmutable(this.props, nextProps) || !shallowEqualImmutable(this.state, nextState);
  }

}

export default PureComponent;
