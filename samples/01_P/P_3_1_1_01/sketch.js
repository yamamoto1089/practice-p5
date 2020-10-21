// P_3_1_1_01
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
 * typewriter. time reactive.
 *
 * MOUSE
 * position y           : adjust spacing (line height)
 *
 * KEYS
 * a-z                  : text input (keyboard)
 * backspace/delete     : delete last typed letter
 * ctrl                 : save png
 */
'use strict';

var textTyped = 'Type slow and fast!';
var fontSizes = [textTyped.length];
var minFontSize = 15;
var maxFontSize = 800;
var newFontSize = 0;

var pMillis = 0;
var maxTimeDelta = 5000.0;

var spacing = 2; // line height
var tracking = 0; // between letters
var font;

function setup() {
  createCanvas(800, 600);

  font = 'Arial';

  noCursor();
  noStroke();

  // init fontSizes
  for (var i = 0; i < textTyped.length; i++) {
    fontSizes[i] = minFontSize;
  }
}

function draw() {
  background(255);
  textAlign(LEFT);
  fill(0);

  spacing = map(mouseY, 0, height, 0, 120);
  translate(0, 200 + spacing);

  var x = 0;
  var y = 0;
  var fontSize = 20;

  for (var i = 0; i < textTyped.length; i++) {//textTypedには入力文字が代入される
    // get fontsize for the actual letter from the array
    fontSize = fontSizes[i];//fontSize配列のi番目の値が入る
    textFont(font, fontSize);
    var letter = textTyped.charAt(i);//textTypedのi番目の文字を取り出してletterに保存
    var letterWidth = textWidth(letter) + tracking;//textの文字幅をletterの値+trackingの値を加えてletterWidthに代入

    if (x + letterWidth > width) {//現在の位置と文字幅の合計がディスプレイを超えていたら改行(xを0,yに行間の値をたす)
      // start new line and add line height
      x = 0;
      y += spacing;
    }

    // draw letter
    text(letter, x, y);//text(文字,x位置,y位置)。文字をこの位置に置く
    // update x-coordinate for next letter
    x += letterWidth;
  }

  // blinking cursor after text
  var timeDelta = millis() - pMillis;//millis()はミリ秒単位の現在時間。
  newFontSize = map(timeDelta, 0, maxTimeDelta, minFontSize, maxFontSize);//map(value, start1, stop1, start2, stop2, [withinBounds])。再マッピング
  //map()補足
    // value 番号：変換される入力値
    // start1 番号：値の現在の範囲の下限
    // stop1 番号：値の現在の範囲の上限
    // start2 番号：値のターゲット範囲の下限
    // stop2 番号：値のターゲット範囲の上限
    // withinBounds ブール値：値を新しくマッピングされた範囲に制限する（オプション。無記載でも良い）
    //この場合timeDeltaの範囲を0~maxTimeDeltaからminFontSize~maxFontSizeに変換している
  newFontSize = min(newFontSize, maxFontSize);

  fill(200, 30, 40);
  if (int(frameCount / 10) % 2 == 0) fill(255);
  rect(x, y, newFontSize / 2, newFontSize / 20);//描画位置の矩形
}

function keyReleased() {
  // export png
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}

function keyTyped() {
  if (keyCode >= 32) {
    textTyped += key;
    fontSizes.push(newFontSize);
  } else if (keyCode == BACKSPACE || keyCode == DELETE) {
    if (textTyped.length > 0) {
      textTyped = textTyped.substring(0, max(0, textTyped.length - 1));
      fontSizes.pop();
    }
  }
  // reset timer
  pMillis = millis();//現在時刻をpMillisに保存
}
