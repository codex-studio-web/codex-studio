function filterSelection(category) {
    const container = document.querySelector('.portfolio-items');
    if (!container) return;
    const items = container.children;
    for (let item of items) {
        if (category === "all") {
            item.style.display = "";
        } else if (item.classList.contains(category)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}

// ...existing code..
// 
const seeBtn = document.getElementById('see');

seeBtn.addEventListener('click', () => {
    const container = document.querySelector('.portfolio-items');
    if (!container) return;
    const items = Array.from(container.children);
    items.forEach(item => {
        item.style.display = "";
    });
    seeBtn.style.display = "none"; // Hide the button after showing all items
});

window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.portfolio-items');
    if (!container) return;
    const items = Array.from(container.children);
    items.forEach((item, idx) => {
        item.style.display = idx < 9 ? "" : "none";
    });
});

