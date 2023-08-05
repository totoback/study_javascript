function solution(n) {

  if(n % 7 === 0){
      return n/7 
      //7로 나눠 딱 떨어진다면 반환
  }else{
      return parseInt(n/7)+1
      //그게 아니라면 나머지값 버리고 +1 피자 한판 추카
  }

}