'use strict';

var FONT = '16px PT-Mono';
var FONT_COLOR = '#000';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_TEXT = 20;
var COLUMN_WIDTH = 40;
var MAX_COLUMN_HEIGHT = 150;
var COLUMN_GAP = 50;
var firstCoordGistogramm = CLOUD_Y + GAP_TEXT * 4;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

var renderText = function (ctx, x, y, color, text) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var renderGisto = function (ctx, index, name, time, maxtime) {
  var randomNumber = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
  ctx.fillStyle = name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(243, ' + randomNumber + '%, 38%)';
  var currentColumnHeight = Math.round(time * MAX_COLUMN_HEIGHT / maxtime);
  ctx.fillRect(CLOUD_X + GAP_TEXT + COLUMN_GAP * index, firstCoordGistogramm + GAP + MAX_COLUMN_HEIGHT - currentColumnHeight, COLUMN_WIDTH, currentColumnHeight);
  return currentColumnHeight;
};

var findMaxElement = function (array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

window.renderStatistics = function (ctx, players, times) {
  ctx.font = FONT;
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.5)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, CLOUD_X + GAP_TEXT, CLOUD_Y + GAP_TEXT + GAP_TEXT, FONT_COLOR, 'Ура вы победили!');
  renderText(ctx, CLOUD_X + GAP_TEXT, CLOUD_Y + GAP_TEXT + GAP_TEXT + GAP_TEXT, FONT_COLOR, 'Список результатов:');

  for (var i = 0; i < players.length; i++) {
    renderText(ctx, CLOUD_X + GAP_TEXT + COLUMN_GAP * i, firstCoordGistogramm + MAX_COLUMN_HEIGHT + GAP_TEXT + GAP, FONT_COLOR, players[i]);
    var currentColumnHeight = renderGisto(ctx, i, players[i], times[i], findMaxElement(times));
    renderText(ctx, CLOUD_X + GAP_TEXT + COLUMN_GAP * i, firstCoordGistogramm + (MAX_COLUMN_HEIGHT - currentColumnHeight), FONT_COLOR, Math.round(times[i]));
  }

};
