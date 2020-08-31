//右クリック禁止
document.oncontextmenu = function () {return false;}
document.getElementsByTagName('html')[0].oncontextmenu = function () {return false;}
document.body.oncontextmenu = function () {return false;}
setInterval(function(){
  document.oncontextmenu = function () {return false;}
}, 100);
