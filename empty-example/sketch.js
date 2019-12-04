function setup() {
  // put setup code here
}
// HELLO,ELLIPSE
function draw() {
  //唯の円
  ellipse(50,50,80,80); //円：左から50px,上から50px,半径80px
  point(50,60); //左から50px,上から60px

  fill(128);//グレースケールの整数値
  strokeWeight(1); //線の太さ1px
  ellipse(40,50,60,60);
  rect(50,50,40,20);//四角形:左から50px,上から50px,横幅40px,縦幅20px
}

// Setup,Draw,Preload
// function draw(){
//   console.log(frameCount);
// }
// frameRate(30);//描画速度を毎秒３０枚
// function setup(){//setup関数内にあるコマンドは開始時の一回のみ実行
//   frameRate(30);
// }
// function preload(){//preload関数はデータのロードを指示
//   img = loadImage("data/pic.jpg");
// }

// ディスプレイ領域とレンダラー
// createCanvas(640,480);//ディスプレイ領域
// createCanvas(640,480,P2D);//標準のレンダラー
// createCanvas(640,480,WEBGL);//WebGL（３Dグラフィック表示）を使う

// 座標変換
// translate(40,20);
// rotate(0.5);
// scale(1.5);