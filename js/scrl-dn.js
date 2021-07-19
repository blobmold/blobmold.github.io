//Create exp and edu elements before DOM loads
window.addEventListener("DOMContentLoaded", () => {
  let listOfTitles = [
    {
      parent: document.querySelector(".work-header-container"),
      child: document.querySelector(".work-header-container h2"),
      type: "expletter"
    },
    {
      parent: document.querySelector(".edu-header-container"),
      child: document.querySelector(".edu-header-container h2"),
      type: "eduletter"
    }
  ]
  for (let item of listOfTitles) {
    item.child.remove();
    for (let letter of item.child.innerText) {
      let newEl = document.createElement(item.type);
      newEl.classList.add(item.type);
      newEl.innerText = letter;
      item.parent.append(newEl);
      newEl.style.opacity = 0;
    }
  }
})

let divList = document.querySelectorAll(".sect3 > div > div");
let bouncyItem = document.querySelectorAll('.george-logo');
let sect4Cont = document.querySelectorAll(".sect4-container");
let sect4Scores = document.querySelectorAll(".sect4-listOfSkills li span:last-child")

let arr = [divList, bouncyItem, sect4Cont, sect4Scores]

for (let el of arr) {
  createObserver(el)
}

//--
function createObserver(element) {

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.1, 0.2, 0.3],
  }

  function callback(g) {
    g.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('work-header-container')) {
          expEdu("expbox", "expletter")
        } else if (entry.target.classList.contains('edu-header-container')) {
          expEdu("edubox", "eduletter")
        } else {
          entry.target.classList.add("visible");
        }
        if (entry.target.classList.contains('george-logo')) {
          anime({
            targets: entry.target.childNodes[1],
            translateX: { value: 0, duration: 4e3, easing: 'spring(1, 40, 7, 0)' },
            rotate: { value: 360, duration: 4e3, easing: 'spring(1, 40, 7, 0)' },
          })
        }
      }
    })
  }

  //calling observer
  let observer = new IntersectionObserver(callback, options);

  element.forEach((div) => {
    observer.observe(div);
  })
}

//function for animating exp and edu
let expEdu = (box, letter) => {
  anime({
    targets: box,
    translateY: { value: 0, duration: 500, delay: 500 },
    rotate: { value: 180, delay: 900, duration: 1000 },
    width: [
      { value: '90%', delay: 1100, duration: 600 },
    ],
    height: [
      { value: 100, delay: 1100, duration: 1000 },
    ],
    borderRadius: { value: 10, delay: 1100 },
    scale: { value: 0, delay: 2100, duration: 200, easing: "easeInSine" }
  })

  anime({
    targets: letter,
    opacity: { value: 1, delay: 2100, duration: 100 },
    scale: [
      { value: 0.5, delay: 2100, },
      { value: 1, delay: anime.stagger(20) }
    ],
  })
}
