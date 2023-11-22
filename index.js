import { cardTemplate } from './js/projectCard.js'

(async function () {
  const response = await fetch('./data.json')
  const data = await response.json()

  data.projects.map(project => {
    cardTemplate({
      title: project.title,
      image: project.image,
      description: project.description,
      links: project.links
    })
  })
})()

/* Navigation bar */
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

const navBarBtn = document.getElementById('nav-bar-btn')
navBarBtn.addEventListener('click', openNav)

const navBarOverlay = document.getElementById('nav-bar-overlay')
navBarOverlay.addEventListener('click', closeNav)

const sideBarPanel = document.getElementById('mySidepanel')
sideBarPanel.addEventListener('click', closeNav)

/* CONTACT FORM */
let inp = document.getElementsByTagName('input');
let textInp = document.querySelector('textarea');

const submitForm = () => {
  fetch("https://formsubmit.co/ajax/gomezjuanefe@gmail.com", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: inp.name.value,
      email: inp.email.value,
      subject: inp.subject.value,
      message: textInp.value
    })
  })
    .then(response => response.json())
    .then(data => {
      alert('Your message has been received :) Thanks!');
      inp.name.value = '';
      inp.email.value = '';
      inp.subject.value = '';
      textInp.value = '';
    })
    .catch(error => {
      alert('Something went wrong :( ...Try later!');
    });
}

let submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  submitForm();
})