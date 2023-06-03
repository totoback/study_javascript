const inputEl = document.querySelector(".input");
const btn = document.querySelector(".main-btn");
const ulEl = document.querySelector(".todo-contents");

function todoList() {
  //빈 텍스트 예외 처리
  if (inputEl.value === "") {
    inputEl.setAttribute("placeholder", "내용을 입력해주세요");
  }

  const liEl = document.createElement("li");
  const spanEl = document.createElement("span");
  const checkbox = document.createElement("input");
  const deleteBtn = document.createElement("button");

  checkbox.setAttribute("type", "checkbox");
  spanEl.textContent = inputEl.value;
  deleteBtn.textContent = "삭제";

  deleteBtn.addEventListener("click", function (e) {
    if (checkbox.checked === true) {
      e.target.parentNode.remove()
      //deleteBtn의 부모요소를 삭제해라
    }
  });

  ulEl.appendChild(liEl); //ul 안에 li 추가
  liEl.append(checkbox);
  liEl.append(spanEl);
  liEl.append(deleteBtn);
  inputEl.value = "";
}

btn.addEventListener("click", todoList);
