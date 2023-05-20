const saveBtn = document.querySelector(".main-btn");
const inputEl = document.querySelector(".todo-input input");
const ulEl = document.querySelector(".todo-contents");

function todoList() {
  const liEl = document.createElement("li");
  const liText = document.createElement("span");
  const inputCheck = document.createElement("input");
  const deleteBtn = document.createElement("button");

  //텍스트 입력창 띄우기
  if (inputEl.value === "") {
    inputEl.setAttribute("placeholder", "텍스트를 입력해주세요.");
    return;
  }
  // 입력값 받기
  liText.textContent = inputEl.value;
  inputCheck.setAttribute("type", "checkbox");
  deleteBtn.innerText = "삭제";

  //삭제 버튼 구현
  deleteBtn.addEventListener("click", function (e) {
    if(inputCheck.checked === true){
      e.target.parentNode.remove();
    }
  });

  ulEl.appendChild(liEl); //ul 안에 li 추가
  liEl.append(inputCheck); //li 안에 체크박스 추가
  liEl.append(liText); // li안에 span추가
  liEl.append(deleteBtn); // li안에 삭제버튼 추가
  inputEl.value = "";
}

saveBtn.addEventListener("click", todoList);
