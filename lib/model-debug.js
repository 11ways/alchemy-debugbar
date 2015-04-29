/**
 * Add debugobject when finding
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    0.1.0
 * @version  0.1.0
 */
Model.on('finding', function onFinding(options) {

	var target = this,
	    data   = {},
	    obj;

	if (options._debugObject) {
		target = options._debugObject;
	}

	// Store the find options
	data.findOptions = options;

	// And the model info
	data.modelName = this.name;

	// Title to show
	data.title = 'Find "' + this.name + '"';

	obj = target.debug('find', data, true);

	if (obj) {
		options._debugObject = obj;
	}
});

/**
 * Add label when query has been executed
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    0.1.0
 * @version  0.1.0
 */
Model.on('queried', function onQueried(options, items) {
	if (options._debugObject) {
		options._debugObject.mark('queried');
	}
});

/**
 * Stop timer when find has finished
 *
 * @author   Jelle De Loecker <jelle@kipdola.be>
 * @since    0.1.0
 * @version  0.1.0
 */
Model.on('found', function onFound(options, documents) {
	if (options._debugObject) {
		options._debugObject.stop('found ' + documents.length + ' documents');
	}
});