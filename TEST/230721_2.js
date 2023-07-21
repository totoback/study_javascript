
//내풀이
function solution(array, n) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      // 배열의 숫자와 n의 숫자가 같으면
      answer++;
      //한개씩 추가해라
    }
  }
  return answer;
}
solution([1, 1, 2, 3, 4, 5], 1);


//젤 많은 풀이
function solution(array, n) {
    return array.filter(v=>v===n).length;
}
