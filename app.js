(function() {
	"use strict";

	window.onload = activate;

	function activate() {
		console.log("Activating");

		var url = "sprites/10021396586243-sprite.jpg";
		var id = "viewer";

		var canvas = document.getElementById(id);
		var ctx = canvas.getContext("2d");
		var img = document.getElementById("viewer-img-source");

		var frameCount = get_config_by_key("frameCount");
		var frameWidth = get_config_by_key("frameWidth");
		var frameHeight = get_config_by_key("frameHeight");

		var frame = 0;
		var theta = 0;
		var t0 = new Date();
		var ti = t0;
		var tf = t0;

		function loop() {
			update();
			render_frame(frame);
			requestAnimationFrame(loop);
		}

		requestAnimationFrame(loop);

		function update() {
			var dt = tf - ti;
			var omega = get_config_by_key("omega");
			theta += omega * (dt / 1000);
			theta = theta % 1.0;
			frame = Math.round(theta * frameCount);
			frame = frame % frameCount;
			ti = tf;
			tf = new Date();

			var FPS = 1.0 / (dt / 1000);
			// console.log("FPS:", Math.round(FPS));
			// console.log(theta, frame);
		}

		function render_frame(frame) {
			var sx = frame * frameWidth;
			var sy = 0;
			var sWidth = frameWidth;
			var sHeight = frameHeight;

			var dx = 0;
			var dy = 0;
			var dWidth = frameWidth;
			var dHeight = frameHeight;

			ctx.drawImage(img,
				sx, sy, sWidth, sHeight,
				dx, dy, dWidth, dHeight
			);
		}
	}

	function get_form_by_id(id) {
		var form;
		for (var i=0; i < document.forms.length; i++) {
			var f = document.forms[i];
			if (f.id == id) {
				form = f;
				break;
			}
		}
		return form;
	}

	function get_config_by_key(key) {
		var FORM_ID = "configuration";
		var form = get_form_by_id(FORM_ID);
		var value = form[key].value;
		return value;
	}
}());
