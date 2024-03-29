var config = {
	shop: '',
	currency: {
		decimal: 2,
		prefix: 'GHC',
		position: 'left', // prefix positioning
		onload: true, // formatting onload
		selector: '[data-price]'
	},
	calculate: {
		wrapper: '[data-calculate-me]',
		item: '.total-item',
		except: '.total',
		order: '#total-order',
		shipping: '#total-shipping',
		discount: '#total-discount',
		tax: '#total-tax',
		total: '#total-all'
	}
};