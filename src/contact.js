function createContact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("tab-content", "contact");
  contactDiv.innerHTML = `
        <h2>Contact</h2>
        <p>Address: 123 Main St, Anytown USA</p>
        <p>Phone: 555-1234</p>
        <p>Email: <a href="mailto:info@restaurant.com">info@restaurant.com</a></p>
      `;
  return contactDiv;
}

export { createContact };
