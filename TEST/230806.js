//좌표 점 구하기
// x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
// x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
// x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
// x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
function solution(dot) {
  var answer = [...dot];
  console.log(answer.join())
  // console.log(answer[0])
  // console.log(answer[1])
  if (Math.sign(answer[0]) === 1 && Math.sign(answer[1]) === 1) {
    return 1
  } else if (Math.sign(answer[0]) === -1 && Math.sign(answer[1]) === 1) {
    return 2
  } else if (Math.sign(answer[0]) === -1 && Math.sign(answer[1]) === -1) {
    return 3
  } else if (Math.sign(answer[0]) === 1 && Math.sign(answer[1]) === -1) {
    return 4
  }
}
solution([4, -4]);


// 다른사람 풀이
function solution(dot) {
  var answer = 0;
  const x = dot[0];
  const y = dot[1];

  if (x > 0 && y > 0) answer = 1
  if (x < 0 && y > 0) answer = 2
  if (x < 0 && y < 0) answer = 3
  if (x > 0 && y < 0) answer = 4

  return answer;
}

//문자열 안에 문자열
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
function solution(str1, str2) {
  const result = str1.includes(str2)
  if(result){
    return 1
  }else{
    return 2
  }
}
solution("ab6CDE443fgh22iJKlmn1o","6CD")