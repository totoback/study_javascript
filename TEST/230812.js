//**가위바위보 */
// 가위는 2 바위는 0 보는 5로 표현합니다.
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를
// 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
function solution(rsp) {
  let answer = rsp;
  const result = [];
  for(let i = 0; i<answer.length; i++){
    if (answer[i].includes(2)) {
      result.push(0);
    } else if (answer[i].includes(0)) {
      result.push(5);
    } else if (answer[i].includes(5)) {
      result.push(2);
    }
  }
  return result.join("");
}

// 다른 사람 풀이
// function solution(rsp) {
//   let arr = {
//     2: 0,
//     0: 5,
//     5: 2,
//   };
//   let answer = [...rsp].map((item) => arr[item]).join("");
//   console.log(answer)
//   return answer;
// }
solution("205");
