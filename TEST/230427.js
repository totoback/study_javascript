//기본 틀
function solution(num1, num2) {
  const answer = "";
  return answer;
}

//@_사칙연산-두 수의 합
// @문제 설명
// 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
function solution(num1, num2) {
  const answer = num1 + num2;
  return answer;
}
//@_사칙연산-두 수의 차
// @문제 설명
// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요
function solution2(num1, num2) {
  const answer = num1 - num2;
  return answer;
}
//@_분수의 덧셈
//문제 설명
//첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1,두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution3(numer1, denom1, numer2, denom2) {
  // 분자
  let a = numer1 * denom2 + numer2 * denom1;
  // 분모
  let b = denom1 * denom2;
  // 최소 공배수
  let maximum = 1;
  // 약분
  for (let i = 1; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      maximum = i;
    }
  }
  return [a / maximum, b / maximum];
}
//@_몫 구하기
//정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
  const answer = Math.floor(num1 / num2);
  return answer;
}
//@_두 수의 나눗셈
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
function soltuion(num1, num2) {
  const answer = (num1 / num2) * 1000;
  return Math.floor(answer);
}
//@_숫자 비교하기
//정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
function solution4(num1, num2) {
  let answer = "";
  if (num1 === num2) {
    answer = 1;
  } else {
    answer = -1;
  }
  return answer
}
//@_중앙값구하기
//중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
function solution() {
  const answer = "";
  return answer;
}