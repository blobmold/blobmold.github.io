let text = document.querySelector(".work-text-wrapper");
window.addEventListener("DOMContentLoaded", () => {
  createGoBackBtn();
});

function createGoBackBtn() {
  for (let i = 1; i < text.children.length; i++) {
    let goBackBtn = document.createElement("button");
    goBackBtn.classList.add("goBack");
    goBackBtn.innerText = "< Go Back";
    goBackBtn.setAttribute("onClick", "goBack(text)");
    text.children[i].appendChild(goBackBtn);
  }
}

function goBack(parent) {
  for (let child of parent.children) {
    anime({
      targets: child,
      translateX: "0%",
      duration: 500,
      easing: "easeOutElastic",
    });
  }
}

let jobList = document.querySelector(".job-list ul");
for (let i = 0; i < jobList.children.length; i++) {
  let currentChild = jobList.children[i];
  if (currentChild.classList.value != "empty") {
    currentChild.addEventListener("click", () => {
      for (let l of text.children) {
        animate(l, i);
      }
    });
  }
}

function animate(target, turn) {
  anime({
    targets: target,
    translateX: {
      value: `-${turn + 1 + "00%"}`,
      duration: 500,
      easing: "easeOutElastic"
    },
  });
}
