//**세균 증식 */
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
// 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
// function solution(n, t) {
//   for (let i = 0; i < t; i++) {
//     n = n * 2
//     console.log(n = n * 2)
//   }
//   console.log(n)
//   return n;
// }

function solution(n, t) {
  const result = n * Math.pow(2, t);
  // Math.pow(2, 3); // 2의 3제곱, 결과는 8
  // Math.pow(3, 2); // 3의 2제곱, 결과는 9
  // Math.pow(10, 0); // 10의 0제곱, 결과는 1
  // console.log(result);
  return result;
}
solution(7, 15);


//**제곱수 판별하기 */
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다.
// 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
function solutionA(n) {
  // 제곱근을 구한다.
  let sqrtValue = Math.sqrt(n);
  //Math.sqrt(값) 제곱근 구하는 메서드

  // 제곱근이 정수인지 판별
  if (Number.isInteger(sqrtValue)) {
    //Number.isInteger(값)의 정수인지 소숫점인지 찾는 메서드
      return 1;  // 제곱수라면
  } else {
      return 2;  // 제곱수가 아니라면
  }
}
solutionA(144)

// 다른사람 풀이
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
