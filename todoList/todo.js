





const saveBtn = document.querySelector(".main-btn")
const inputEl = document.querySelector(".todo-input input")
const ulEl = document.querySelector(".todo-contents")
const liEl = document.createElement("li")
const spanEl = document.createElement("span")

function todoList(){
  //텍스트 입력창 띄우기
  if(inputEl.value === ""){
    inputEl.setAttribute("placeholder","텍스트를 입력해주세요.")
    return;
  }
  // 입력값 받기
  const inputText = inputEl.value; //입력 값
  liEl.innerText = inputText;
  console.log(inputText)
  
  ulEl.append(liEl)
  inputEl.value = "";
}

saveBtn.addEventListener("click",todoList);

