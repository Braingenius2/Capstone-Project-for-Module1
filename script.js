// Get the hamburgerIcon and nav-menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const menuItems = document.querySelector('.nav-menu');
const cancelIcon = document.getElementById('cancel-icon');

function toggleMenu() {
  hamburgerIcon.classList.toggle('close');
  cancelIcon.classList.toggle('show');
  menuItems.classList.toggle('show');
}

// Add click event listeners to the hamburgerIcon
hamburgerIcon.addEventListener('click', toggleMenu);

// Add click event to cancel icon 
cancelIcon.addEventListener('click', toggleMenu);

// Add click event listeners to the menu items links
menuItems.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        // Hide the nav-menu after a link is clicked
        menuItems.classList.toggle('show');
    });
  });

// Speakers Data Object
const speakers = [
    {
      name: 'Ding Liren',
      src: ["images/checkers-mobile.png", "images/ding-liren1.jpg"],
      alt: 'Ding',
      title: 'Grandmaster. World chess championship Contender',
      description: 'highest rated Chinese chess player in history and is also a three-time Chinese Chess Champion.',
    },
    {
        name: 'Hikaru Nakamura',
        src: ["images/checkers-mobile.png", "images/Hikaru.jpg"],
        alt: 'Hikaru',
        title: 'Twitch streamer. Grandmaster. Reigning World Fischer Random Chess Champion.',
        description: 'He earned his grandmaster title at the age of 15, the youngest American at the time to do so. With a peak rating of 2816, Nakamura is the tenth-highest rated player in history.',
    },
    {
        name: 'Magnus Carlsen',
        src: ["images/checkers-mobile.png", "images/Magnus-Carlsen.jpg"],
        alt: 'Magnus',
        title: 'Grandmaster. Greatest Chess Player of the century',
        description: 'Carlsen has held the number 1 position in the FIDE world chess rankings since 1 July 2011 and trails only Garry Kasparov in time spent as the highest-rated player in the world. His peak rating of 2882 is the highest in history. He also holds the record for the longest unbeaten streak at the elite level in classical chess.',
    },
    {
        name: 'Daniel Naroditsky',
        src: ["images/checkers-mobile.png", "images/naroditsky.jpg"],
        alt: 'Naroditsky',
        title: 'Grandmaster',
        description: 'He is an American chess grandmaster, author, and commentator. He published his first chess book at age 14',
    },
    {
        name: 'Daniel Rensch',
        src: ["images/checkers-mobile.png", "images/rensch.jpg"],
        alt: 'Rensch',
        title: 'International master',
        description: 'He holds the Arizona state record for youngest national master, at the age of 14. He is the president of American Chess Events LLC and Chief Chess Officer of Chess.com.',
    },
    {
        name: 'Gary Kasparov',
        src: ["images/checkers-mobile.png", "images/kasparov.jpg"],
        alt: 'Kasparov',
        title: 'Grandmaster. Longest reigning World champion of recent times',
        description: 'He is Russian chess grandmaster, former World Chess Champion (1985 - 2000), political activist and writer. His peak FIDE chess rating of 2851,[3] achieved in 1999, was the highest recorded until being surpassed by Magnus Carlsen in 2013.',
    },
  
  ];

// Dynamically create Speakers section
function generateSpeakers () {
  // get the parent element where the section will be appended
  const main = document.querySelector('main');

  // create the section element
  const section = document.createElement('section');
  section.setAttribute('id', 'speakers');

  // create the section header
  const header = document.createElement('h3');
  header.setAttribute('class', 'section-header');
  header.textContent = 'Featured Speakers';
  section.appendChild(header);

  // create the hr element
  const hr = document.createElement('hr');
  section.appendChild(hr);

  // create the ul element
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'speaker-list');
  section.appendChild(ul);

  // loop through the speakers data and create the li elements
  speakers.forEach(speaker => {
  // create the li element
  const li = document.createElement('li');
  li.setAttribute('class', 'speaker-item');

  // create the image box element
  const imageBox = document.createElement('div');
  imageBox.setAttribute('class', 'image-box');
  li.appendChild(imageBox);

  // create the checkers-bg image
  const checkersBg = document.createElement('img');
  checkersBg.setAttribute('class', 'checkers-bg');
  checkersBg.setAttribute('src', speaker.src[0]);
  checkersBg.setAttribute('alt', speaker.alt);
  imageBox.appendChild(checkersBg);

  // create the speaker-img div with background-image
  const speakerImg = document.createElement('div');
  speakerImg.setAttribute('class', 'speaker-img');
  speakerImg.style.backgroundImage = `url(${speaker.src[1]})`;
  imageBox.appendChild(speakerImg);

  // create the speaker-info div
  const speakerInfo = document.createElement('div');
  speakerInfo.setAttribute('class', 'speaker-info');
  li.appendChild(speakerInfo);

  // create the speaker name and title elements
  const speakerName = document.createElement('h4');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speaker.name;
  const speakerTitle = document.createElement('p');
  speakerTitle.setAttribute('class', 'speaker-title');
  speakerTitle.textContent = speaker.title;
  speakerInfo.appendChild(speakerName);
  speakerInfo.appendChild(speakerTitle);

  // create the hr element
  const speakerHr = document.createElement('hr');
  speakerInfo.appendChild(speakerHr);

  // create the speaker description element
  const speakerDescription = document.createElement('p');
  speakerDescription.textContent = speaker.description;
  speakerInfo.appendChild(speakerDescription);

  // append the li element to the ul element
  ul.appendChild(li);
  });

  // append the section element to the parent element
  main.appendChild(section);

}

  if (document.title === "HomePage - World Chess Tournament") {
    // Generate the speakers section only if the current page is index.html
    generateSpeakers()
  }