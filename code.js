// Constants for the grid dimensions
const ROWS = 1;
const COLS = 13;


$(document).ready(function () {
    // Generate HTML for the board
    getRandomDieFace();


    $("#start").click(startTurn);
    $("#reroll").click(rerollTurn);
    $("#end").click(endTurn);
    $("#scoreHu").click(humanScore);
    $("#scoreCh").click(chickenScore);
    $("#scoreCo").click(cowScore);


    function getRandomDieFace() {

        let squareCounter = 1;

        // Make one row
        for (let row = 1; row <= ROWS; row++) {

            // Make a row of squares
            for (let col = 1; col <= COLS; col++) {

                // Make a square
                let newSpan = $("<span>");

                // Give it a class of "hidingSpot"
                newSpan.addClass("hidingSpot");

                // 0.33 of getting raygun

                let random = Math.floor(Math.random()*13)+1;
                if (random <= 5) {
                    newSpan.addClass("raygun1");
                    newSpan.text("Raygun")
                } else if(random >5 && random <=7) {
                    newSpan.addClass("cow1");
                    newSpan.text("Cow")
                }

                else if(random > 7 && random <=9 ) {
                    newSpan.addClass("head1");
                    newSpan.text("Head")
                }else if(random > 9 && random < 11) {
                    newSpan.addClass("chicken1");
                    newSpan.text("Chicken")
                }

                else if(random >=11 && random <=13) {
                    newSpan.addClass("tank1");
                    newSpan.text("Tank");
                    newSpan.css( 'box-shadow', '7px -5px 7px 2px rgba(244,19,238,1) inset');
                }
                squareCounter++;
                newSpan.on("click");
                // Append it as the last child of the div with ID "gameBoard"
                $("#gameBoard").append(newSpan);

            }



        }
    }

    function startTurn(){
        let startTurn = $(this);
        if (startTurn=== true) {

            $("#scoreHu").hide();
            $("#scoreCh").hide();
            $("#scoreCo").hide();
        }
    }
    function chickenScore(){


    }


});