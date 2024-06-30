module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,png,html,css,js,txt}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};