const terms = document.querySelector(".terms-and-conditions");
const watch = document.querySelector(".watch");
const button = document.querySelector(".accept");
// terms.addEventListener("scroll", function (e) {
//   const { scrollTop, scrollHeight } = e.currentTarget;
//   console.log({ scrollHeight, scrollTop });
// });

function obCallback(payload) {
  console.log(payload[0].intersectionRatio);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    console.log("REMOVING DISABLED");
  } else {
    button.disabled = true;
  }
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});
ob.observe(terms.lastElementChild);
