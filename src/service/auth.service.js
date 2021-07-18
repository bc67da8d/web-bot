class AuthService {
	logout() {
		localStorage.removeItem("currentUser");
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem("currentUser"));
	}
}

export default new AuthService();
