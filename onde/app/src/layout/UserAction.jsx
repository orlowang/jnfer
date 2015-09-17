import React, {Component} from 'react';
import Format from '../../../../lib/utils/Format';

export default class UserAction extends Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			nowtime: Date()
		};
	}
	static propTypes = {
		userPhoto: React.PropTypes.string,
		userName: React.PropTypes.string,
		message: React.PropTypes.number
	};
	static defaultProps = {
		userPhoto: './img/defaultPhoto.gif',
		userName: 'Kolous Masou',
		message: 2,
		action: {
			language: 'language',
			setting: 'option',
			exit: 'logout'
		}
	};

	componentDidMount(){
		this.interval = setInterval(() => this.setState({nowtime: Date()}), 50);
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}

	render(){
		let styles = {
			
		};
		let after = {clear: 'both'};
		Object.assign(styles, Format.NoUserSelect);

		return (
			<div className="userAction" style={styles}>
				<div className="uA-nowtime">{this.state.nowtime}</div>
				<div className="uA-photo">
					<img src={this.props.userPhoto}/>
				</div>
				<div className="uA-container">
					<div className="uA-username">{this.props.userName}</div>
					<ul>
						<li>{this.props.action.language}</li>
						<li><span>-</span></li>
						<li>{this.props.action.setting}</li>
						<li><span>-</span></li>
						<li>{this.props.action.exit}</li>
					</ul>
				</div>
			</div>
		);
	}
}
