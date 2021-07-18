import React from "react";
import axios from "axios";
import config from "../config.json";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		};
		this.useHistory = this.props.useHistory;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.goRegister = this.goRegister.bind(this);
		console.log(this.useHistory);
	}

	componentDidMount() {
		console.log(JSON.parse(localStorage.getItem("currentUser")));
	}

	goRegister() {
		this.props.history.push("/register");
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("You clicked submit.");
		axios
			.post(config.host.login, {
				username: this.state.username,
				password: this.state.password,
			})
			.then((res) => {
				console.log(res);
				console.log(res.data);
				localStorage.setItem("currentUser", JSON.stringify(res.data));
				this.props.history.push("/");
				window.location.reload();
			})
			.catch(function (error) {
				console.log(error);
				alert(error.response.data.message);
			});
	}

	handleUsernameChange(event) {
		this.setState({ username: event.target.value });
	}

	handlePasswordChange(event) {
		this.setState({ password: event.target.value });
	}

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form action="/" method="GET" onSubmit={this.handleSubmit}>
					<div class="form-group">
						Tên đăng nhập:
						<input
							class="form-control"
							type="text"
							value={this.state.username}
							onChange={this.handleUsernameChange}
						/>
						<br />
						Mật khẩu:
						<input
							class="form-control"
							type="password"
							value={this.state.password}
							onChange={this.handlePasswordChange}
						/>
						<br />
						<input type="submit" />
						<button type="button" onClick={this.goRegister}>
							Go register
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(Login);
