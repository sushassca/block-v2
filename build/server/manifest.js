const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0b897dc1.js","app":"_app/immutable/entry/app.1042d86e.js","imports":["_app/immutable/entry/start.0b897dc1.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/singletons.804f4a86.js","_app/immutable/entry/app.1042d86e.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.14c2e2ac.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-f12174f1.js')),
			__memo(() => import('./chunks/1-879ac82c.js')),
			__memo(() => import('./chunks/2-377e9910.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-2dac9395.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
