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
  { name: "Accusantium", image: "images/coffee3.jpg" },
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