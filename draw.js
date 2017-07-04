function drawEverything() {
		//black background
		colorRect(0,0,canvas.width,canvas.height, 'black');

		//left paddle
		colorRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT, 'white');
		//right paddle
		colorRect(canvas.width-PADDLE_THICKNESS,paddle2Y,PADDLE_THICKNESS,
			PADDLE_HEIGHT, 'white');
		//draw ball
		//draw net
		var netY = 0
		for (i=0;i<15;i++) {
			colorRect(399, netY, 2, 15, 'white');
			netY = netY+ 40;
		}
		colorCircle(ballX, ballY, 10, 'white');

		if (showWinScreen) {
			if (player1Score >= WINNING_SCORE) {
				canvasContext.fillText('Player 1 Wins', 368, 500)
			return;
			}	else if (player2Score >= WINNING_SCORE) {
				canvasContext.fillText('Player 2 Wins', 368, 500)
			return;
			}
			
		}


		if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
			showWinScreen = true;
		
		
	}	

		canvasContext.fillText(player2Score, canvas.width-150, 150)
		canvasContext.fillText(player1Score, 150, 150)

}

	function colorCircle(centerX, centerY, radius, drawColor) {
		canvasContext.fillStyle = drawColor
		canvasContext.beginPath();
		canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
		canvasContext.fill();

	}

	function colorRect(leftX,topY, width, height, drawColor) {
		canvasContext.fillStyle = drawColor;
		canvasContext.fillRect(leftX,topY, width, height);
	}