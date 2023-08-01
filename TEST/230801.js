function solution(numbers, num1, num2) {
  var answer = numbers.slice(num1,num2+1)
  console.log(answer)
  return answer;
}
solution([1, 2, 3, 4, 5],	1,	3)