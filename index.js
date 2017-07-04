	//Global Variable Declarations
	var canvas;
	var canvasContext;
	var ballX = 50;
	var ballY = 100;
	var ballVelocityX = 15;
	var ballVelocityY = 8;
	var paddle1Y = 4;
	var paddle2Y = 4;
	paddle2YVelocity = 5;

	const PADDLE_HEIGHT = 100;
	const PADDLE_THICKNESS = 4;

	var showWinScreen = false;


	var player1Score = 0;
	var player2Score = 0;
	const WINNING_SCORE = 3;

		window.onload = function() {
		console.log('Hello World!');
		canvas = document.getElementById('gameCanvas');
		canvasContext = canvas.getContext('2d');
		var framesPerSecond = 30;
		setInterval(function() {
			moveEverything()
			drawEverything()}
			, 1000/framesPerSecond );

		canvas.addEventListener('mousemove',
			function(evt) {
				var mousePos = calculateMousePos(evt);
				paddle1Y = mousePos.y-(PADDLE_HEIGHT/2);
			});

		canvas.addEventListener('mousedown', handleMouseClick)

	}

