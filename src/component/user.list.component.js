import React from "react";
import axios from "axios";
import config from "../config";
import AuthService from "../service/auth.service";

class Userlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			currentUser: AuthService.getCurrentUser()
		};
	}

	componentDidMount() {
		axios
			.get(config.host.url + config.host.user.list, {
				headers: {
					Authorization: "Bearer " + this.state.currentUser.token,
				}
			})
			.then((res) => {
				console.log(res);
				console.log(res.data);
				this.setState({
					users: res.data.results,
				});
				// localStorage.setItem("currentUser", JSON.stringify(res.data));
				// this.props.history.push("/");
				// window.location.reload();
			})
			.catch(function (error) {
				// console.log(error);
				alert(error.response.data.message);
			});
	}

	render() {
		const { users } = this.state;
		const listUsers = users.map((user) => (
			<tr>
				<td>{user.id}</td>
				<td>{user.username}</td>
				<td>{user.firstname}</td>
				<td>{user.lastname}</td>
				<td>{user.birthdate}</td>
				<td>{user.gender}</td>
			</tr>
		));
		return (
			<table>
				<tr>
					<th>Id</th>
					<th>Username</th>
					<th>Firstname</th>
					<th>Lastname</th>
					<th>Birthdate</th>
					<th>Gender</th>
				</tr>
				{listUsers}
			</table>
		);
	}
}

export default Userlist;
