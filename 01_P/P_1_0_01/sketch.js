// P_1_0_01
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
 * changing colors and size by moving the mouse
 *
 * MOUSE
 * position x          : size
 * position y          : color
 *
 * KEYS
 * s                   : save png
 */
'use strict';

function setup() {
  createCanvas(720, 720);
  // noCursor();//カーソル非表示

  colorMode(HSB, 360, 0, 0);//(カラーモデル,色相0~360,彩度0~100,明度0~100)
  rectMode(CENTER);//カラーエリアをセンターに持ってくる
  noStroke();//カラーエリアの境界線をなくす
}

function draw() {
  background(mouseY / 2, 100, 100);//マウスのY座標を2でわって色相環情の0~360の間の値で指定

  fill(360 - mouseY / 2, 100, 100);//360-マウスのY座標を２で割った値＝バックグラウンドカラーの反対の色相環
  rect(360, 360, mouseX + 1, mouseX + 1);//カラーサイズのエリアがマウスのX座標位置に応じて1~720pxに変化
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');//sまたはSが押されると画像保存
}
