/*map() 함수 
 - 배열의 각 요소에 대해 주어진 함수를 호출한
   결과를 모아 새로운 배열을 반환하는 함수 */

const numbers = [1, 2, 3, 4];

//map(콜백함수) - 중괄호와 return 생략 가능
const newNumbers = numbers.map(x => x * 2)
console.log(newNumbers);

//객체 배열에서 특정 속성만 추출하기
const users = [
  { name: 'Jerry', age: 25 },
  { name: 'Linda', age: 30},
  { name: 'Tom', age: 35}
]

//이름을 저장하는 배열 생성
const names = users.map(user => user.name)
console.log(names); //[ 'Jerry', 'Linda', 'Tom' ]

//나이를 저장하는 배열 생성
const ages = users.map(user => user.age)
console.log(ages); //[ 25, 30, 35 ]

