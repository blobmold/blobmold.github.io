let text = document.querySelector('.work-text-wrapper');

function createGoBackBtn() {
  for(let i = 1; i < text.children.length; i++) {
    let goBackBtn = document.createElement('button');
    goBackBtn.classList.add('goBack');
    goBackBtn.innerText = "< Go Back";
    goBackBtn.setAttribute("onClick", "goBack(text)")
    text.children[i].appendChild(goBackBtn)
  }
}

function goBack(parent) {
  for(let child of parent.children) {
    child.style.transform = "translateX(0%)"
  }
}

createGoBackBtn();

let jobList = document.querySelector('.job-list ul')
for(let i = 0; i < jobList.children.length; i++) {
  let currentChild = jobList.children[i];
  currentChild.addEventListener('click', () => {
    for(let l of text.children) {
      l.style.transform = `translateX(-${i + 1 + "00%"})`
      l.style.cursor = "pointer"
    }
  })
}
