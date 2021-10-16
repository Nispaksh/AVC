x = 0;
y = 0;
draw_apple = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
       document.getElementById("status").innerHTML = "System is listening please speak";
       recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

var content = event.results[0][0].transcript;

     document.getElementById("status").innerHTML = "The Speech has been recogized as: " + content;
          if(content == "apple")
          {
              x = Math.floor(Math.random() * 900);
              y = Math.floor(Math.random() * 600);
              document.getElementById("status").innerHTML = "Started drawing apple ";
              draw_apple= "set";
          }
          if(content == "rectangle")
          {
              x = Math.floor(Math.random() * 900);
              y = Math.floor(Math.random() * 600);
              document.getElementById("status").innerHTML = "Started drawing rectangle ";
              draw_rect = "set";
          }

}

function setup()
{
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_apple == "set")
    {
        radius = Math.floor(Math.random() * 100);
        apple(x,y,90,90);
        document.getElementById("status").innerHTML = "Apple is drawn. ";
        draw_apple= "";
    }
    if(draw_rect == "set")
    {
        rect(x,y,90,70);
        document.getElementById("status").innerHTML = "Rectangle is drawn. ";
        draw_rect = "";
    }

}