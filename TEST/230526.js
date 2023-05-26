// 배열 최대값 구하기(1)

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  // 오름차순 정렬
  return numbers[numbers.length - 1] * numbers[numbers.length - 2];
  //가장큰 두 수 찾기 -> 곱 리턴
}
