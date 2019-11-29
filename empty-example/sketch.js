function setup() {
  // put setup code here
}

function draw() {

  //唯の円
  // ellipse(50,50,80,80); //円：左から50px,上から50px,半径80px
  // point(50,60); //左から50px,上から60px


  fill(128);//グレースケールの整数値
  strokeWeight(1); //線の太さ1px
  ellipse(40,50,60,60);
  rect(50,50,40,20);//四角形:左から50px,上から50px,横幅40px,縦幅20px
}

function draw(){
  console.log(frameCount);
}

frameRate(30);