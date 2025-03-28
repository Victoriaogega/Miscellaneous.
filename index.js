var words = "The quick brown fox jumped over the lazy dog.";
var word1 = words.toLowerCase();
console.log(word1.split("the").length -1);
console.log(word1.length)
console.log(word1.split("the").length)

var sentence = "Hello world, welcome to the universe."
console.log(sentence.indexOf("welcome"))
console.log(sentence.charAt(2))
console.log(sentence.at(2))

let string= "A wonderful world";
 let newString = string.toLowerCase();
 let titleCase = newString.split(" ");
 titleCase.forEach((string2, index)=>{titleCase [index] = string2.charAt(0).toUpperCase() + string2.slice(1)
 })
 console.log(titleCase.join(" "))


 let x = "I love coding"
 let y = x.toLowerCase()
 let z = y.split(" ")
z.forEach((a,index)=>{
    z[index]=a.charAt(0).toUpperCase()+a.slice(1)})
console.log(z.join(" "))
