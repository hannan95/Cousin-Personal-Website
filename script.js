gsap.registerPlugin(TextPlugin);

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

// animating header

const tl_header = gsap.timeline();
tl_header.from("header .one h1", {
  x: -700,
  opacity: 0,
  duration: 1,
});
tl_header.from("header .one #header_p", {
  x: -700,
  opacity: 0,
  duration: 1,
  delay: -0.6,
});

tl_header.to("header .two", {
  x: 0,
  duration: 0.8,
  delay: -0.6,
});

tl_header.from("header .one .toggle", {
  x: -700,
  opacity: 0,
  duration: 1,
  delay: -0.3,
});

var tl_section_likes = gsap.timeline();

gsap.from("main .like #likes", {
  x: -400,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "main #likes",
    scroller: "body",
    start: "top 68%",
    end: "top 0%",
    onLeave: () => {
      gsap.to("main #likes", {
        x: -400,
        opacity: 0,
      });
    },
    onEnterBack: () => {
      gsap.to("main #likes", {
        x: 0,
        opacity: 1,
      });
    },
  },
});

gsap.to("main .like .cards1 div", {
  x: 0,
  opacity: 1,
  duration: 0.8,
  stagger: -0.3,
  scrollTrigger: {
    trigger: "main .like .cards1",
    scroller: "body",
    start: "top 70%",
    end: "bottom 10%",
    // markers: true,
    onLeave: () => {
      gsap.to("main .like .cards1 div", {
        x: -400,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
      });
    },
    onEnterBack: () => {
      gsap.to("main .like .cards1 div", {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: -0.3,
      });
    },
  },
});

gsap.from("main #dislikes", {
  x: -400,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "main  #dislikes",
    scroller: "body",
    // markers: true,
    start: "top 90%",
  },
});

gsap.to("main .like .cards2 div", {
  y: 0,
  opacity: 1,
  duration: 0.3,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "main .like .cards2",
    scroller: "body",
    start: "top 70%",
    end: "bottom 10%",
    // markers: true,
    onLeave: () => {
      gsap.to("main .like .cards2 div", {
        y: -400,
        opacity: 0,
        duration: 0.3,
        stagger: -0.3,
      });
    },
    onEnterBack: () => {
      gsap.to("main .like .cards2 div", {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.3,
      });
    },
  },
});

var h1_routine = document.querySelector(".routine h1");
var h1_routine_text = h1_routine.innerText;
h1_routine.innerText = "";
for (letter of h1_routine_text) {
  var span = document.createElement("span");
  span.classList.add("letter");
  span.innerHTML = letter === " " ? "&nbsp;" : letter;
  h1_routine.appendChild(span);
}

var routine_tl = gsap.timeline();

gsap.from(".routine h1 span.letter", {
  y: 400,
  duration: 0.5,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".routine h1",
    scroller: "body",
    // markers: true,
    start: "top 90%",
  },
});

gsap.fromTo(
  ".routine .image",
  {
    x: 400,
    opacity: 0,
  },
  {
    x: -100,
    duration: 0.5,
    opacity: 1,
    scrollTrigger: {
      trigger: ".routine .image",
      scroller: "body",
      // markers: true,
      start: "bottom 100%",
    },
  }
);

gsap.to(".routine .Pani", {
  transform: "translateX(-80%)",
  duration: 1,
  scrollTrigger: {
    trigger: ".routine .Pani",
    scroller: "body",
    start: "bottom 80%",
    // end: "+=100%",
    scrub: 2,
    // pin: true,
    // markers: true,
    // pinSpacing: false  // Uncomment if you want no white space at all after
  },
});
var game_heading = document.querySelector("section.game h1");
gsap.fromTo(
  game_heading,
  {
    opacity: 0,
    x: -400,
  },
  {
    opacity: 1,
    x: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: game_heading,
      scroller: "body",
      start: "top 80%",
    },
  }
);
var game_card = document.querySelector(".game .game_card");

// gsap.fromTo(
//   game_card,
//   {
//     opacity: 0,
//     x: -400,
//   },
//   {
//     opacity: 1,
//     x: 0,
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: game_card,
//       scroller: "body",
//       start: "top 80%",
//       markers: true,
//     },
//   }
// );

var fun_facts = [
  `Rafey's favorite sports is Cricket`,
  `He once ate rat poison when he was little!`,
  "He loves playing valorant, despite being the reason his team loses half the time",
  `His favorite movie is The Amazing Spider-Man`,
  `Rafey has little sister named Suhaima!`,
  `He loves listening to Sidhu Mose Wala`,
  `He is great at swimming`,
];

var fun_facts_p = document.querySelector("section.facts .facts_container p");
var fun_facts_btn = document.querySelector(
  "section.facts .facts_container button"
);

var tl = gsap.timeline({ paused: true });
fun_facts_p.innerText = "";

var currentTl = null;
var count = 0;
fun_facts_btn.addEventListener("click", () => {
  if (count == 7) {
    count = 0;
  }
  var random_fact = fun_facts[count];
  count += 1;
  if (currentTl) {
    // Reverse existing timeline
    currentTl.reverse();
    // Wait until reversed before showing new fact
    currentTl.eventCallback("onReverseComplete", () => {
      playTypewriter(random_fact);
    });
  } else {
    playTypewriter(random_fact);
  }
});

function playTypewriter(text) {
  currentTl = gsap.timeline();
  currentTl.to(fun_facts_p, {
    duration: 1.5,
    text: { value: text, delimiter: "" },
    ease: "power1.inOut",
    opacity: 1,
  });
}

var guitar_string = document.querySelector(".guitar1");
var svg = document.querySelector(".guitar1 svg");
var path = "M 10 80 Q 95 80 850 80";

var final_path = "M 10 80 Q 95 80 850 80";

guitar_string.addEventListener("mousemove", (dets) => {
  var svgTop = svg.getBoundingClientRect().top;
  var svgleft = svg.getBoundingClientRect().left;

  var relativeY = dets.y - svgTop;
  var relativeX = dets.x - svgleft;

  path = `M 10 80 Q ${relativeX} ${relativeY} 850 80`;

  gsap.to(".guitar1 svg path", {
    attr: { d: path },
    duration: 0.5,
    ease: "power3.out",
  });
});
guitar_string.addEventListener("mouseleave", (dets) => {
  gsap.to(".guitar1 svg path", {
    attr: { d: final_path },
    duration: 0.8,
    ease: "elastic.out",
  });
});
var guitar_string2 = document.querySelector(".guitar2");
var svg2 = document.querySelector(".guitar2 svg");
var path2 = "M 10 80 Q 95 80 850 80";

var final_path2 = "M 10 80 Q 95 80 850 80";

guitar_string2.addEventListener("mousemove", (dets) => {
  var svgTop = svg2.getBoundingClientRect().top;
  var svgleft = svg2.getBoundingClientRect().left;

  var relativeY = dets.y - svgTop;
  var relativeX = dets.x - svgleft;

  path = `M 10 80 Q ${relativeX} ${relativeY} 850 80`;

  gsap.to(".guitar2 svg path", {
    attr: { d: path },
    duration: 0.5,
    ease: "power3.out",
  });
});
guitar_string2.addEventListener("mouseleave", (dets) => {
  gsap.to(".guitar2 svg path", {
    attr: { d: final_path },
    duration: 0.8,
    ease: "elastic.out",
  });
});

// The Tiny Game

var input_btn = document.querySelector(".game .game_card input");
var submit_btn = document.querySelector(".game .game_card button");
var Game_card = document.querySelector(".game .game_card");
var feedback = document.querySelector(".game .game_card .feedback");
var tries = document.querySelector(".game .game_card .tries");

var Correct_Number = Math.floor(Math.random() * 100);
var Total_tries = 10;
var Total_score = 10;
// var Correct_Number = 66;

submit_btn.addEventListener("click", () => {
  if (input_btn.value == Correct_Number) {
    Guess_right();
  } else {
    Guess_Wrong(input_btn.value, Correct_Number);
  }
});

function Guess_right() {
  Game_card.style.boxShadow = " 0 0 20px #66BB6A";
  feedback.innerText = "🎉 Correct! You guessed it!";
  tries.innerText = `🏅 Your score: ${Total_score}`;
  Correct_Number = Math.floor(Math.random() * 100);
  Total_score = 10;
  Total_tries = 10;
  confetti({
    particleCount: 100,
    spread: 70,
    colors: ["#4FC3F7", "#66BB6A", "#FFB74D"],
  });
}
function Guess_Wrong(input, ans) {
  Game_card.style.boxShadow = " 0 0 20px #ef5350";
  Total_score -= 1;
  Total_tries -= 1;
  if (Total_tries == 0) {
    feedback.innerText = `💀 Game Over! The number was ${Correct_Number}`;
    tries.innerText = `Tries Left: 0`;

    Correct_Number = Math.floor(Math.random() * 100);
    Total_score = 10;
    Total_tries = 10;
  } else if (input < ans) {
    feedback.innerText = `🔥 Too Low!`;
    tries.innerText = `Tries Left: ${Total_tries}`;
  } else if (input > ans) {
    feedback.innerText = "🔥 Too High!";
    tries.innerText = `Tries Left: ${Total_tries}`;
  }
}
// Now this is for the form

var form_btn = document.querySelector(".message .form .button-confirm");
var inputs = document.querySelectorAll(".message .form .input");
var submit_animation = document.querySelector("section.message .msg_sent");
console.log(submit_animation);
form_btn.addEventListener("click", () => {
  for (input of inputs) {
    input.value = "";
  }
  var animation_mail_tl = gsap.timeline();

  let distanceToCenter = window.innerWidth / 2 - 30;

  // move quickly most of the way

  animation_mail_tl.fromTo(
    submit_animation,
    {
      x: -200,
      filter: "blur(3px)",
    },
    {
      duration: 0.3,
      filter: "blur(3px)",
      x: distanceToCenter * 0.8,
      ease: "none",
    }
  );

  animation_mail_tl.to(submit_animation, {
    duration: 0.2,
    x: distanceToCenter,
    filter: "blur(0px)",
    ease: "none",
  });

  animation_mail_tl.to(submit_animation, {
    x: window.innerWidth / 2 + 50,
    duration: 0.8,
  });
  animation_mail_tl.to(submit_animation, {
    x: window.innerWidth + 200,
    duration: 0.5,
    filter: "blur(3px)",
    ease: "power4.in",
  });
  animation_mail_tl.to(submit_animation, {
    duration: 0.2,
    filter: "blur(0px)",
  });
});
// Page preloader
const loader = document.querySelector(".loader_container");
const pageContent = document.querySelector(".page_content");

window.addEventListener("load", () => {
  loader.classList.add("hidden");
  pageContent.classList.add("visible");
  ScrollTrigger.refresh();
});
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
