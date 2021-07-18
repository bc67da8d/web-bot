import React from "react";
import axios from "axios";
import config from "../config.json";
import { withRouter } from "react-router-dom";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			password_confirmation: "",
		};
		this.useHistory = this.props.useHistory;
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
		this.goLogin = this.goLogin.bind(this);
		console.log(this.useHistory);
	}

	componentDidMount() {
		console.log(JSON.parse(localStorage.getItem("currentUser")));
	}

	goLogin() {
		this.props.history.push("/");
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("You clicked submit.");
		axios
			.post(config.host.url + config.host.register, {
				username: this.state.username,
				password: this.state.password,
				password_confirmation: this.state.password_confirmation,
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

	handlePasswordConfirmationChange(event) {
		this.setState({ password_confirmation: event.target.value });
	}

	render() {
		return (
			<div>
				<h1>Register</h1>
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
						Xác nhận mật khẩu:
						<input
							class="form-control"
							type="password"
							value={this.state.password_confirmation}
							onChange={this.handlePasswordConfirmationChange}
						/>
						<br />
						<input type="submit" />
						<button type="button" onClick={this.goLogin}>
							Go login
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(Register);
