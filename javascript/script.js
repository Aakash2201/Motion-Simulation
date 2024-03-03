var MyCanva = document.getElementById("myCanvas");
var MyCanvaContext = MyCanva.getContext("2d");

var StartPoint_X  = 20;
var StartPoint_Y  = 20;

var StopPoint_X   = 0;
var StopPoint_Y   = 0;

var distance      = 0;


function clearCanvas() 
{

  MyCanvaContext.clearRect(0, 0, MyCanva.width, MyCanva.height);

}

function moveRight()
{
  
  // clearCanvas();

  MyCanvaContext.beginPath();

  MyCanvaContext.moveTo(StartPoint_X,StartPoint_Y);
  
  StopPoint_X       = StopPoint_X + 10;
  StopPoint_Y       = StartPoint_Y;

  MyCanvaContext.lineTo(StopPoint_X,StopPoint_Y);

  // console.log(StopPoint_X);

  MyCanvaContext.stroke();

  StartPoint_X       = StopPoint_X;

}

function moveLeft()
{
  // clearCanvas();

  MyCanvaContext.beginPath();

  MyCanvaContext.moveTo(StartPoint_X,StartPoint_Y);
  
  StopPoint_X       = StopPoint_X - 10;
  StopPoint_Y       = StartPoint_Y;

  MyCanvaContext.lineTo(StopPoint_X,StopPoint_Y);

  // console.log(StopPoint_X);

  MyCanvaContext.stroke();

  StartPoint_X       = StopPoint_X;
}


function moveDown()
{
  // clearCanvas();

  MyCanvaContext.beginPath();

  MyCanvaContext.moveTo(StartPoint_X,StartPoint_Y);
  
  StopPoint_X       = StartPoint_X;
  StopPoint_Y       = StopPoint_Y + 10;

  MyCanvaContext.lineTo(StopPoint_X,StopPoint_Y);

  // console.log(StopPoint_X);

  MyCanvaContext.stroke();

  StartPoint_Y       = StopPoint_Y;

}



function moveUp()
{
  // clearCanvas();

  MyCanvaContext.beginPath();

  MyCanvaContext.moveTo(StartPoint_X,StartPoint_Y);
  
  StopPoint_X       = StartPoint_X;
  StopPoint_Y       = StopPoint_Y - 10;

  MyCanvaContext.lineTo(StopPoint_X,StopPoint_Y);

  // console.log(StopPoint_X);

  MyCanvaContext.stroke();

  StartPoint_Y       = StopPoint_Y;

}



function UpdatedPoints(X, Y, Speed, time) {
  var tempX = X;
  var tempY = Y;
  var delay = 1000; // Delay in milliseconds (adjust as needed)
  var interval = setInterval(function() {
    if (time <= 0) {
      clearInterval(interval);
      return;
    }
    distance += Speed;
    X = 20 + distance;
    Y = 20 + distance;
    clearCanvas();
    MyCanvaContext.beginPath();
    MyCanvaContext.moveTo(20, 20);
    MyCanvaContext.lineTo(X, Y);
    MyCanvaContext.stroke();
    time--;
    console.log("time : " + time + " distance : " + distance)
  }, delay);
}


function UpdatedPointsX(X, Y, Speed, time) {
  var delay = 1000; // Delay in milliseconds (adjust as needed)
  var interval = setInterval(function() {
    if (time <= 0) {
      clearInterval(interval);
      return;
    }
    distance += Speed;
    X = 20 + distance;
    clearCanvas();
    MyCanvaContext.beginPath();
    MyCanvaContext.moveTo(20, 20);
    MyCanvaContext.lineTo(X, Y);
    MyCanvaContext.stroke();
    time--;
    console.log("time : " + time + " distance : " + distance)
  }, delay);
}



function UpdatedPointsY(X, Y, Speed, time) {
  var delay = 1000; // Delay in milliseconds (adjust as needed)
  var interval = setInterval(function() {
    if (time <= 0) {
      clearInterval(interval);
      return;
    }
    distance += Speed;
    Y = 20 + distance;
    clearCanvas();
    MyCanvaContext.beginPath();
    MyCanvaContext.moveTo(20, 20);
    MyCanvaContext.lineTo(X, Y);
    MyCanvaContext.stroke();
    time--;
    console.log("time : " + time + " distance : " + distance)
  }, delay);
}


function Submit_Run() {

  document.getElementById("warning_checkbox").style.display = "none";


  var X       = parseInt(document.getElementById("Start_X").value);
  var Y       = parseInt(document.getElementById("Start_Y").value);
  var Speed   = parseInt(document.getElementById("Start_Speed").value);
  var time    = parseInt(document.getElementById("Start_Time").value);

  var X_selected = document.getElementById("OnlyX_axis").checked;
  var Y_selected = document.getElementById("OnlyY_axis").checked;
  
  clearCanvas();

  if(X_selected && Y_selected)
  {
    UpdatedPoints(X, Y, Speed, time);
  }
  else if(X_selected)
  {
    UpdatedPointsX(X, Y, Speed, time);
  }
  else if(Y_selected)
  {
    UpdatedPointsY(X, Y, Speed, time);
  }
  else
  {
    document.getElementById("warning_checkbox").style.display = "block";
    UpdatedPoints(X, Y, Speed, time);
  }
}
