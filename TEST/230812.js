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
// solution("205");

const res = require("express/lib/response");

// 다른 사람 풀이
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  let answer = [...rsp].map((item) => arr[item]).join("");
  console.log(answer)
  return answer;
}
solution("205");

//**암호 해독 */
// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
// 암호화된 문자열 cipher를 주고받습니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

//내가푼문제
function solution(cipher, code) {
  var answer = cipher;
  const result = [];
  for (let i = 0; i < answer.length; i++) {
    // 현재 인덱스(i)는 0부터 시작하므로 실제 위치는 (i + 1)
    if((i+1) % code === 0){
      // 4나눠서 0나오는 배수인지 확인
      // 그러므로 (i + 1)이 code의 배수인 경우 해당 문자 선택
      result.push(answer[i])
    }
  }
  console.log(result.join(""));
  return result.join("");
}

//다른사람이푼문제
function solution(cipher, code){
  let answer = '';
  for(let i = code -1; i<cipher.length; i += code){
    answer += cipher[i]
  }
  console.log(answer)
  return answer;
}
solution("dfjardstddetckdaccccdegk", 4);//"attack"
