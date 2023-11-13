module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{css,jsx,png,jpg,json,svg}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};