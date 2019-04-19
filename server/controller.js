module.exports = {
	getInventory(req, res) {
		const db = req.app.get("db");
		db.get_inventory().then(response => {
			res.status(200).send(response)
		})
	},
	create(req, res) {
		const db = req.app.get("db");
		const {name, price, img} = req.body;
		db.create_product([name, price, img]).then(response => {
			res.status(200).send(response)
		})
	}
}