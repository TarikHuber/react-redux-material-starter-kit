import React, { Component, PropTypes } from 'react';
import AVReplay from 'material-ui/svg-icons/av/replay';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import BottomRightFAB from '../../components/FloatingActionButtons/BottomRightFAB';

export default class PaginationFooter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { handlePreviousPageClick, handleRefreshClick, handleNextPageClick, page } = this.props;

    return (

      <div>

        { page>1 &&

          <BottomRightFAB
            right={190}
            secondary={true}
            onTouchTap={handlePreviousPageClick}
            icon={<HardwareKeyboardArrowLeft />}
            />
        }


        <BottomRightFAB
          right={110}
          secondary={true}
          onTouchTap={handleRefreshClick}
          icon={<AVReplay />}
          />

        <BottomRightFAB
          secondary={true}
          onTouchTap={handleNextPageClick}
          icon={<HardwareKeyboardArrowRight />}
          />

      </div>

    );
  }
}

PaginationFooter.propTypes = {
  page: PropTypes.number.isRequired,
  handlePreviousPageClick: PropTypes.func.isRequired,
  handleRefreshClick: PropTypes.func.isRequired,
  handleNextPageClick: PropTypes.func.isRequired,
};
