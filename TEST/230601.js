
function solution(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  //acc : 누산값
  //curr : 해당 요소 값
  //0 : 초기값 (선택하는건 내맘)
  const average = sum / numbers.length;
  //누적값 더해줬으니 배열의 인덱스로 나눠주자 
  return average;
  //평균값 반환~
}