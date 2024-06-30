module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,png,html,css,js}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};