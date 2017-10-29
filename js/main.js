function Session() {
	this.canvas = document.getElementById('main_canvas');
	this.g = this.canvas.getContext('2d');
	this.g.fillStyle = 'rgb(255,0,0)';
	this.g.fillRect(0, 0, this.canvas.width, this.canvas.height);
	this.canvas.visible = 'hidden';
	this.canvas.width = 0;
	this.canvas.height = 0;
	this.x1=0;
	this.x2=0;
	this.y1=0;
	this.y2=0;
	session = this;

	mouse = new Mouse(this.canvas);

	this.draw = function() {
		session.g.fillStyle = 'rgb(255,255,255)';
		session.g.fillRect(
			0,
			0,
			session.canvas.width,
			session.canvas.height);
		session.g.fillStyle = 'rgb(0,0,0)';
		session.g.fillText('('+mouse.x+','+mouse.y+')',mouse.x,mouse.y);
		console.log(mouse.x);
		console.log(mouse.y);
	};

	this.startSession = function(){
		var body = document.getElementsByTagName('body')[0]
		this.interval=setInterval(this.draw,1000/60);
		this.canvas.visible = 'visible';
		this.canvas.width = screen.width;
		this.canvas.height = screen.height;
		console.log(this.canvas.width);
		console.log(this.canvas.height);
		if (screenfull.enabled) {
			screenfull.request(this.canvas);
		}
	};

	this.endSession = function(){
		clearInterval(this.interval);
		this.canvas.visible = 'hidden';
		if (screenfull.enabled) {
			screenfull.exit(this.canvas);
		}
		this.canvas.width = 0;
		this.canvas.height = 0;
	};
}

session = new Session();

if (screenfull.enabled) {
	screenfull.on('change', () => {
		console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');

		if(!screenfull.isFullscreen) {
			session.endSession();
		}
	});
}

function start(){
	console.log('start');
	session.startSession();
}

console.log('width = '+screen.width);
console.log('height = '+screen.height);

