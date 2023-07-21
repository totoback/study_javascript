let array = [149, 180, 192, 170];
let height = 166;

// console.log(array);

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > height) {
//     console.log(array[i]);
//   }
// }

//내가 푼 문제
function solution(array, height) {
  // 2가지 인자를 받는데 array로 배열을 받고, height도 받음
  const answer = [];
  // height보다 큰 배열 넘버를 추가하기 위한 빈 배열
  for (let i = 0; i < array.length; i++) {
    // for문으로 배열의 각 요소에 접근
    if (array[i] > height) {
      // 배열보다 height가 크다면 
      answer.push(i);
      // answer에 해당 숫자 추가한다
    }
  }
  return answer.length
  //그리고 길이를 리턴함
}

//정답 1위 코드
//filter을 쓰면 되는거 였음
function solution(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}
solution([149, 180, 192, 170], 167);


