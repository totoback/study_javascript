// 두 배열이 얼마나 유사한지 확인해보려고 합니다.
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
// const arrays = ['choi','ji','young']

// const result = arrays.filter(array => array.length > 3); //글자길이가 3개이상인 요소 출력
// console.log(result) //choi,young

//배열의 유사도
// for문으로 풀어보기
function solution(s1, s2) {
  var answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        answer++
      }
    }
  }
  return answer;
}

