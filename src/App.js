import React from 'react';
import SomanticPractice from './components/SomanticPractice'
//import axios from 'axios';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){

	}


	render() {
		return (
			<div>
				<SomanticPractice />
			</div>
		)
	}
}

export default App;
