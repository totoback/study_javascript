//**가장 큰 수 찾기 */
// 정수 배열 array가 매개변수로 주어질 때,
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(array) {
  const num = Math.max(...array) //가장큰수
  return [num, array.indexOf(num)] //num의 인덱스
}
// solution([1, 8, 3])


//**숫자 찾기 */
// 정수 num과 k가 매개변수로 주어질 때,
// num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를
// return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
function solution(num, k) {
  var answer = num.toString().split("").map(Number);

  if(answer.includes(k)){
    return answer.indexOf(k)+1
  }else{
    return  -1;
  }
}

solution(29183,1);

