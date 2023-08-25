//**인덱스바꾸기 */
// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
function solution(my_string, num1, num2) {
  const arr = [...my_string];
  console.log(arr)
  const arr1  =  arr[num1]
  const arr2  =  arr[num2]
  console.log(arr1)
  console.log(arr2)

  //splice (시작,제거,추가)
  arr.splice(num1,1,arr2)
  arr.splice(num2,1,arr1)
  console.log(arr.join(""))
  return arr.join("")
}
// //다른사람풀이
// function solution(my_string, num1, num2) {
//   let arr = my_string.split("");
//   [arr[num1], arr[num2]] = [arr[num2], arr[num1]];//[ 'l', 'e' ]
//   return arr.join("");
// }
// solution("hello",1,2)

//**외계행성의나이 */
function solution(age) {
  let answer = "";
  const a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const num = age.toString()

  for(let i=0; i<num.length; i++){
    answer=answer+a[num[i]]
  }
  return answer;
}

//다른사람풀이
function solution(age) {
  const ageEl = age.toString().split("")
  return ageEl.map((item)=>{"abcdefghij"[item]}).join("")
}
// console.log(age.toString().split("").map((v) => "abcdefghij"[v]).join(""));
solution(23);
