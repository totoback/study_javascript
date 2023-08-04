function solution(array) {
  // 오름차순으로 정렬
  array.sort((a,b)=>a-b);
  console.log(array)
  // 중앙값 계산
  var result = Math.floor(array.length / 2);
  console.log(result)
  return array[result];
} 
solution([1, 2, 7, 10, 11])