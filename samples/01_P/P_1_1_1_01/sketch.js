// P_1_1_1_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * draw the color spectrum by moving the mouse
 *
 * MOUSE
 * position x/y        : resolution
 *
 * KEYS
 * s                   : save png
 */
'use strict';

var stepX;
var stepY;

function setup() {
  createCanvas(800, 400);//ディスプレイ領域のサイズ設定(width,height)
  noStroke();
  colorMode(HSB, width, height, 100);//色相と彩度を800と400に
}

function draw() {
  stepX = mouseX + 2;//stepXにマウスのX座標＋２を代入。＋２することで値が小さすぎて表示に時間がかかることを防ぐ
  stepY = mouseY + 2;

  for (var gridY = 0; gridY < height; gridY += stepY) {//gridYの初期値０、gridYがheight未満なら、gridYにstepYの値を足す
    for (var gridX = 0; gridX < width; gridX += stepX) {//gridXの初期値０、gridYがwidth未満なら、gridXにstepXの値を足す
      fill(gridX, height - gridY, 100);//fill(value,start,end)、(height-gridY)の値から100までをgridXの値にする？
      rect(gridX, gridY, stepX, stepY);//rect(x四角形の左上のx座標,y四角形の左上のy座標,w四角形の幅,h四角形の高さ)、rect()は四角形を作成するメソッド
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
