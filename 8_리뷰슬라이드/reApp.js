const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const rendomBtn = document.querySelector(".random-btn");

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(reviews);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

prevBtn.addEventListener("click", function () {
  currentItem--;
  // 변수의 값을 1 감소시킨다.
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
    //currentItem이 0보다 작을때 이전 페이지를 위해 배열의 길이를 -1
  }
  showPerson(currentItem);
});

nextBtn.addEventListener("click", function () {
  currentItem++;
  // 변수의 값을 1 증가시킨다.
  if (currentItem > reviews.length - 1) {
    //currentItem 값이 리뷰 배열의 길이를 초과하는지 확인합니다. 만약 초과한다면, 이는 마지막 리뷰를 넘어섰다는 의미
    currentItem = 0;
  }
  showPerson(currentItem);
});

rendomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  //Math.random() 함수는 0 이상 1 미만의 난수를 반환
  //Math.floor() 함수를 사용하여 소수점을 버리고 난수를 정수로 변환
  //Math.random() * reviews.length 식은 리뷰 배열의 길이를 곱한 후, 소수점을 버리기 때문에 0 이상 리뷰 배열 길이 미만의 정수값 가능
  // console.log(currentItem)
  showPerson(currentItem);
});
