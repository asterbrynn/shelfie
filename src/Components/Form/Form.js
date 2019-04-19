import React, {Component} from 'react';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			price: 0,
			imgurl: ""
		}
	}
	render() {
		return (
			<div>Form</div>
		)
	}
}