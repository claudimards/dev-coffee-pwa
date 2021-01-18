const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.jpg" },
  { name: "Voluptatem", image: "images/coffee2.jpg" },
  { name: "Explicabo", image: "images/coffee3.jpg" },
  { name: "Rchitecto", image: "images/coffee3.jpg" },
  { name: " Beatae", image: "images/coffee2.jpg" },
  { name: " Vitae", image: "images/coffee1.jpg" },
  { name: "Inventore", image: "images/coffee1.jpg" },
  { name: "Veritatis", image: "images/coffee2.jpg" },
  { name: "Accusantium", image: "images/coffee3.jpg" }
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} alt=${name} title=${name} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('serviceWorker.js')
  })
}

const divInstall = document.querySelector('.div-install')
const butInstall = document.querySelector('#btn-install')

window.addEventListener('beforeinstallprompt', (event) => {
  // Stash the event so it can be triggered later.
  event.preventDefault()
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container
  divInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  promptEvent.userChoice.then((result) => {
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    divInstall.classList.toggle('hidden', true);
  });
});

const btnClose = document.querySelector('#close-install')
btnClose.addEventListener('click', event => {
  divInstall.classList.toggle('hidden', true);
})