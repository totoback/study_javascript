//**특정 문자 제거하기 */
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
// my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// function solution(my_string, letter) {
//   const answer = my_string.split(letter).join("");
//   console.log(answer);
//   return answer;
// }
// solution("BCBdbe", "B");

//**자리수 더하기 */
// function solution(n) {
//   const answer = n + "";
//   const result = answer.split('').reduce((acc, curr) => acc + Number(curr), 0);
//   console.log(result);
//   return result;
// }
function solution(n) {
  const nums = n
    .toString()
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  console.log(nums);
}

solution(1234);
