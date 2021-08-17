let skills = {
  programming: {
    "HTML": 5,
    "CSS": 5,
    "JavaScript": 4,
    "node.js": 1,
    "PHP": 3,
    "XML": 4,
    "SASS / SCSS": 4,
    "Bootstrap": 2,
    "jQuery": 3,
    "React.js": 2,
    "Vue.js": 1,
    "Angular": 1,
    "WordPress": 2,
  },
  tools: {
    "VS Code": 4,
    "GitHub": 4,
    "Google Analytics": 4,
    "Affinity Designer": 4,
    "Affinity Photo": 4,
    "MS Excel": 5,
    "MS Word": 5,
    "MS PowerPoint": 5,
    "MS Visio": 3,
    "Figma": 4,
    "Blender": 2,
    "Jira": 4,
    "Slack": 5
  },
  languages: {
    "English": 5,
    "Georgian": 5,
    "Russian": 5
  },
};

for (let category in skills) {
  //Create headers
  let sectionLOS = document.querySelector('.sect4-container');
  let newCatSect = document.createElement('div');
  newCatSect.classList.add(`${category}-skills`);
  newCatSect.setAttribute('id', `${category}-skills`);
  sectionLOS.appendChild(newCatSect);

  let skillSectHeader = document.createElement('h2');
  skillSectHeader.innerText = category[0].toUpperCase() + category.slice(1);
  //Create ul
  let newUl = document.createElement('ul');
  newUl.classList.add(`list-${category}-skills`)
  //Push headers and ul
  newCatSect.append(skillSectHeader, newUl);

  //Lists
  for (let skill in skills[category]) {
    //Create and push li
    let newLi = document.createElement('li');
    newUl.append(newLi);

    //Create spans (titles and scores)
    let newSpanTitle = document.createElement('span');
    let newSpanScore = document.createElement('span');

    newSpanTitle.classList.add(`${category}-skill-title`);
    newSpanScore.classList.add(`${category}-skill-score`);

    newSpanTitle.innerText = skill;
    //Push titles and scores
    newLi.append(newSpanTitle, newSpanScore);

    //Set rating width
    var starNum = skills[category][skill];


    newSpanScore.style.width === "200px" ? 
    newSpanScore.classList.add('max') : 
    newSpanScore.style.width = starNum * 40 + "px";
  }
}
