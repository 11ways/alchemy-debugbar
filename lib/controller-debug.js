/**
 * Add debugobject when starting to render
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    0.1.0
 * @version  0.1.0
 */
Controller.on('rendering', function onRendering(template) {

	var target = this,
	    data   = {},
	    bridge,
	    obj;

	if (this._debugObject) {
		target = this._debugObject;
	}

	data.title = 'Rendering "' + template + '"';
	obj = target.debug('rendering', data, true);

	if (obj) {
		this.conduit._debugController = obj;
		this.conduit.viewRender._debugObject = obj;
	}
});

/**
 * Stop timer when response is going to be sent
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    0.1.0
 * @version  0.1.0
 */
Controller.on('responding', function onResponding() {

	var target = this.conduit._debugController;

	if (target) {
		target.stop('Rendered');
	}
});