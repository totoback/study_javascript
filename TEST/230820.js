// **n의 배수 고르기
// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때,
// numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n, numlist) {
  return console.log(numlist.filter((item) => item % n === 0))
}
solution(5,[1, 9, 3, 10, 13, 5])

//**중복된 문자 제거 */
// 문자열 my_string이 매개변수로 주어집니다.
// my_string에서 중복된 문자를 제거하고 하나의 문자만
// 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
// function solution(my_string) {
//   return [...new Set(my_string)].join("");
// }
// solution("people")

let joung = [...new Set([1,2,3,3])].join("")
console.log(joung)