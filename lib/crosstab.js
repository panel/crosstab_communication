import _ from 'lodash-node/compat/index';
import ls from 'local-storage/local-storage';
import on from 'dom-event/index';

export function bootstrap() {
	'use strict';
	var form = document.forms[0];
	var target = document.getElementById('crosstab');

	function _appendListItem(ul, value) {
		var li = document.createElement('li');
		li.innerText = value;
		ul.appendChild(li);
	}

	if (_.isUndefined(form)) {
		ls.on('test', () => {
			_appendListItem(target, ls.get('test'));
		});
	} else {
		on(form, 'submit', event => {
			event.preventDefault();
			var input = event.target[0];

			ls.set('test', input.value);

			_appendListItem(target, input.value);
			input.value = '';
		});
	}
}