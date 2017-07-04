function computerMovement() {
	var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2)
	if(paddle2YCenter < ballY-35) {
		paddle2Y += paddle2YVelocity;
	} else if (paddle2YCenter > ballY+35){
		paddle2Y -= paddle2YVelocity;
	}
}

	function moveEverything() {
		setInterval(computerMovement, 60)

		if (showWinScreen) {
			return;
		}

		ballX = ballX + ballVelocityX;
		ballY = ballY + ballVelocityY;
		if (ballX > canvas.width-4) {
			if(ballY > paddle2Y && ballY < paddle2Y+PADDLE_HEIGHT) {
			ballVelocityX = -ballVelocityX;

			var deltaY = ballY
				-(paddle2Y+PADDLE_HEIGHT/2);
				ballVelocityY = deltaY * 0.35;
			} else {
				player1Score++; //must be BEFORE ballReset()
				ballReset()
			}
		}
		if (ballX < 4) {
			if(ballY > paddle1Y && ballY < paddle1Y+PADDLE_HEIGHT) {
				ballVelocityX = -ballVelocityX;

							var deltaY = ballY
				-(paddle1Y+PADDLE_HEIGHT/2);
				ballVelocityY = deltaY * 0.35;
			} else {
			player2Score++;
			ballReset()
			}
		}
		if (ballY > canvas.height || ballY < 0) {
			ballVelocityY = -ballVelocityY
		}

		ballY = ballY
	}

	function ballReset() {
		ballX = canvas.width/2;
		ballVelocityX = -ballVelocityX;

	}