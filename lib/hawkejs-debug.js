/**
 * Start mark when getting/compiling template function
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    1.0.0
 * @version  1.0.0
 */
alchemy.hawkejs.constructor.ViewRender.on('compilingTemplates', function(templates) {
	if (this._debugObject) {
		this._debugObject.mark('Compiling "' + templates + '"');
	}
});

/**
 * End mark when compiled template is ready
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    1.0.0
 * @version  1.0.0
 */
alchemy.hawkejs.constructor.ViewRender.on('compiledTemplates', function(templates) {
	if (this._debugObject) {
		this._debugObject.mark(false);
	}
});

/**
 * Start mark when beginning template function execution
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    1.0.0
 * @version  1.0.0
 */
alchemy.hawkejs.constructor.ViewRender.on('executingTemplate', function(name, template) {
	if (this._debugObject) {
		this._debugObject.mark('Executing "' + name + '"');
	}
});

/**
 * Stop mark when template has executed
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    1.0.0
 * @version  1.0.0
 */
alchemy.hawkejs.constructor.ViewRender.on('executedTemplate', function(name, template) {
	if (this._debugObject) {
		this._debugObject.mark(false);
	}
});

/**
 * Start mark when ViewRender is finishing up
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    1.0.0
 * @version  1.0.0
 */
alchemy.hawkejs.constructor.ViewRender.on('finishing', function(name, template) {
	if (this._debugObject) {
		this._debugObject.mark('Finishing');
	}
});

/**
 * End mark when the render is completed
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    1.0.0
 * @version  1.0.0
 */
alchemy.hawkejs.constructor.ViewRender.on('renderFinished', function(name, template) {
	if (this._debugObject) {
		this._debugObject.mark(false);
	}
});