//ARRAY METHODS
//1) converting array to string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
fruits.pop();               // Removes the last element ("Mango") from fruits
console.log(fruits);
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
console.log(fruits);

fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"
console.log(fruits);

delete fruits[0];           // Changes the first element in fruits to undefined
console.log(fruits);

//STRING METHODS
//searchin()
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos)
//slice()
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res)
//substring()
var tes = str.substring(7, 13);
console.log(tes)

//replacing string content
var str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "my_web");
console.log(n)