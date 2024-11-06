import React from 'react'
import './login.css'
import { useEffect } from 'react'

const Login = (props) => {
	// const [animation, setAnimation] = useState({
	// 	opacity :1.0,
	// 	transition:"opacity 1s"
	// })
	// useEffect(() => {
	//   setTimeout(() => {
	//     setAnimation({ opacity: 1, transition: 'opacity 1s' });
	//   }, 100);
	// }, []);
	useEffect(function () {
		const loginPage = document.getElementById('login-container');
		const loginBtn = document.getElementById('login-btn');
		const altSignUpBtn = document.getElementById('signup-link');
		const signupPage = document.getElementById('signup-container')
		loginBtn.onclick = function () {
			loginPage.style.display = "flex";
		};
		window.onclick = function (event) {
			if (event.target === loginPage) {
				loginPage.style.display = 'none';
			}
		};
		altSignUpBtn.onclick = function () {
			loginPage.style.display = 'none';
			signupPage.style.display = 'flex';
		};

	}, []);
	return (
		<>
			<button id="login-btn">Login</button>
			<div id='login-container' className='modal'>
				<div className='modal-content'>
					<h2 id='login-heading'>Login</h2>
					<form>
						<div id='login-userinput-container'>
							<input type="email" id="login-email" placeholder='Email' required />
							<input type="password" id="login-password" placeholder='Password' required />
						</div>
						<div id='login-buttons-container'>
							<button type="submit" id='login-submit'>Login</button>
							<button id="signup-link">Don't have an account? Sign Up!</button>
						</div>
					</form>
				</div>
			</div></>
	)
}

export default Login
