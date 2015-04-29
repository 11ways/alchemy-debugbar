//compilingTemplates && compiledTemplates
//executingTemplate & executedTemplate

alchemy.hawkejs.constructor.ViewRender.on('executingTemplate', function(name, template) {

	var target = this._debugObject;

	if (target) {
		target.mark('Executing "' + name + '"');
	}
});

alchemy.hawkejs.constructor.ViewRender.on('executedTemplate', function(name, template) {

	var target = this._debugObject;

	if (target) {
		target.mark('Executed "' + name + '"');
	}

	console.log('Executed...', !!target);
});