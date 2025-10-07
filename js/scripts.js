import { characters } from '../data/characters.js';
console.log(characters)

const charactercards = document.querySelector('#charactercards')


characters.forEach(character => {
    const thecard = document.createElement('div')
    thecard.className = 'card1'

    const theimg = document.createElement('img')
    theimg.src=character.url

    const thetitle = document.createElement('h2')
    thetitle.innerText=character.name

    const thepower = document.createElement('div')
    thepower.innerText=character.power
    thepower.className="mypower"

    const thedesc = document.createElement('p')
    thedesc.innerText=character.description
    thedesc.className=""

    const theage = document.createElement('div')
    theage.innerHTML=`<strong>Soul Age: </strong>${character.age}`
    theage.className="myage"

    const thebuttons = document.createElement('div')
    thebuttons.innerHTML='<a href="#" class="wp">Weapon</a><a href="#" class="fa">Family</a>';
    thebuttons.className="mylinks"

    thecard.appendChild(theimg)
    thecard.appendChild(thetitle)
    thecard.appendChild(thepower)
    thecard.appendChild(thedesc)
    thecard.appendChild(theage)
    thecard.appendChild(thebuttons)
    

    charactercards.appendChild(thecard)


})