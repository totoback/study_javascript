//**삼각형의 완성조건(1) */
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
//제한사항
// sides의 원소는 자연수입니다.
// sides의 길이는 3입니다.
// 1 ≤ sides의 원소 ≤ 1,000

function solution(sides) {
  var answer = sides;
  answer.sort((a, b) => a - b); //오름차순 가장작은수가 맨앞
  if (answer[0] + answer[1] > answer[2]) {
    return 1;
  } else {
    return 2;
  }
}
solution([10, 6, 3]);

//**순서쌍의 개수 */
// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  // 정답 배열 생성
  const result = []
  // 1부터 n까지 반복하며 모든 약수를 정답 배열에 입력
  for(let i = 1 ; i <= n ; i ++) {
      if(n%i === 0) result.push(i)
  }
  // 모든 약수의 수는 순서쌍의 수와 같음
  return result.length
}