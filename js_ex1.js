//#함수 선언과 호출
//함수 정의

const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");

container.style.display= "none"; //css
messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</hr>";
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
    //만약 remaining이 0이라면, 타이머가 종료되었습니다. 출력
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    messageContainer.style.display = 'flex';
    return;
  }else if(isNaN(remaining)){
    //만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    container.style.display = 'nonr';
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = 'flex';
    return;
  }
  remaining.innerText = "";

  //오브젝트(객체)
  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin : Math.floor(remaining / 60) %  60, //분
    remainingSec : Math.floor(remaining) % 60, //초
  }

  const documentArr = ['days','hours','min','sec'];
  const timeKeys = Object.keys(remainingObj);

  //for of는 배열에 많이 사용
  for (let tag of documentArr){
    document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
    i++;
  }

  // for in 은 객체에 많이 사용
  // let i = 0;
  // for(let key in documentObj){
  //   documentObj[key].textContent = remainingObj[timeKeys[i]];
  //   i++;
  // }

  // const documentObj = {
  //   days : document.querySelector("#days"),
  //   hours : document.querySelector("#hours"),
  //   min : document.querySelector("#min"),
  //   sec : document.querySelector("#sec"),
  // };
  // const docKeys = Object.keys(documentObj);

  // for(let i = 0; i < timeKeys.length; i=i+1){
  //   documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]]
  // }
  // const days =  document.querySelector("#days");
  // const hours = document.querySelector("#hours");
  // const min = document.querySelector("#min");
  // const sec = document.querySelector("#sec");

  // documentObj['days'].textContent = remainingObj['remainingDate'];
  // documentObj['hours'].textContent = remainingObj['remainingHours'];
  // documentObj['min'].textContent = remainingObj['remainingMin'];
  // documentObj['sec'].textContent = remainingObj['remainingSec'];
};

const starter = function() {
  container.style.display = 'flex';
  messageContainer.style.display = 'none';
  for(let i = 0; i < 100; i++){
    setTimeout(() => {
      counterMaker();
    }, 1000 * i);
  }
};

