/*********  *********/

/********* Toggle show class to open sidebar *********/
const toggleIcon = document.querySelector(".toggle-icon");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const sidebar = document.querySelector(".sidebar");

toggleIcon.addEventListener("click", () => {
 sidebarOverlay.classList.toggle("show");
 sidebar.classList.toggle("show");
});

/********* Testemonials Section Slider *********/
const testemonials = [
 ...document.querySelector(".testemoinals-items").children,
];
const testemonialItem = document.querySelector(".testemonial-item");
const testemonialsTotal = testemonials.length;
const testemonialsNextBtn = document.querySelector(".right-btn");
const testemonialsPrevBtn = document.querySelector(".left-btn");
let index = 0;

testemonialsNextBtn.addEventListener("click", () => {
 nextOrPrev("next");
});

testemonialsPrevBtn.addEventListener("click", () => {
 nextOrPrev("prev");
});

function nextOrPrev(direction) {
 if (direction == "next") {
  if (index < testemonialsTotal - 1) {
   index++;

   if (index == testemonialsTotal - 1) {
    testemonialsNextBtn.classList.remove("active-btn");
    testemonialsNextBtn.disabled = true;
   }
  }

  testemonialsPrevBtn.classList.add("active-btn");
  testemonialsPrevBtn.disabled = false;
 } else {
  testemonialsNextBtn.classList.add("active-btn");
  testemonialsNextBtn.disabled = false;
  if (index != 0) {
   index--;
   if (index == 0) {
    testemonialsPrevBtn.classList.remove("active-btn");
    testemonialsPrevBtn.disabled = true;
   }
  }
 }
 testemonials.forEach((item) => {
  item.classList.remove("active");
 });
 testemonials[index].classList.add("active");
}

/********* How it looks Section Carousel *********/

const swiper = new Swiper(".swiper-container", {
 slidesPerView: 5,
 spaceBetween: 0,
 centeredSlides: true,
 //  grabCursor: true,
 loop: true,
 autoplay: {
  delay: 3000,
  disableOnInteraction: false,
 },
 breakpoints: {
  300: {
   slidesPerView: 2,
  },
  600: {
   slidesPerView: 3,
  },
  900: {
   slidesPerView: 5,
  },
 },
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
});

/********* FAQ Section Accordion *********/
const questions = document.querySelectorAll(".question");
const allAnswerWrappers = document.querySelectorAll(".answer-wrapper");
const allQuestionsText = document.querySelectorAll(".question-text");
const allQuestionsIcons = document.querySelectorAll(".question .icon");

questions.forEach((question) => {
 question.addEventListener("click", (e) => {
  const answerWrapper = question.nextElementSibling;
  let answerWrapperHeight = answerWrapper.getBoundingClientRect().height;
  const answer = question.nextElementSibling.firstElementChild;
  const answerHeight = answer.getBoundingClientRect().height;
  const questionText = question.firstElementChild;
  const questionIcon = question.querySelector(".icon");

  allAnswerWrappers.forEach((singleWrapper) => {
   singleWrapper.style.height = "0px";
  });

  allQuestionsText.forEach((questionText) => {
   questionText.classList.remove("active");
  });

  allQuestionsIcons.forEach((icon) => {
   icon.classList.remove("active");
  });

  if (answerWrapperHeight === 0) {
   answerWrapper.style.height = `${answerHeight}px`;
   questionText.classList.add("active");
   questionIcon.classList.add("active");
  } else {
   answerWrapper.style.height = "0px";
   questionText.classList.remove("active");
   questionIcon.classList.remove("active");
  }
 });
});

/********* View Posts Toggle *********/
const viewAllPosts = () => {
 const allPosts = [
  {
   date: "Dec 16,2022",
   author: "admin",
   postTile:
    "Physics took past experiments on evaluate now, sort hand, attained",
   postBody:
    "Out perceive have tone a on a quitting their spineless, focus leave stupid. Skyline cache effectiveness country, maintain around presence right, a is themselves",
  },
  {
   date: "Dec 15,2022",
   author: "admin",
   postTile: "Week right, would and the abandon definitely responded for line",
   postBody:
    "Size first kind language way statement ideas are the of the halfdozen totally on but in the overhauls the a could didn't it those he have small the frame. That evils been is have pass",
  },
  {
   date: "Dec 14,2022",
   author: "admin",
   postTile:
    "Then looked well no of missions as be time packed a o'clock had due",
   postBody:
    "A led and agency; Thing be and escape, way. A to the it feel told everything the a couldn't mountains, respective be that he to that it but hat the pouring may of into. For of offer, shown",
  },
  {
   date: "Dec 16,2022",
   author: "admin",
   postTile:
    "Physics took past experiments on evaluate now, sort hand, attained",
   postBody:
    "Out perceive have tone a on a quitting their spineless, focus leave stupid. Skyline cache effectiveness country, maintain around presence right, a is themselves",
  },
  {
   date: "Dec 15,2022",
   author: "admin",
   postTile: "Week right, would and the abandon definitely responded for line",
   postBody:
    "Size first kind language way statement ideas are the of the halfdozen totally on but in the overhauls the a could didn't it those he have small the frame. That evils been is have pass",
  },
  {
   date: "Dec 14,2022",
   author: "admin",
   postTile:
    "Then looked well no of missions as be time packed a o'clock had due",
   postBody:
    "A led and agency; Thing be and escape, way. A to the it feel told everything the a couldn't mountains, respective be that he to that it but hat the pouring may of into. For of offer, shown",
  },
 ];
 const topPosts = allPosts.slice(0, 3);
 let viewAllPostsFlag = false;
 const postsContainer = document.getElementById("posts");
 const viewBtn = document.getElementById("viewBtn");

 const showPosts = (container, posts) => {
  const displaiedPosts = posts
   .map((post) => {
    const { date, author, postTile, postBody } = post;

    return `
      <div class="col-lg-4 col-md-10 col-12 mb-3 mx-auto">
         <div class="post">
            <div class="post-top">
               <p class="date">On ${date} by <span class="post-author">
                     ${author}
                  </span>
               </p>
            </div>
            <p class="post-title">
               ${postTile}
            </p>
            <p class="post-body">
               ${postBody}
            </p>
         </div>
      </div>
   `;
   })
   .join("");

  container.innerHTML = displaiedPosts;
 };

 showPosts(postsContainer, topPosts);

 viewBtn.addEventListener("click", () => {
  if (!viewAllPostsFlag) {
   showPosts(postsContainer, allPosts);
   viewAllPostsFlag = true;
   viewBtn.textContent = "view top posts";
  } else {
   showPosts(postsContainer, topPosts);
   viewAllPostsFlag = false;
   viewBtn.textContent = "view all";
  }
 });
};

window.addEventListener("DOMContentLoaded", viewAllPosts);


