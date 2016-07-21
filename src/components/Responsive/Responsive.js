import React, { Component, PropTypes } from 'react'
import Activity from '../../components/Activity/Activity';

class Responsive extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const {browser} = this.props;

    let message = `The viewport's current media type is: ${browser.mediaType}.`;

    if (browser.lessThan.small) {
      message += 'Secret message for viewports smaller than than the "small" breakpoint!';
    } else if (browser.lessThan.medium) {
      message += 'Secret message for viewports between the "small" and "medium" breakpoints!';
    } else {
      message += 'Message for viewports greater than the "medium" breakpoint.';
    }


    return (
      <Activity
        title='Responsive'
        nav_index='/responsive'>
        <p>
          {message}
        </p>
      </Activity>
    )
  }
}

Responsive.propTypes = {
  browser: PropTypes.object.isRequired,

}

export default (Responsive);
