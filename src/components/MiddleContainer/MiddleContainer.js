import React, { Component, PropTypes } from 'react';

class MiddleContainer extends Component {

  render() {

    const styles={

      main_container:{
        float: 'left',
        position: 'relative',
        left: '50%',
        top: this.props.top,
      },

      fixer_container:{
        float: 'left',
        position: 'relative',
        left: '-50%',
      },

    }

    return (
      <div style={styles.main_container}>
        <div style={styles.fixer_container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MiddleContainer.propTypes = {
  children: PropTypes.object,
  top:PropTypes.number,
};

export default (MiddleContainer);
