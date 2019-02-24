/*------------------------------------------------------------------

[Master Script]

Organization     : Flamecore 
Organization URI : http://flamecore.pro
Name Project     : 
Version          : 1.0.0
Author           : Andika Chamberlin
Author URI       : http://andikachamberlin.github.io

-------------------------------------------------------------------*/

$(document).ready(function(){

	console.log("installed garlic@alpha.1.0.0.cocounut.js");

	// mousewheel alert
	window.addEventListener("wheel", _mousewheel);

	function _mousewheel(){
	    $("#_MW-Alert").addClass("_MW-Alert-active");
	}
	// mousewheel alert

	$("body").niceScroll({
		zindex:'99999999',
		cursorcolor: "rgba(0,0,0,0.4)",
		cursorwidth:"6px",
		cursorborder:false,
		horizrailenabled: false,
		enablemousewheel: false,
	});

	$("._scroll-magnum").niceScroll({
		zindex:'99999999',
		cursorcolor: "rgba(0,0,0,0.4)",
		cursorwidth:"5px",
		cursorborder:false,
		horizrailenabled: false,
		enablemousewheel: false,
	});

	

});
