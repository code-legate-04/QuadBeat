import React from 'react'
import './signup.css'
import { useEffect } from 'react'

const SignUp = (props) => {
	useEffect(function () {
		const SignUpPage = document.getElementById('signup-container');
		const SignUpBtn = document.getElementById('signup-btn');
		const altLoginBtn = document.getElementById('login-link');
		const loginPage = document.getElementById('login-container');

		SignUpBtn.onclick = function () {
			SignUpPage.style.display = "flex";
		};
		window.onclick = function (event) {
			if (event.target === SignUpPage) {
				SignUpPage.style.display = 'none';
			}
		};
		altLoginBtn.onclick = function () {
			SignUpPage.style.display = 'none';
			loginPage.style.display = 'flex';
		};

	}, []);
	return (
		<>
			<button id="signup-btn">Sign Up</button>
			<div id='signup-container' className='modal'>
				<div className='modal-content'>
					<h2 id='signup-heading'>SignUp</h2>
					<form>
						<div id='signup-userinput-container'>
							<div className='username-input-container'>
								<input type='text' id='firstname' placeholder='First Name' />
								<input type='text' id='lastname' placeholder='Last Name' />
							</div>
							<div className='userId-input-container'>
								<input type="email" id="signup-email" placeholder='Email' required />
								<input type="password" id="signup-password" placeholder='Password' required />
							</div>
						</div>
						<div id='signup-buttons-container'>
							<button type="submit" id='signup-submit'>SignUp</button>
							<button id="login-link">Already have an Account? Login!</button>
						</div>
					</form>
				</div>
			</div></>
	)
}

export default SignUp
