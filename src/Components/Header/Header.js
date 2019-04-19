import React, {Component} from 'react';

export default class Header extends Component {
	render() {
		return (
			<div style={{backgroundColor: "#AB2A19",
						textAlign: "left", width: "100vw"}}>
				<header>
					<img style={{marginLeft: "5vw", marginRight: "1vw"}}
					src="https://cdn.discordapp.com/attachments/555135592103542826/568846890230087701/logo.png" alt="logo"/>
					<h1 style={{display: "inline-block"}}>SHELFIE</h1>
				</header>
			</div>
		)
	}
}