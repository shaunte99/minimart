// NAV ACTIVE
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// CATEGORY ACTIVE
document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});

// CART
let cartCount = 0;
document.querySelectorAll(".product-card button").forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
  });
});
