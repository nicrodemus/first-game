

var position0 = {
    x1: 450,
    y1: 45,
    x2: 450,
    y2: 100,
    penality: true,
    specialCard: false  
  };
  
var position1 = {
    x1: 580,
    y1: 45,
    x2: 580,
    y2: 100,
    penality: true,
    specialCard: false 
};



var position2 = {
    x1: 710,
    y1: 50,
    x2: 710,
    y2: 100,
    penality: false,
    specialCard: false, 
};

var position3 = {
    x1: 840,
    y1 :  50,
    x2 : 840,
    y2 : 100,
    penality: false,
    specialCard : true,
};

var position4 = {
    x1: 975,
    y1 : 50,
    x2 : 975,
    y2 : 100,
    penality: false,
    specialCard : true,
};

var position5 = {
    x1: 975,
    y1 : 180,
    x2 : 975,
    y2 : 230,
    penality:true,
    specialCard : true,
};

var position6 = {x1: 975,
    y1 : 310,
    x2 : 975,
    y2 : 360,
    penality: false,
    specialCard : true,
};

var position7 = {
    x1: 975,
    y1 : 440,
    x2 : 975,
    y2 : 490,
    penality : true,
    specialCard: false,
};

var position8 = {
    x1: 975,
    y1 : 570,
    x2 : 975,
    y2 : 620,
    penality: false,
    specialCard : false,
};

var position9 = {
    x1: 840,
    y1 : 570,
    x2 : 840,
    y2 : 620,
    penality: false,
    specialCard : false,
};

var position10 = {
    x1: 710,
    y1 : 570,
    x2 : 710,
    y2 : 620,
    penality: false,
    specialCard : false,
};

var position11 = {
    x1: 580,
    y1 : 570,
    x2 : 580,
    y2 : 620,
    penality: false,
    specialCard : true,
};

var position12 = {
    x1: 450,
    y1 : 570,
    x2 : 450,
    y2 : 620,
    penality: true,
    specialCard : false,
};

var position13 = {
    x1 : 450,
    y1 : 440,
    x2 : 450,
    y2 : 490,
    penality: false,
    specialCard : false,               
};

var position14 = {x1: 450,
    y1 : 310,
    x2 : 450,
    y2 : 360,
    penality: false,
    specialCard : false,
};

var position15 = {
    x1 : 450,
    y1 : 180,
    x2 : 450,
    y2 : 230,
    penality: false,
    specialCard : false,
};

var position16 = {
    x1 : 580,
    y1 : 180,
    x2 : 580,
    y2 : 230,
    penality: false,
    specialCard : false,
};

var position17 = {
    x1 : 710,
    y1 : 180,
    x2 : 710,
    y2 : 230,
    penality : true,
    specialCard : false,
};

var position18 = {
    x1 : 710,
    y1 : 310,
    x2 : 710,
    y2 : 360,
    penality: false,
    specialCard : false,
};

var mixPosition = [
    position0,
    position1,
    position2,
    position3,
    position4,
    position5,
    position6,
    position7,
    position8,
    position9,
    position10,
    position11,
    position12,
    position13,
    position14,
    position15,
    position16,
    position17,
    position18,
 
]
//------------------- cards section ----------//
var CardA = $(".A");
var CardB = $(".B");



function pickACard () {
    var classCard = [CardA, CardB]
    var randomCard = Math.floor(Math.random() * classCard.length);
    


    if (randomCard === 0) {
        $('.A').show();
        $('.B').hide();
        
}   
    if (randomCard === 1) {
        $('.A').hide();
        $('.B').show();
    }
//   if  ( $("input[name='exampleRadios']:checked").val() === "option1") {
//       console.log("correct");
//       updateIndex(player[playerIndex], +1);


//   } else {
//       updateIndex(player[playerIndex], -1)
  }




//------------------- end cards sections   ----------//

var canvas = document.querySelector(".my-canvas");


 var ctx = canvas.getContext("2d");

 
// var player1 = goose1
// var player2 = goose2

var player = [
    {
    gooseIndex: 0,
    gooseX: mixPosition[0].x1,
    gooseY: mixPosition[0].y1,
    gooseImg: new Image(),
    },
    {
    gooseIndex: 0,
    gooseX: mixPosition[0].x2,
    gooseY: mixPosition[0].y2,
    gooseImg: new Image(),
    }
]

function updateIndex (onePlayer, indexChange) {
    onePlayer.gooseIndex += indexChange;
    console.log(onePlayer.gooseIndex)

    if (onePlayer.gooseIndex >= mixPosition.length) {
        onePlayer.gooseIndex = mixPosition.length - 1;
    }

    if (onePlayer.gooseIndex < 0) {
        onePlayer.gooseIndex = 0;
    }
} 


// specify "src" as if it was from HTML file
player[0].gooseImg.src = "./images/goose.jpg";




player[1].gooseImg.src = "./images/goose2.jpg";


drawingLoop()

var counter = 0;

$(".btn1").click(function(){
    launchingdie();

});

function drawingLoop() {
    



    drawBackground();

     ctx.drawImage(player[0].gooseImg, player[0].gooseX, player[0].gooseY, 40, 40);
     ctx.drawImage(player[1].gooseImg, player[1].gooseX, player[1].gooseY, 40, 40);

   

    var dadiera = $(".dadiera");
    
    
    
    
    


    requestAnimationFrame(function () {
        
        drawingLoop();
        
    
    
        
    
    });
    
}
//--------------------- dice section -----------//



var playerIndex;
$(".form-check-input-1").click(function(){
  if  ($("#exampleRadios1") || $("#exampleRadios4")) {
      console.log("This is my playerIndex",playerIndex) ;
      $(".A").hide();
      $(".B").hide();
    //   player[playerIndex].gooseX = player[playerIndex].gooseX + 5;
  }
})



function launchingdie () {

        var classes = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6" ]
        counter += 1 ;
        if(counter % 2 === 0) {
            // console.log("counter");
            playerIndex = 1;

        } else {
            // console.log("nocounter");
            playerIndex = 0;
        }

        var randomDice = Math.floor(Math.random()* classes.length)

        if($(".penality").hasClass("penality-showing")) {
            $(".penality").removeClass("penality-showing");
            $(".penality").html("")
        }


        if(randomDice === 0){
            updateIndex(player[playerIndex], 1);

            if(mixPosition[player[playerIndex].gooseIndex].penality === true ){
                updateIndex(player[playerIndex], -1);;
                $(".penality").addClass("penality-showing");
                $(".penality").html(`<h4>player ${playerIndex + 1} Receives a penality</h4>`);
                console.log("penality");
            }
            if (mixPosition[player[playerIndex].gooseIndex].specialCard === true) {
                console.log("nh gbrrvcr")
                pickACard()

                
                
                if  ( $("input[name='exampleRadios']:checked").val() === "option1") {
                    console.log("correct");
                    updateIndex(player[playerIndex], +1);
              
              
                } else {
                    updateIndex(player[playerIndex], -1)
                }
            }
          
            
            // goose2Index += 1;
            $(dadiera).removeClass( "dice2 dice3 dice4 dice5 dice6")

        } 
        if (randomDice === 1){
            // dadiera.addClass("dice1")
            updateIndex(player[playerIndex], 2);

            if(mixPosition[player[playerIndex].gooseIndex].penality === true){
                updateIndex(player[playerIndex], -1);;
                $(".penality").addClass("penality-showing");
                $(".penality").html(`<h4>player ${playerIndex + 1} Receives a penality</h4>`);

            }
            if (mixPosition[player[playerIndex].gooseIndex].specialCard === true) {
                pickACard()
                if  ( $("input[name='exampleRadios']:checked").val() === "option1") {
                    console.log("correct");
                    updateIndex(player[playerIndex], +1);
              
              
                } else {
                    updateIndex(player[playerIndex], 0)
                }
              

            }


            // goose2Index += 2;
            $(dadiera).removeClass( "dice1 dice3 dice4 dice5 dice6")
        } 
        
        if (randomDice === 2){
            updateIndex(player[playerIndex], 3);

            if(mixPosition[player[playerIndex].gooseIndex].penality === true){
                updateIndex(player[playerIndex], -1);
                $(".penality").addClass("penality-showing");
                $(".penality").html(`<h4>player ${playerIndex + 1} Receives a penality</h4>`);

            }
            if (mixPosition[player[playerIndex].gooseIndex].specialCard === true) {
                pickACard()
                if  ( $("input[name='exampleRadios']:checked").val() === "option1") {
                    console.log("correct");
                    updateIndex(player[playerIndex], +1);
              
              
                } else {
                    updateIndex(player[playerIndex], 0)
                }
              

            }

            // goose2Index += 3;
            $(dadiera).removeClass( "dice1 dice2 dice4 dice5 dice6")
        } 
        
        if (randomDice === 3){
            updateIndex(player[playerIndex], 4);

            if(mixPosition[player[playerIndex].gooseIndex].penality === true){
                updateIndex(player[playerIndex], -1);
                $(".penality").addClass("penality-showing");
                $(".penality").html(`<h4>player ${playerIndex + 1} Receives a penality</h4>`);
                

            }
            if (mixPosition[player[playerIndex].gooseIndex].specialCard === true) {
                pickACard()
                if  ( $("input[name='exampleRadios']:checked").val() === "option1") {
                    console.log("correct");
                    updateIndex(player[playerIndex], +1);
              
              
                } else {
                    updateIndex(player[playerIndex], 0)
                }
              

            }

            // goose2Index += 4;
            $(dadiera).removeClass( "dice1 dice2 dice3 dice5 dice6")
        } 
        
        if (randomDice === 4){
            updateIndex(player[playerIndex], 5);

            if(mixPosition[player[playerIndex].gooseIndex].penality === true){
                updateIndex(player[playerIndex], -1);
                $(".penality").addClass("penality-showing");
                $(".penality").html(`<h4>player ${playerIndex + 1} Receives a penality</h4>`);
                
            }
            if (mixPosition[player[playerIndex].gooseIndex].specialCard === true) {
                pickACard()
                if  ( $("input[name='exampleRadios']:checked").val() === "option1") {
                    console.log("correct");
                    updateIndex(player[playerIndex], +1);
              
              
                } else {
                    updateIndex(player[playerIndex], 0)
                }
              

            }

            // goose2Index += 5;
            $(dadiera).removeClass( "dice1 dice2 dice3 dice4 dice6")
        }
        
        if (randomDice === 5) {
            updateIndex(player[playerIndex], 6);

            if(mixPosition[player[playerIndex].gooseIndex].penality === true){
                updateIndex(player[playerIndex], -1);
                $(".penality").addClass("penality-showing");
                $(".penality").html(`<h4>player ${playerIndex + 1} Receives a penality</>`);

            }
            if (mixPosition[player[playerIndex].gooseIndex].specialCard === true) {
                pickACard()

            }
            if  ( $("input[name='exampleRadios']:checked").val() === "option1") {
                console.log("correct");
                updateIndex(player[playerIndex], +1);
          
          
            } else {
                updateIndex(player[playerIndex], 0)
            }
          

            // goose2Index += 6;
            $(dadiera).removeClass( "dice1 dice2 dice3 dice4 dice5")    
        }
        
        var randomSelection = classes[randomDice];
        
        dadiera.addClass(randomSelection);

        if (playerIndex==0){
            player[playerIndex].gooseX = mixPosition[player[playerIndex].gooseIndex].x1;
            player[playerIndex].gooseY = mixPosition[player[playerIndex].gooseIndex].y1;
        } else {
            player[playerIndex].gooseX = mixPosition[player[playerIndex].gooseIndex].x2;
            player[playerIndex].gooseY = mixPosition[player[playerIndex].gooseIndex].y2;
        }
        // if (player[playerIndex].gooseIndex === mixPosition.length - 1) {
           
        // }

        if (player[0].gooseX === position18.x1 && player[0].gooseY === position18.y1) {
            console.log(" player one is winner");
            $(".game-end").addClass("showing");
            $(".popup-content h2").html("Player One Won")
        }


        if (player[1].gooseX === position18.x2 && player[1].gooseY === position18.y2) {
            console.log( "player two winner");
            $(".game-end").addClass("showing");
            $(".popup-content h2").html("Player Two Won");  
        }

console.log(position18);
        //------------- goose1 ---------------//

        // if (goose2Index >= mixPosition.length) {
        //     goose2Index = mixPosition.length - 1;
        // }

        // goose2X = mixPosition[goose2Index].x2;
        // goose2Y = mixPosition[goose2Index].y2;
        console.log(player[0]);
        console.log("this is the CL",player[1]);

     
       
    }

function drawBackground() {
    ctx.clearRect(0,0, 1450,680);
//   ctx.fillRect(0, 0, 1400, 800);
//   ctx.fillStyle = "deeppink";

//     ctx.beginPath();

//   ctx.arc(circle1X, circle1Y, 20, 0, 2 * Math.PI);
//   ctx.strokeStyle = "blue";
//   ctx.stroke();
//   ctx.closePath();

//   ctx.beginPath();

//   ctx.arc(circle2X, circle2Y, 20, 0, 2 * Math.PI);
//   ctx.strokeStyle = "darkgreen";
//   ctx.stroke();
//   ctx.closePath();



// class Dot1 {
//   constructor(positionX, positionY) {
//     this.x1 = positionX;
//     this.y1 = positionY;
//   }
//   drawMe() {
//     ctx.arc(this.x1, this.y1, 1, 0, 2 * Math.PI);
//     // ctx.strokeStyle = "blue";
//     ctx.stroke();
//     ctx.closePath();
//   }
// }

// class Dot2 {
//   constructor(positionX, positionY) {
//     this.x2 = positionX;
//     this.y2 = positionY;
//   }
//   drawMe() {
//     ctx.arc(this.x2, this.y2, 1, 0, 2 * Math.PI);
//     // ctx.strokeStyle = "blue";
//     ctx.stroke();
//     ctx.closePath();
//   }
// }
      
}


//  ------------------------------- end of positions --------------------------------------



function resetGame() {
    // player[0].gooseX === position0.x1 && player[0].gooseY === position0.y1;
    // player[1].gooseX === position0.x2 && player[1].gooseY === position0.y2;
     player = [
        {
        gooseIndex: 0,
        gooseX: mixPosition[0].x1,
        gooseY: mixPosition[0].y1,
         gooseImg: new Image(),
        },
        {
        gooseIndex: 0,
        gooseX: mixPosition[0].x2,
        gooseY: mixPosition[0].y2,
         gooseImg: new Image(),
        }
    ]
    player[0].gooseImg.src = "./images/goose.jpg";
    player[1].gooseImg.src = "./images/goose2.jpg";
    $(".game-end").removeClass("showing");
}

$(".restart").click(function(){
    resetGame();
});

drawBackground();




function displayCanvas() {
    $(".my-canvas").addClass("canvasShowing");
}

$(".start").click(function(){
    displayCanvas()
});