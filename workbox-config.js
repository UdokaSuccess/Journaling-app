module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,html,json}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
	   /^source$/
]
};