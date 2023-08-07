//**짝수와 홀수 개수 */
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// function solution(num_list) {
//     var answer = [0,0];
//     console.log(num_list)
//     for(let i = 0; i<num_list.length; i++){
//       if(num_list[i] %  2  === 0){
//         console.log(num_list[i])
//         answer[0]++
//       }else if(num_list[i] %  2 ===1){
//         console.log(num_list[i])
//         answer[1]++
//       }
//     }
//     console.log(answer)
//     return answer;

// }
// solution([1, 2, 3, 4, 5]);

//**아메리카노 */

// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다.
// 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는
// 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(money) {
  const answer =[0,0]
  const moneyResult = money/5500;
  answer[0] = parseInt(moneyResult)
  answer[1] = money%5500
  console.log(answer)
  return answer;
}
solution(43010)