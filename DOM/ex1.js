// Exerice 1 DOM
var x = document.getElementsByTagName("div");
for (var i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "yellow";
} 

var switchColor = function(){
document.getElementById("div1").style.backgroundColor="blue";
document.getElementById("div2").style.backgroundColor="red";
document.getElementById("div3").style.backgroundColor="green";
};

document.getElementById("btn").onclick= switchColor;
