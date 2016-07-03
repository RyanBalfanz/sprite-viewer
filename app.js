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

		var frameCount = 40;
		var frameWidth = 8320 / frameCount;
		var frameHeight = 432;
		var frameRate = 60;

		var frame = 0;
		setInterval(function(){
			render(frame % frameCount);
			frame++;
		}, 1000/frameRate);

		function render(frame) {
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
}());
