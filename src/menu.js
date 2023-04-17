function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("tab-content", "menu");
  menuDiv.innerHTML = `
        <h2>Menu</h2>
        <ul>
          <li>Pasta with tomato sauce</li>
          <li>Grilled salmon with asparagus</li>
          <li>Beef bourguignon</li>
          <li>Chocolate lava cake</li>
        </ul>
      `;
  return menuDiv;
}

export { createMenu };
