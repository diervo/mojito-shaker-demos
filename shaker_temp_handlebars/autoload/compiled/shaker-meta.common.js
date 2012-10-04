YUI.add("shaker/metaMojits", function (Y, NAME) {
YUI.namespace("_mojito._cache.shaker");
YUI._mojito._cache.shaker.meta =
{
	"app": {
		"*": {
			"mojits": {
				"Simple": {
					"foo": {
						"js": [
							"/static/Simple/controller.common.js",
							"/static/Simple/binders/foo.js"
						],
						"css": [
							"/static/Simple/assets/base.css",
							"/static/Simple/assets/foo.css"
						]
					},
					"index": {
						"js": [
							"/static/Simple/controller.common.js",
							"/static/Simple/binders/index.js"
						],
						"css": [
							"/static/Simple/assets/base.css",
							"/static/Simple/assets/index.css"
						]
					},
					"other": {
						"js": [
							"/static/Simple/controller.common.js",
							"/static/Simple/binders/other.js"
						],
						"css": [
							"/static/Simple/assets/base.css"
						]
					},
					"update": {
						"js": [
							"/static/Simple/controller.common.js"
						],
						"css": [
							"/static/Simple/assets/base.css",
							"/static/Simple/assets/update.css"
						]
					}
				},
				"HTMLFrameMojit": {
					"index": {
						"js": [],
						"css": []
					}
				},
				"LazyLoad": {
					"index": {
						"js": [],
						"css": []
					}
				},
				"TunnelProxy": {},
				"ShakerHTMLFrameMojit": {
					"index": {
						"js": [],
						"css": []
					}
				}
			},
			"app": [
				"/static/poc_handlebars/assets/myappcommon.css"
			],
			"routesBundle": {}
		}
	},
	"core": [
		"/static/mojito/addons/ac/analytics.common.js",
		"/static/mojito/addons/ac/assets.common.js",
		"/static/mojito/addons/ac/composite.common.js",
		"/static/mojito/addons/ac/config.common.js",
		"/static/mojito/addons/ac/cookie.client.js",
		"/static/mojito/addons/ac/intl.common.js",
		"/static/mojito/addons/ac/meta.common.js",
		"/static/mojito/addons/ac/models.common.js",
		"/static/mojito/addons/ac/output-adapter.common.js",
		"/static/mojito/addons/ac/params.common.js",
		"/static/mojito/addons/ac/partial.common.js",
		"/static/mojito/addons/ac/url.common.js",
		"/static/mojito/addons/view-engines/hb.client.js",
		"/static/mojito/addons/view-engines/mu.client.js",
		"/static/mojito/autoload/action-context.common.js",
		"/static/mojito/autoload/controller-context.common.js",
		"/static/mojito/autoload/dispatch.common.js",
		"/static/mojito/autoload/loader.common.js",
		"/static/mojito/autoload/logger.common.js",
		"/static/mojito/autoload/mojit-proxy.client.js",
		"/static/mojito/autoload/mojito-client.client.js",
		"/static/mojito/autoload/mojito-test.common.js",
		"/static/mojito/autoload/mojito.common.js",
		"/static/mojito/shaker-output-handler.client.js",
		"/static/mojito/autoload/perf.client.js",
		"/static/mojito/autoload/resource-store-adapter.common.js",
		"/static/mojito/autoload/rest.common.js",
		"/static/mojito/autoload/route-maker.common.js",
		"/static/mojito/autoload/store.client.js",
		"/static/mojito/autoload/tunnel.client-optional.js",
		"/static/mojito/autoload/util.common.js",
		"/static/mojito/autoload/view-renderer.common.js"
	]
}});