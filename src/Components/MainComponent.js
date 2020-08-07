import React from 'react';
import NavBar from './Navbar';
import Search from './Search';

class Main extends React.Component {
	render() {
		return (
			<div>				
				<NavBar />
				<Search />
			</div>
		)
	}
}

export default Main;