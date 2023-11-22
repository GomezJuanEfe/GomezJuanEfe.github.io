import mdToHTML from "./mdToHTML.js"

export const cardTemplate = ({ title, description, image, links }) => {
  const cardsContainer = document.querySelector('#project-card-cont')
  const cardTemplate = document.querySelector('#card-template')

  const clone = cardTemplate.content.cloneNode(true)

  clone.querySelector('.article-body h2').textContent = title
  clone.querySelector('figure img').src = image
  clone.querySelector('a.image-anchor').href = image
  clone.querySelector('.article-body p').innerHTML = mdToHTML(description)

  const ctaSection = clone.querySelector('div.cta-buttons')

  for (const link of links) {
    const button = document.createElement('a')
    button.className = 'card-button'
    button.textContent = link.text
    button.href = link.url
    button.target = "_blank"

    ctaSection.appendChild(button)
  }

  cardsContainer.appendChild(clone)
}