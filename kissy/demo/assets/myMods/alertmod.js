KISSY.add('myMods/alertmod'function(S, DOM, EVENT){

	"use strict";

	return {
		init: function(wrap) {
			var wrap = DOM.get(wrap);

			EVENT.on(wrap, 'click', function() {
				alert('Hello KISSY!');
			});
		}
	}

},{
	requires:['dom', 'event']
});
