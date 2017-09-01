var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var price = document.getElementById("input").value;

var filteredCar = cars.filter(function(c){
    return c.price < 5000;
})

function makeCarList(c){
    var list = [];
    list.push(c.id, c.year, c.make, c.model, c.price);
    return list;

}

var carList = cars.map(function (c) {
    var list = [];
    list.push(c.id, c.year, c.make, c.model, c.price);
    return list;

})


function printFilter(listOfCars) {
    var array = [];
    for (var i = 0; i < listOfCars.length - 1; i++) {
        array.push("<tr>");
        for (var j = 0; j < listOfCars[i].length; j++) {
            array.push("<td>" + listOfCars[i][j] + "</td>");
        }
        array.push("</tr>");
    }
    return array;
}


function print() {
    var array = [];
    for (var i = 0; i < carList.length - 1; i++) {
        array.push("<tr>");
        for (var j = 0; j < carList[i].length; j++) {
            array.push("<td>" + carList[i][j] + "</td>");
        }
        array.push("</tr>");
    }
    return array.join("\n");
}



document.getElementById("table").innerHTML = print();

console.log(print());




