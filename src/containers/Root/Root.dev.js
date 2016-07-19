import React, { Component, PropTypes } from 'react'
import { Provider , connect	} from 'react-redux'
import routes from '../../routes'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {addLocaleData, IntlProvider} from 'react-intl';
import DevTools from '../../containers/DevTools/DevTools';
 
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
  
import NotFound from '../../containers/Misc/NotFound';
import RestrictPage from '../../containers/Misc/RestrictPage';
import App from '../../containers/App/App';
import SignIn from '../../containers/Auth/SignIn';
import Dashboard from '../../containers/Dashboard/Dashboard';
import Foo from '../../components/BasicExamples/Foo';
import PropsExample from '../../components/BasicExamples/PropsExample';
import PropsAndDispatchExample from '../../components/BasicExamples/PropsAndDispatchExample';
import Counter from '../../containers/Counter/Counter';
import Responsive from '../../containers/Responsive/Responsive';
import MainSettings from '../../containers/Settings/MainSettings';
import GitUsers from '../../containers/GitUsers/GitUsers';
import Repos from '../../containers/Repos/Repos';
import Todo from '../../containers/Todo/Todo'
 
export default class Root extends Component {
  render() {
    const { store, history } = this.props
	
	addLocaleData([...en, ...de]);
	
	const mapStateToProps = (state) => {
	  const {intl} = state
	  return {
		...intl,
		key: intl.locale,
	  }
	}
	
	const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider)
	
    return (
		<Provider store={store} >
			<ConnectedIntlProvider>
				<div>		 
					<Router history={browserHistory} routes={routes} />
				</div>
			</ConnectedIntlProvider>
		</Provider>	  
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}