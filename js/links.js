let links = {
  "LinkedIn": {
    url: 'https://www.linkedin.com/in/ifyoureadthisyouareawesome/', 
    img: '/pics/links/linkedin.png'
  },
  "Twitter": {
    url: 'https://twitter.com/GParesishvili', 
    img: '/pics/links/twitter.png'
  },
  "Email": {
    url: 'mailto:g.paresishvili@outlook.com', 
    img: '/pics/links/Mail.svg'
  },
  "GitHub": {
    url: 'https://github.com/macron125', 
    img: '/pics/links/github.png'
  },
}

let aside = document.querySelector('aside')

function createElement (tag, cName, parent) {
  let nE = document.createElement(tag);
  if(cName != undefined) {
    nE.classList.add(cName);
  };
  parent.appendChild(nE)
  return nE;
}

function addIcons(parent, obj) {
  for(let name in obj) {
    let p1 = createElement('div', name, parent);
    let a = createElement('a', "a-" + name, p1);
    a.setAttribute("href", obj[name].url);
    a.setAttribute('target', '_blank');
    let img = createElement('img', "img-" + name, a);
    img.setAttribute("src", obj[name].img)
  }
}

let sect1Icons = addIcons(aside, links)
