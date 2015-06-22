// Enable classWideEvents for these classes
Model.setStaticProperty('classWideEvents', true);
Controller.setStaticProperty('classWideEvents', true);
alchemy.hawkejs.constructor.ViewRender.setStaticProperty('classWideEvents', true);

// Add the debugbar script
alchemy.hawkejs.on({type: 'viewrender', status: 'begin'}, function onBegin(viewRender) {

	var conduit = viewRender.conduit;

	// Add the debugbar javascript files
	viewRender.script(['debugbar/debugbar_panel', 'debugbar/core']);

	// Add the debugbar stylesheets
	viewRender.style('debugbar/core');

	var debugbarData = {
		session: conduit.session(),
		headers: conduit.headers,
		route: conduit.route,
		languages: conduit.languages,
		body: conduit.body,
		cookies: conduit.cookies,
		files: conduit.files,
		url: conduit.url,
		toobusy: alchemy.toobusy(),
		lag: alchemy.toobusy.lag()
	};

	viewRender.internal('debugbarData', debugbarData);
});
