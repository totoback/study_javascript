const inputDate = document.querySelector("#date");
const contentData = document.querySelector("#content");
const btn = document.querySelector("button");
let targetEl;

function calendarTask(e) {
  console.log(e.target);

  if (e.target.tagName === "P") {
    targetEl = e.target.parentNode;
    inputDate.value = `오늘은 ${e.target.textContent}일`;
  }
  if (e.targettagNage === "TD") {
    targetEl = e.target;
  }

  btn.addEventListener("click", function (e) {
    //예외 처리
    if (inputDate.value == "" && contentData.value == "") {
      alert("날짜를와 내용을 입력해주세요");
    }
    targetEl = e.target;
    const createP = document.createElement("p");
    createP.textContent = inputDate.value;
  });
  targetEl.append(createP);
  contentData.value = "";
}

addEventListener("click", calendarTask);
