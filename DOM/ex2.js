//Exercise - 2 - 4 DOM
/*
function clickHandler(){
    var div1 = document.getElementById("div1").id;
    document.getElementById("div1").innerText = "Hi from" + div1;
    
    var div2 = document.getElementById("div2").id;
    document.getElementById("div2").innerText = "Hi from" + div2;
}
*/

function clickHandler(event){
    var x = event.target;
    console.log("id from this is: " +this.id + x.id);
    document.getElementById("p1").innerText = "id: "+this.id+" " +x.id ;
    
    
    
}
document.getElementById("outer").onclick = clickHandler;
//document.getElementById("btn").onclick = clickHandler;

//4a

//4b
function makeRow(data){
    return "<li>"+data+"</li>"
}
var names = [];
function addToList(){
   var name =  document.getElementById("input").value;   
   names.push(name);
   var nameString = names.map(makeRow).join("");
   
   document.getElementById("list").innerHTML = nameString;
}

function removeFirst(){
    names.shift();
    var nameString = names.map(makeRow).join("");
    document.getElementById("list").innerHTML = nameString;
}

function removeLast(){
    names.pop();
    var nameString = names.map(makeRow).join("");
    document.getElementById("list").innerHTML = nameString;

}
document.getElementById("removeLast").onclick = removeLast;
document.getElementById("removeFirst").onclick = removeFirst;
document.getElementById("inputBTN").onclick = addToList;
