import React, { Component, PropTypes } from 'react';
import MiddleContainer from '../../components/MiddleContainer/MiddleContainer';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const styles={
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
}

class MiddleRefreshIndicator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {top} = this.props;

    return (

            <MiddleContainer top={top||50}>
              <RefreshIndicator
                size={40}
                left={10}
                top={0}
                status="loading"
                style={styles.refresh}
                />
            </MiddleContainer>

    );
  }
}

MiddleRefreshIndicator.propTypes = {
  top: PropTypes.number,
};

export default (MiddleRefreshIndicator);
