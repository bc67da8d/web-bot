import React from "react";
import "./bootstrap.min.css";

class TextTwo extends React.Component {
	render() {
		return (
			<div class="row">
			<div class="col-md-4">
				<form>
					<div class="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						<small id="emailHelp" class="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input
							type="password"
							class="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<div class="form-check">
						<input
							type="checkbox"
							class="form-check-input"
							id="exampleCheck1"
						/>
						<label class="form-check-label" for="exampleCheck1">
							Check me out
						</label>
					</div>
					<button type="submit" class="btn btn-primary">
						Submit
					</button>
				</form>
				<div class="card">
					<img
						class="card-img-top"
						src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
						alt="Card image cap"
					/>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" class="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

export default TextTwo;
