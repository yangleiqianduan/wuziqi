/**
 * Created by yanglei on 16/8/10.
 */

var chess = document.getElementById('chess');
var context = chess.getContext('2d');
//棋盘边距
var start = 15;
//行数
var line = 20;
//行间距
var width = 30;
//棋子半径
var r = 13;
//棋子半径
var nowColor = "white";
//棋盘棋子数组
var chessBoard = [];

window.onload = function() {
    initBack();
    chess.onclick = function(e) {
        var x = e.offsetX;
        var y = e.offsetY;
        var i = Math.floor(x / 30);
        var j = Math.floor(y / 30);
        if(!chessBoard[i][j]) {
            var thisColor = chessOne();
            oneStep(i, j, thisColor);
            chessBoard[i][j] = thisColor;
        }
    }
}
/**
 * 执行一步棋
 */
function oneStep(i, j, color) {
    context.beginPath();
    context.arc(start + i*width, start + j*width, r, 0, 2 * Math.PI);
    context.closePath();
    var gradient = context.createRadialGradient(start + i*width + 2, start + j*width - 2, r, start + i*width + 2, start + j*width - 2, 3);
    context.fillStyle = colorChess(gradient, color);
    context.fill();
}
/**
 * 初始化棋盘
 */
function initBack() {
    for(var i=0; i<line; i++) {
        chessBoard[i] = [];
        for(var j=0; j<line; j++) {
            chessBoard[i][j] = "";
        }
    }
    drawBack("#bfbfbf");
}
/**
 * 当前棋子颜色
 */
function chessOne() {
    if(nowColor == "white") {
        nowColor = "black";
    } else if(nowColor == "black") {
        nowColor = "white";
    }
    return nowColor;
}
/**
 * 绘制棋盘
 */
function drawBack(color) {
    for(var i=0; i<line; i++) {
        //竖
        context.moveTo(start + i*width, start);
        context.lineTo(start + i*width, start + (line-1)*width);
        context.stroke();
        //横
        context.moveTo(start, start + i*width);
        context.lineTo(start + (line-1)*width, start + i*width);
        context.stroke();
        context.strokeStyle = color;
    }
}
/**
 * 棋子颜色
 */
function colorChess(gradient, color) {
    if(color == "black") {
        gradient.addColorStop(0, "#0A0A0A");
        gradient.addColorStop(1, "#636766");
    } else if(color == "white") {
        gradient.addColorStop(0, "#D1D1D1");
        gradient.addColorStop(1, "#F9F9F9");
    }
    return gradient;
}


