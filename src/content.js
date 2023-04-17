function createHomepage() {
  const contentDiv = document.getElementById("content");

  const h1Element = document.createElement("h1");
  h1Element.textContent = "Welcome to Osteria Francescana";
  contentDiv.appendChild(h1Element);

  const imgElement = document.createElement("img");
  imgElement.src = "restaurant.jpg";
  imgElement.alt = "Restaurant image";
  contentDiv.appendChild(imgElement);
  const pElement = document.createElement("p");
  pElement.textContent =
    "We are located in Modena, Italy, this restaurant has been awarded three Michelin stars and is known for its innovative and creative cuisine that blends traditional Italian flavors with modern techniques.";
  contentDiv.appendChild(pElement);
}

export { createHomepage };
