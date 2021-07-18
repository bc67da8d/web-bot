import React from 'react';

class Toggle extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isToggle: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({
			isToggle: !this.state.isToggle
		});
	}

	render(){
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggle?'ON':'OFF'}
			</button>
		);
	}
}

export default Toggle;