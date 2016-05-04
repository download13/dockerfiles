module.exports = {
	production: {
		url: process.env.BLOG_URL,
		mail: {},
		database: {
			client: 'sqlite3',
			connection: {
				filename: '/ghost/content/data/ghost.db'
			},
			debug: false
		},
		server: {
			host: '0.0.0.0',
			port: process.env.PORT || '80'
		}
	}
};
