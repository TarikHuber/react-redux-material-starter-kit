import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {setSignInDialogOpen, setSignInTextErrors} from '../../actions/signIn';
import {login} from '../../actions/auth';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { messages } from './SignIn.i18n';
import ActionLockOpen  from 'material-ui/svg-icons/action/lock-open';
import {  push } from 'react-router-redux'
import MiddleContainer from '../../components/MiddleContainer/MiddleContainer';
import Activity from '../../components/Activity/Activity';


let location;
let to;

const fields ={
	userName:'userName',
	password: 'password',
}

const styles={


	main_container:{
		float: 'left',
		position: 'relative',
		left: '50%',
		top: '50%',
	},

	fixer_container:{
		float: 'left',
		position: 'relative',
		left: '-50%',
		top: '-50%',
	},

	button:{
		float: 'right',
	},
}

export function handleRehidration(){


	if(location!==undefined && location.query.redirect!==undefined){
		to(location.query.redirect);
	}

}

class SignIn extends Component {

	constructor(props) {
		super(props)
	};



	componentWillMount(){

		location=this.props.location;
		to=this.props.to;
	}


	render(){
		const {intl , login ,signIn, setSignInDialogOpen, setSignInTextErrors, to, location } = this.props;



		function handleOpen(){
			setSignInDialogOpen(true);
		};

		function handleClose(){
			//setErrorText(undefined);
			setSignInDialogOpen(false);
		};

		function handleSubmit(refs){

			let errors={};

			Object.keys(refs).forEach(function (key) {
				if(!refs[key].input.value.trim()){
					errors[key]="Is required!";
				}
			});

			setSignInTextErrors(errors);

			if(Object.getOwnPropertyNames(errors).length>0){
				return;
			}

			let user=refs[fields.userName].input.value;
			let password=refs[fields.password].input.value;



			login(user, password, location.query.redirect);

		};

		function handleKeyDown(event, refs){


			if(event.keyCode===13){
				handleSubmit(refs);
			}
		}


		return (

			<Activity nav_index="/signin" title={intl.messages.signin}>
				<MiddleContainer top={50}>
					<form onSubmit={e => {
							e.preventDefault();
							handleSubmit(this.refs);
						}}>


						<TextField
							ref={fields.userName}
							hintText="Enter any username you want"
							errorText={signIn.errors.userName}
							floatingLabelText="Username"
							onKeyDown ={(event)=>handleKeyDown(event, this.refs)}
							/> <br />

						<TextField
							ref={fields.password}
							type="password"
							hintText="Enter any password"
							errorText={signIn.errors.password}
							floatingLabelText="Password"
							onKeyDown ={(event)=>handleKeyDown(event, this.refs)}
							/> <br />

						<RaisedButton
							label="Sign in"
							labelPosition="after"
							secondary={true}
							icon={<ActionLockOpen  />}
							style={styles.button}
							onTouchTap={()=>handleSubmit(this.refs)}


							/> <br />




					</form>
				</MiddleContainer>
			</Activity>

		)
	}
}


SignIn.propTypes = {
	intl: PropTypes.object.isRequired,
	signIn: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	setSignInDialogOpen: PropTypes.func.isRequired,
	setSignInTextErrors: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired,
	to: PropTypes.func.isRequired,
	location: PropTypes.object.isRequired,
}

function mapStateToProps(state) {

	const { intl, auth, signIn} = state;

	return {
		intl:intl,
		signIn:signIn,
		auth: auth,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {

		setSignInDialogOpen:(open)=>{
			dispatch(setSignInDialogOpen(open));
		},
		setSignInTextErrors:(errors)=>{
			dispatch(setSignInTextErrors(errors));
		},
		login:( user, password, redirect)=>{
			dispatch(login( user, password, redirect));
		},
		to: (path)=>{
			dispatch(push(path))
		},

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
