//**최댓값 만들기(2) */
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
//Math.max() 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환합니다
function solution(numbers) {
  numbers.sort((a,b)=>b-a);
  return Math.max(numbers[0] * numbers[1], numbers[numbers.length-1] * numbers[numbers.length-2]);
}
// solution([1, 2, -3, 4, -5])
//[ -5, -3, 1, 2, 4 ]


//** 문자열 정렬하기(1)*/
// 문자열 my_string이 매개변수로 주어질 때,
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
function solution(my_string) {
  var answer = my_string.replace(/[^0-9]/g,'');
  return [...answer].map(Number).sort((a,b)=>a-b)
}
solution("hi12392")