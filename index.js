const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

function buscarPizzaPorId(pizzaId) {
  return pizzas.find((pizza) => pizza.id === pizzaId);
}

function renderizarPizza(pizza) {
  const pizzaContainer = document.getElementById("pizzaContainer");

  pizzaContainer.innerHTML = "";

  if (pizza) {
    const pizzaCard = document.createElement("div");
    pizzaCard.className = "pizza-card";

    const pizzaImg = document.createElement("img");
    pizzaImg.className = "pizza-img";
    pizzaImg.src = pizza.imagen;
    pizzaCard.appendChild(pizzaImg);

    const pizzaNombre = document.createElement("h2");
    pizzaNombre.textContent = pizza.nombre;
    pizzaCard.appendChild(pizzaNombre);

    const pizzaPrecio = document.createElement("p");
    pizzaPrecio.textContent = `Precio: $${pizza.precio}`;
    pizzaCard.appendChild(pizzaPrecio);

    pizzaContainer.appendChild(pizzaCard);

    localStorage.setItem("ultimaPizzaBuscada", JSON.stringify(pizza));
  } else {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "¡Pizza no encontrada!";
    pizzaContainer.appendChild(errorMessage);
  }
}

function handleSearch(event) {
  event.preventDefault();
  const pizzaId = parseInt(document.getElementById("pizzaId").value);

  if (!isNaN(pizzaId)) {
    const pizza = buscarPizzaPorId(pizzaId);
    renderizarPizza(pizza);
  } else {
    renderizarPizza(null); 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ultimaPizzaBuscada = JSON.parse(localStorage.getItem("ultimaPizzaBuscada"));

  if (ultimaPizzaBuscada) {
    renderizarPizza(ultimaPizzaBuscada);
  }

  const searchForm = document.getElementById("searchForm");
  searchForm.addEventListener("submit", handleSearch);
});
