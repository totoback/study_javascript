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
const arr = [1, 2, 3]
console.log('arr === [1, 2, 3]', arr === [1, 2, 3]);
const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate; 
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}` //가독성 더 좋게
  return dateFormat;
  //console.log(inputYear, inputMonth, inputDate);
};

const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date(); //현재 시간
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); //지금 날짜
  const remaining = (targetDate - nowDate) / 1000;

  const remainingDAte = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600)% 24;
  const remainingMin = Math.floor (remaining / 60)% 60;
  const remainingSec = Math.floor (remaining) % 60;

  console.log(remainingDAte, remainingHours, remainingMin, remainingSec);
};
