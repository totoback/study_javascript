
const inputBox = document.querySelector(".input")
const ulBox = document.querySelector(".todo-contents")

function addBtn(){
  if(inputBox === ""){
    inputBox.setAttribute = ("placeholder","내용을 입력해 주세요.")
  }
  const liBox = document.createElement("li")
  const checkbox = document.createElement("input")
  const span = document.createElement("span")
  
  //체크 박스로 속성 변환
  checkbox.setAttribute("type","checkbox")

  //li 값
  span.textContent = inputBox.value;
  inputBox.value = "";
  
  //삭제버튼
  const delBtn = document.createElement("button")
  delBtn.textContent = "삭제"

  ulBox.appendChild(liBox)
  liBox.append(checkbox)
  liBox.append(span)
  liBox.append(delBtn)

  delBtn.addEventListener("click",function(e){
    if(checkbox.checked  === true){
      e.target.parentNode.remove();
    }
  })
  
}