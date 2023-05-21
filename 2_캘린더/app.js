const inputDate = document.querySelector("#date");
const contentData = document.querySelector("#content");
const btn = document.querySelector("button");

let targetEl;

function calendarTask(e) {
  if (e.target.tagName === "P") {
    targetEl = e.target.parentNode;
    inputDate.value = `오늘은 ${e.target.textContent}일`;
  }
}

btn.addEventListener("click", function (e) {
  // 예외 처리
  if (inputDate.value === "" && contentData.value === "") {
    alert("날짜와 내용을 입력해주세요.");
    return;
  } else if (inputDate.value === "") {
    alert("날짜를 선택해주세요");
    return;
  } else if (contentData.value === "") {
    alert("내용을 입력해주세요.");
    return;
  }
  const addDiv = document.createElement("div");
  addDiv.textContent = contentData.value;
  
  targetEl.append(addDiv);
  inputDate.value = "";
  contentData.value = "";
});

addEventListener("click", calendarTask);
