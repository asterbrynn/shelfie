import React, {Component} from 'react';

export default class Product extends Component {
	render() {
		let {product} = this.props
		return (
			<div style={{border: "1px solid black", margin: 20}}>
				<img src={product.imgurl} alt=""
					style={{width: 200, margin: 20}}/>
				<p>{product.name}</p>
				<p>{product.price} star coins</p>
			</div>
		)
	}
}