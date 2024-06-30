module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{json,png,html,css,js,txt}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};