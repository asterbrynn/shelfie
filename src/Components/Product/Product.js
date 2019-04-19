import React, {Component} from 'react';

export default class Product extends Component {
	render() {
		let {product} = this.props
		return (
			<div style={{backgroundColor: "#D34735", color: "white", margin: 20}}>
				<img src={product.img} alt={product.img}
					style={{width: "33vw", margin: 20}}/>
				<div>
					<p>{product.name}</p>
					<p>{product.price} star coins</p>
				</div>
			</div>
		)
	}
}