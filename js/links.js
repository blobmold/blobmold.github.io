let links = {
  "LinkedIn": {
    url: 'https://www.linkedin.com/in/ifyoureadthisyouareawesome/', 
    img: '/pics/links/Linkedin.svg'
  },
  "Twitter": {
    url: 'https://twitter.com/GParesishvili', 
    img: '/pics/links/Twitter.svg'
  },
  "Email": {
    url: 'mailto:g.paresishvili@outlook.com', 
    img: '/pics/links/Mail.svg'
  },
  "Discrod": {
    url: 'https://www.apple.com', 
    img: '/pics/links/Discord.svg'
  },
}

//Generate a DOM element with a given type, class name and a parent to append to
function createElement (type, className, parent) {
  let nE = document.createElement(type)
  nE.classList.add(className);
  parent.appendChild(nE);
}

//create a DIV DOM element
function addItems(obj, section) {
  for (let name in obj) {
    createElement("div", name, section);    //add parent div
    let div = document.querySelector("." + name);
    createElement('a', undefined, div);     //add anchor tag and set a reference
    let a = document.querySelector("." + name + " a");
    a.setAttribute("href", obj[name].url);
    a.setAttribute('target', '_blank')
    createElement("img", "img-" + name, a);    //add img element
    let img = document.querySelector(".img-" + name);
    img.setAttribute("src", obj[name].img);

  }
}

let aside = document.querySelector("aside");
let smc = document.querySelector(".social-media-container");

let sections = [smc, aside]

for(let section of sections) {
  console.log(section)
  addItems(links, section)
}