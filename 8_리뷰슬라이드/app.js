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

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// 현재 보여지고 있는 리뷰의 인덱스를 저장, 초기값 0
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  console.log(item)
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  //변수의 값을 1 증가시킵니다
  if (currentItem > reviews.length - 1) {
    //만약 currentItem 값이 reviews 배열의 길이에서 1을 뺀 값보다 크다면 (즉, 마지막 리뷰를 표시하고 있는 경우) 실행
    currentItem = 0;
    //값을 0으로 재할당하여 첫 번째 리뷰를 표시하도록 설정합니다. 이는 마지막 리뷰를 표시한 후에는 첫 번째 리뷰로 다시 돌아가기 위한 조치
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  // 변수의 값을 1 감소시킵니다. 이는 이전 리뷰를 표시하기 위해 현재 인덱스를 이전 인덱스로 업데이트하는 것을 의미
  if (currentItem < 0) {
    //0보다 작다면 (즉, 첫 번째 리뷰를 표시하고 있는 경우) 실행
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
