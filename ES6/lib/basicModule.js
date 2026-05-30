//CommonJS 모듈 방식
// 제곱수 계산 함수
let square = function(x){
  return x * x;
}

// 두 수의 합계 계산
let add = function(x, y){
  return x + y;
}

//내보내기
// module.exports = square;  //1개 내보내기
module.exports = { square, add };  //2개 내보내기