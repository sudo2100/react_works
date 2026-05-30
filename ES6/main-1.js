
//basicModule 가져오기
// let square = require("./lib/basicModule.js")
let { square, add } = require("./lib/basicModule.js") 

//함수 호출
console.log(square(3)); //9
console.log(add(7, 8)); //15

