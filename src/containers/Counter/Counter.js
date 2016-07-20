import React from 'react'
import {connect} from 'react-redux';
import * as CounterActions from '../../actions/counter';
import Counter from '../../components/Counter/Counter';

function mapStateToProps(state) {

    const {intl, appNavDrawer, counter} = state;

    return {value: counter, appNavDrawer: appNavDrawer, intl: intl};

}

export default connect(mapStateToProps, {
    ...CounterActions
})(Counter);
