
 // Get the canvas and its context
 const canvas = document.getElementById("gameCanvas");
 const ctx = canvas.getContext("2d");

 var name1 = localStorage.getItem(1);

// const project="TTA project"

//collecting images
const birdImage = new Image();
birdImage.src = "bird2.gif";
const blast = new Image();
blast.src = "DarlingScholarlyDoe-small.gif";

 // Bird sizes 
 const birdWidth = 80;
 const birdHeight = 80;
 let birds = [];

 // Player score
 let score = 0;

 // Game running id
 let gameRunning = true;

 //timer start
//  startTimer();

 // Function to create a new bird
 function createBird() {
   const bird = {
     x: 0,
     y: Math.floor(Math.random() * (canvas.height - birdHeight)),
     alive: 1,
   };
   birds.push(bird);
 }

 // Function to draw the bird on the canvas
 function drawBird(bird) {
   if (bird.alive==1) {
     ctx.drawImage(birdImage, bird.x, bird.y, birdWidth, birdHeight);
   }
 }


 function drawBird2(bird) {
  if (bird.alive<=5) {
    ctx.drawImage(blast, bird.x, bird.y, birdWidth, birdHeight);
  }
}


 // Function to check if the bird was shot
 function checkShotBird(mouseX, mouseY) {
   for (const bird of birds) {
     if (
       bird.alive ==1 &&
       mouseX >= bird.x &&
       mouseX <= bird.x + birdWidth &&
       mouseY >= bird.y &&
       mouseY <= bird.y + birdHeight
     ) {
       bird.alive = 2;//updating as bird die
       //playing audio blast
       playAudio()
       score++;
     }
   }

   if (score >= 10) {
     //timer end
     stopTimer();
     gameRunning = false;
   }
 }

 // Function to update the canvas and draw the game elements
 function updateCanvas() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   if (gameRunning) {
     // Create a new bird every 60 frames (approx. 1 second)
     if (Math.random() < 0.04) {
       createBird();
     }

     // Move and draw the birds
     for (const bird of birds) {
       if (bird.alive==1) {
         bird.x += 2;
         drawBird(bird);
       }

       // if bird.alive is 2 than its dead so we need to show blast upto 2sec so redrawing 2 times means 2 frames
       if (bird.alive<=5 && bird.alive>=2) {
        drawBird2(bird);
        bird.alive=bird.alive+1;
      }
     }

     // Draw the score and player name
     ctx.fillStyle = "black";
     ctx.font = "24px Arial";
     //displaying score name and project name tooo
     ctx.fillText("Score: " + score +"        name: "+name1+"                   TTA PROJECT"+"      ",10, 30);
     requestAnimationFrame(updateCanvas);
   }
    else {
     //end of game redirect to restart page
    location.replace("restart.html");
   }
 }

 // Event listener to handle mouse clicks
 canvas.addEventListener("click", function (e) {
   if (gameRunning) {
     const rect = canvas.getBoundingClientRect();
     const mouseX = e.clientX - rect.left;
     const mouseY = e.clientY - rect.top;
     checkShotBird(mouseX, mouseY);
   }
 });

 // Start the game loop
 updateCanvas();

 function playAudio() {
  // music runs when the bird fired
  const audio = new Audio('kill.mp3');

  // Play the audio
  audio.play();
}

//timer section

let startTime = null;
    let intervalId = null;
    
    //time starter
    startTime = new Date().getTime();
    intervalId = setInterval(updateTimer, 1000); // Update timer every second

    //time updater
    function updateTimer() {
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - startTime;
      const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
      document.getElementById('timer').innerText = `timer going: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  
    //end time caliculator
    function stopTimer() {
      clearInterval(intervalId);
      const totalTimeElapsed = new Date().getTime() - startTime;
      const totalMinutes = Math.floor((totalTimeElapsed % (1000 * 60 * 60)) / (1000 * 60));
      const totalSeconds = Math.floor((totalTimeElapsed % (1000 * 60)) / 1000);
      var x=totalMinutes+':'+totalSeconds;
      localStorage.setItem(2,x);
      var y=totalSeconds;
      localStorage.setItem(3,y);
    }








