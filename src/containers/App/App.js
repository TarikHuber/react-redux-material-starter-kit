import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppNavDrawer from '../../containers/AppNavDrawer/AppNavDrawer';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import DockedContainer from '../../containers/DockedContainer/DockedContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {appStyle } = this.props;


    return (
	
	<MuiThemeProvider muiTheme={getMuiTheme(appStyle.theme.source)}>
		<div>
			<DockedContainer>
				<AppNavDrawer location={this.props.location}/>
			</DockedContainer>
			<DockedContainer>
				<ContentContainer>
					{this.props.children}
				</ContentContainer>
			</DockedContainer>
		</div>  	
     </MuiThemeProvider>
				
    );

  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  appStyle: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
  const {appStyle } = state;
  return {
	appStyle:appStyle,
  };
};

export default connect(
  mapStateToProps
)(App);