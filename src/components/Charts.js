// Charts.js

import React, { Component } from 'react';
import ChartRepo from '../chartData/chartRepo'; // Import your Chart component
import { getData } from '../chartData/utils'; // Import function to fetch data
import { TypeChooser } from 'react-stockcharts/lib/helper';

class Charts extends Component {
    componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <ChartRepo type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}


}
export default Charts;
