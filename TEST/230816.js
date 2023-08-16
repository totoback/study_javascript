//**개미군단 */
// 개미 군단이 사냥을 나가려고 합니다.
// 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다.
// 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다.
//  예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만,
//  장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다.
//  사냥감의 체력 hp가 매개변수로 주어질 때,
//  사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
// function solution(hp) {
//   var totalAnts = 0;

//   //필요한 장군개미의 수 계산
//   totalAnts += Math.floor(hp/5)
//   hp = hp % 5

//   //필요한 병정개미의 수 계산
//   totalAnts += Math.floor(hp/3);
//   hp = hp % 3

//   //필요한 일개미의 수 계산
//   totalAnts += hp;

//   console.log(totalAnts)
//   return totalAnts;
// }

// 다른사람 풀이
// function solution(hp) {
//   const 장군개미 = Math.floor(hp / 5);
//   console.log(장군개미);
//   const 병정개미 = Math.floor((hp - 장군개미 * 5) / 3);
//   console.log(병정개미);
//   const 일개미 = hp - (장군개미 * 5 + 병정개미 * 3);
//   console.log(일개미);
//   return 장군개미 + 병정개미 + 일개미;
// }
// solution(23);

//대문자와 소문자
// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  return my_string.split('').map(char => {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}
console.log(solution("cccCCCC"))
solution("cccCCC");
