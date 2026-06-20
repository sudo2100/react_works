
function displayA(){
  console.log('A');
}

function displayB(){
  // console.log('B');
  //2초후에 'B'를 출력
  setTimeout(() => {
    console.log('B');
  }, 2000);
}

function displayC(){
  console.log('C');
}

displayA();
displayB();
displayC();