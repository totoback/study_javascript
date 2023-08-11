//**숨어있는 숫자의 덧셈(1) */
//문자열 my_string이 매개변수로 주어집니다.
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  const answer = my_string.split("");
  let result = 0;
  // console.log(answer)
  for (let i = 0; i < answer.length; i++) {
    if (Number(answer[i])) {
      console.log(answer[i]);
      result = result + Number(answer[i]);
    }
  }
  return result;
}
solution("aAb1B2cC34oOp");

//**피자 나눠먹기3 */
// 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다.
// 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때,
// n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
function solution(slice, n) {
  return Math.ceil(n / slice);
}
solution(7, 10);

//옷가게 할인받기
function solution(price) {
  if (price >= 500000) {
    return Math.floor(price * 0.8); //20%할인
  } else if (price >= 300000) {
    return Math.floor(price * 0.9); //10%할인
  } else if (price >= 100000) {
    return Math.floor(price * 0.95); //5%할인
  } else return price;
}
