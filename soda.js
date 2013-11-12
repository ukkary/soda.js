//****** init ******
var canvas = document.getElementById('pop-art');
var ctx = canvas.getContext('2d');
var i, j, counter, current;
var num = 25;

var flag    = Boolean;
var speed   = [];
var centerX = [];
var centerY = [];
var radius  = [];
var c       = [];
var color_r = [];
var color_g = [];
var color_b = [];
flag = [];

  for(i = 0; i < num; i++){
    flag[i] = false;
    speed[i] = 6 + Math.floor(Math.random() * 8);
    radius[i] = 10 + Math.floor(Math.random() * 45);
    centerY[i] = 1000;
    centerX[i] = 70 + Math.floor(Math.random() * 650);
    color_r[i]  = 100 + Math.floor(Math.random() * 140);
    color_g[i]  = 100 + Math.floor(Math.random() * 140);
    color_b[i]  = 100 + Math.floor(Math.random() * 140);
    c[i]        = "rgb(" + color_r[i] + "," + color_g[i] + "," + color_b[i] + ")";
  }

function init(){
  counter    = 0;
  current    = 0;
  ctx.width  = 800;
  ctx.height = 1000;
  flag[0] = true;
  flag_x = true;
  setInterval("main()", 30);
}

function main(){
  counter++;
  sub_init();
  calculateY();

    if(counter == 10){
      centerY[current + 1] = 1000;
      flag[current + 1] = true;
      current++;
      counter =0;
    }
  draw();
}

function calculateY(){
  for(i = 0; i < num; i++){
    centerY[i] = centerY[i] - speed[i];
  }
}

function sub_init(){
  for(i = 0; i < num; i++){
    if(centerY[i] < 0){
      centerY[i] = 1000;
      radius[i] = 10 + Math.floor(Math.random() * 45);
      centerX[i] = 70 + Math.floor(Math.random() * 650);
      color_r[i]  = 100 + Math.floor(Math.random() * 140);
      color_g[i]  = 100 + Math.floor(Math.random() * 140);
      color_b[i]  = 100 + Math.floor(Math.random() * 140);
      c[i]        = "rgb(" + color_r[i] + "," + color_g[i] + "," + color_b[i] + ")";
      flag[i] = false;
      if(current == num)
      {current = 0};
    }
  }
}


function draw(){
  ctx.globalCompositeOperation = "source-over";
  ctx.beginPath();
  ctx.clearRect(0, 0, ctx.width, ctx.height);

  for(i = 0; i < num; i++)
  {
    if(flag[i] == true){
      ctx.beginPath();
      ctx.arc(centerX[i], centerY[i], radius[i], 0, 2 * Math.PI, true);
      if(i % 3 == 0)
      {
        ctx.fillStyle = c[i];
        ctx.fill();
      }
      ctx.lineWidth = 3;
      ctx.strokeStyle = c[i];
      ctx.stroke();
      ctx.restore();
    }
  }
}