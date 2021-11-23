// - Make sure you check and understand the data that is given to you!


// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html

//<li class="card"> 
//  <h2 class="card--title">Bulbasaur</h2>
//  <img
//  width="256"
//  class="card--img"
//  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
//  />
//  <ul class="card--text">
//    <li>HP: 45</li>
//    <li>ATTACK: 49</li>
//    <li>DEFENSE: 49</li>
//    <li>SPECIAL-ATTACK: 65</li>
//    <li>SPECIAL-DEFENSE: 65</li>
//    <li>SPEED: 45</li>
//  </ul>
//</li>


// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

const liEl = document.createElement('li')
document.querySelector(".cards").prepend(liEl)
liEl.setAttribute("class", "card")

const h2El = document.createElement('h2')
h2El.textContent = 'Bulbasaur'
h2El.setAttribute("class", "card--title")
document.querySelector('li').prepend(h2El)

const imgEl = document.createElement('img')
imgEl.setAttribute("class", "card--img")
document.querySelector('li').append(imgEl)
imgEl.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"

const ulPower = document.createElement('ul')
ulPower.setAttribute("class", "card--text")
document.querySelector('li').append(ulPower)

const liHp = document.createElement("li")
liHp.textContent = "HP: 45"
document.querySelector(".card--text").append(liHp)

const liAttack = document.createElement("li")
liAttack.textContent = "ATTACK: 49"
document.querySelector(".card--text").append(liAttack)

const liDefense = document.createElement("li")
liDefense.textContent = "DEFENSE: 49"
document.querySelector(".card--text").append(liDefense)

const liSpecialAttack = document.createElement("li")
liSpecialAttack.textContent = "SPECIAL-ATTACK: 65"
document.querySelector(".card--text").append(liSpecialAttack)

const liSpecialDefense = document.createElement("li")
liSpecialDefense.textContent = "SPECIAL-DEFENSE: 65"
document.querySelector(".card--text").append(liSpecialDefense)

const liSpeed = document.createElement("li")
liSpeed.textContent = "SPEED: 45"
document.querySelector(".card--text").append(liSpeed)

