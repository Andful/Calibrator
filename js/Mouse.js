function Mouse(canvas){
	this.x = 0;
	this.y = 0;

	mouse = this;

	canvas.onmousemove = function(event) {
		mouse.x = event.pageX;
		mouse.y = event.pageY;
	}
}