import './App.css'
import Home from './components/Home/Home'
import Sidebar from './components/sidebar/Sidebar'
import React from 'react'
import WeeklyTopSongs from './components/content1/Weekly'
import Login from './components/modals/login'
import SignUp from './components/modals/signup'
function App() {


	return (
		<div className='main'>
			<div className='main-sidebar'>
				<Sidebar />
			</div>
			<div className='main-content'>
				<Home />
				<WeeklyTopSongs />
			</div>
		</div>
	)
}

export default App