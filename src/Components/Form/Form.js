import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			price: 0,
			imgurl: ""
		}
		this.handleCancel = this.handleCancel.bind(this)
	}
	handleURLChange = e => {
		this.setState({
			imgurl: e.target.value
		})
	}
	handleNameChange = e => {
		this.setState({
			name: e.target.value
		})
	}
	handlePriceChange = e => {
		this.setState({
			price: e.target.value
		})
	}

	handleAdd = () => {
		let newProduct = this.state;
		let inventory = this.props.inventory;
		axios.post('/api/product', newProduct).then(res => {
			this.setState({
				imgurl: res.data.img,
				name: res.data.name,
				price: res.data.price
			})
		}).catch(err => console.log("posting error lol", err))
	}
	handleCancel() {
		this.setState({
			name: "",
			price: 0,
			imgurl: ""
		})
	}

	render() {
		return (
			<div style={{backgroundColor: "#3AD886", margin: 20, padding: 20}}>
				Form
				<p>
					<label htmlFor="imgurl">Image URL: </label>
					<input type="url"
						name="imgurl" id="imgurl"
						value={this.state.imgurl}
						onChange={this.handleURLChange}/>
				</p>
				<p>
					<label htmlFor="name">Product Name: </label>
					<input type="text"
						name="name" id="name"
						value={this.state.name}
						onChange={this.handleNameChange}/>
				</p>
				<p>
					<label htmlFor="price">Price: </label>
					<input type="number"
						name="price" id="price"
						value={this.state.price}
						onChange={this.handlePriceChange}/>
				</p>
				<button onClick={this.handleCancel}>Cancel</button>
				<button onClick={this.handleAdd}>Add to Inventory</button>
			</div>
		)
	}
}