import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				{this.props.inventory.map(product => {
					return <Product key={product.id} product={product}
					inventory={this.props.inventory}/>
				})}
			</div>
		)
	}
}