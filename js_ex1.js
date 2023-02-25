//#함수 선언과 호출
//함수 정의
const output = function () {
  console.log("함수를 실행했어요");
};
//함수 실행
// output();

// #onclick 이벤트 추가
// html 버튼에 onclick추가

// console.log(document)
// const arr = [1, 2, 3]
// console.log('arr === [1, 2, 3]', arr === [1, 2, 3]);

const messageContainer = document.querySelector("#d-day-message");
messageContainer.textContent = "D-Day를 입력해주세요.";
const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate; 
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}` //가독성 더 좋게
  return dateFormat;
  // console.log(inputYear, inputMonth, inputDate);
};

const counterMaker = function (){
  const tartgetDateInput = dateFormMaker();
  const nowDate = new Date(); //날짜데이터를 가져오는 new Date
  const tartgetDate = new Date(tartgetDateInput).setHours(0,0,0,0);
  const remaining = (tartgetDate - nowDate) / 1000;

  if(remaining <= 0){
    console.log("타이머가 종료되었습니다.");
  }else if(isNaN(remaining)){
    console.log("유효한 시간대가 아닙니다.");
  }

  const remainingDate = Math.floor(remaining / 3600 / 24 ); //날짜 / 소수점 이하의 수를 내림
  const remainingHours = Math.floor(remaining / 3600) % 24; //시간 
  const remainingMin = Math.floor(remaining / 60) %  60; //분
  const remainingSec = Math.floor(remaining) % 60; //초
  console.log(remainingDate, remainingHours, remainingMin, remainingSec);
}

