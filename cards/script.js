// DOM Elements
const form = document.querySelector("form");
const [imageInput, nameInput, titleInput, descriptionInput] = document.querySelectorAll("input");
const mainContainer = document.querySelector("#main");

// Helper function to create elements with attributes
const createElement = (tag, className, textContent = null, attributes = {}) => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
};

// Form submission handler
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validate inputs
  if (!imageInput.value || !nameInput.value || !titleInput.value || !descriptionInput.value) {
    alert("Please fill in all fields");
    return;
  }

  // Create card structure
  const profileImg = createElement("img", null, null, { src: imageInput.value });
  const profileDiv = createElement("div", "profile");
  profileDiv.appendChild(profileImg);

  const titleElement = createElement("h1", null, nameInput.value);
  const subtitleElement = createElement("h3", null, titleInput.value);
  const descriptionElement = createElement("p", null, descriptionInput.value);

  const cardDiv = createElement("div", "card");
  cardDiv.appendChild(profileDiv);
  cardDiv.appendChild(titleElement);
  cardDiv.appendChild(subtitleElement);
  cardDiv.appendChild(descriptionElement);

  mainContainer.appendChild(cardDiv);

  // Reset form
  form.reset();
});
